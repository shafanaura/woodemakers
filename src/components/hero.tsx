"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import ImageLightbox from "@/components/image-lightbox"

export function Hero() {
  return (
    <header className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <Image src="/images/logo-filled.svg" alt="WoodeMakers logo" width={28} height={28} />
              <span className="font-medium">WoodeMakers</span>
              <span
                className="rounded bg-accent/30 px-2 py-0.5 text-xs text-foreground inline-flex items-center gap-1"
                aria-label="Product origin"
              >
                Made in Indonesia
                <svg viewBox="0 0 3 2" width="14" height="10" aria-hidden="true">
                  <rect width="3" height="1" fill="#EA1D25" />
                  <rect y="1" width="3" height="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Ergonomic • Handcrafted • Solid Wood</p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">Wooden Wrist Rest</h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Designed to keep your wrist posture ergonomic during long typing sessions—minimizing strain and fatigue.
              Solid teak (dark tone) and pine (light tone) options, polyurethane matte finish, and a rubber anti‑slip
              base for stable, warm, and durable comfort.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Button asChild>
                <a href="#buy" aria-label="Shop now">
                  Shop Now
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#variants" aria-label="See product variants">
                  See Variants
                </a>
              </Button>
            </div>
          </div>
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg border bg-card">
            <ImageLightbox
              src={
                "/placeholder.svg?height=960&width=1280&query=wood desk scene with mechanical keyboard and wooden wrist rest closeup"
              }
              alt="Wooden wrist rest on a desk with a mechanical keyboard"
              caption="WoodeMakers — Wooden Wrist Rest"
              sizes="(max-width: 768px) 100vw, 480px"
              aspectClass="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
