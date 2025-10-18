"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ImageLightboxProps = {
  src: string
  alt: string
  caption?: string
  className?: string
  sizes?: string
  aspectClass?: string // allow 1:1 via aspect-square
}

export function ImageLightbox({ src, alt, caption, className, sizes, aspectClass }: ImageLightboxProps) {
  const [open, setOpen] = React.useState(false)
  const [scale, setScale] = React.useState(1)
  const [tx, setTx] = React.useState(0) // pan x
  const [ty, setTy] = React.useState(0) // pan y
  const dragging = React.useRef(false)
  const last = React.useRef<{ x: number; y: number } | null>(null)

  function zoom(delta: number) {
    setScale((s) => {
      const next = Math.min(5, Math.max(1, s + delta))
      return Number(next.toFixed(2))
    })
  }
  function reset() {
    setScale(1)
    setTx(0)
    setTy(0)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !last.current) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    setTx((v) => v + dx)
    setTy((v) => v + dy)
    last.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerUp = (e: React.PointerEvent) => {
    dragging.current = false
    last.current = null
    ;(e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (!o) reset()
      }}
    >
      <DialogTrigger asChild>
        <button
          aria-label={`Open fullscreen of ${alt}`}
          className={cn(
            aspectClass || "aspect-[4/3]",
            "relative block w-full overflow-hidden rounded-md border cursor-zoom-in",
            className,
          )}
        >
          <Image
            src={src || "/placeholder.svg?height=600&width=600&query=wood product"}
            alt={alt}
            fill
            className="object-cover"
            sizes={sizes || "(max-width:768px) 100vw, 50vw"}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[95vw] w-auto !bg-transparent !border-0">
        <div
          className={cn(
            "relative mx-auto max-h-[90vh] max-w-[95vw] overflow-hidden rounded-md bg-black/85",
            scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default",
          )}
          onContextMenu={(e) => e.preventDefault()}
          onWheel={(e) => {
            e.preventDefault()
            zoom(e.deltaY < 0 ? 0.15 : -0.15)
          }}
          onDoubleClick={() => {
            setScale((s) => {
              const next = s > 1 ? 1 : 2
              if (next === 1) {
                setTx(0)
                setTy(0)
              }
              return next
            })
          }}
        >
          <div
            className="relative"
            style={{
              width: "min(92vw, 1600px)",
              height: "min(88vh, 1000px)",
              touchAction: scale > 1 ? "none" : "auto",
            }}
            onPointerDown={(e) => {
              // only right-click (button===2) for mouse, allow touch for mobile
              // @ts-expect-error button exists on mouse events
              if ((e.pointerType === "mouse" && e.button !== 2) || scale <= 1) return
              dragging.current = true
              last.current = { x: e.clientX, y: e.clientY }
              ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
            }}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <Image
              src={src || "/placeholder.svg?height=600&width=600&query=wood product"}
              alt={alt}
              fill
              className="object-contain transition-transform duration-100 ease-out"
              style={{ transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})` }}
              sizes="90vw"
              priority
            />
          </div>

          <div className="pointer-events-auto absolute bottom-3 right-3 flex items-center gap-2">
            <button
              type="button"
              onClick={() => zoom(-0.25)}
              className="rounded bg-white/90 px-3 py-1 text-sm font-medium text-black hover:bg-white"
              aria-label="Zoom out"
            >
              −
            </button>
            <span className="rounded bg-white/80 px-2 py-1 text-xs font-medium text-black">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={() => zoom(0.25)}
              className="rounded bg-white/90 px-3 py-1 text-sm font-medium text-black hover:bg-white"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              onClick={reset}
              className="rounded bg-white/90 px-3 py-1 text-sm font-medium text-black hover:bg-white"
              aria-label="Reset zoom"
            >
              Reset
            </button>
          </div>

          {caption ? (
            <p className="absolute left-0 right-0 top-2 mx-auto w-fit rounded bg-black/60 px-3 py-1 text-xs text-white">
              {caption}
            </p>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageLightbox
