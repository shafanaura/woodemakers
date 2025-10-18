import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ImageLightbox from "@/components/image-lightbox"
import { ShopeeIcon, TokopediaIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons"

type Variant = {
  key: string
  name: string
  desc: string
  img: string
  alt: string
}

const variants: Variant[] = [
  {
    key: "dark-two-tone",
    name: "Dark Two Tone",
    desc: "Bold two-tone character that pairs beautifully with dark keycaps.",
    img: "/images/woode-2.jpg",
    alt: "Dark Two Tone wooden wrist rest next to a keyboard",
  },
  {
    key: "light-two-tone",
    name: "Light Two Tone",
    desc: "Bright, airy contrast—perfect for clean, minimal desk setups.",
    img: "/images/woode-7.jpg",
    alt: "Light Two Tone wrist rest showing rounded edges and stripe detail",
  },
  {
    key: "light-tone",
    name: "Light Tone",
    desc: "Single light tone with subtle grain for a fresh, natural look.",
    img: "/images/woode-6.jpg",
    alt: "Light tone wrist rest with polyurethane finishing",
  },
  {
    key: "dark-tone",
    name: "Dark Tone",
    desc: "Warm, rich single tone for a timeless aesthetic.",
    img: "/images/woode-4.jpg",
    alt: "Dark tone wrist rest in use showing ergonomic angle",
  },
]

export function Variants() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-5 text-center space-y-1.5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Product Variants</h2>
          <p className="text-muted-foreground">Pick your finish—each piece has unique natural grain.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {variants.map((v) => (
            <Card key={v.key} className="flex h-full flex-col overflow-hidden">
              <CardHeader className="space-y-2">
                <ImageLightbox
                  src={v.img || "/placeholder.svg?height=600&width=600&query=wooden wrist rest variant"}
                  alt={v.alt}
                  caption={v.name}
                  sizes="(max-width: 768px) 100vw, 25vw"
                  aspectClass="aspect-square"
                />
                <CardTitle className="text-base">{v.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">{v.desc}</CardContent>
              <CardFooter className="mt-auto">
                <div className="flex w-full flex-col gap-2">
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent justify-center" asChild>
                    <a href="#shopee" aria-label={`Buy ${v.name} on Shopee`}>
                      <ShopeeIcon className="h-4 w-4" /> Shopee
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent justify-center" asChild>
                    <a href="#tokopedia" aria-label={`Buy ${v.name} on Tokopedia`}>
                      <TokopediaIcon className="h-4 w-4" /> Tokopedia
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent justify-center" asChild>
                    <a href="#tiktok" aria-label={`Buy ${v.name} on TikTok Shop`}>
                      <TikTokIcon className="h-4 w-4" /> TikTok Shop
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-2 bg-transparent justify-center" asChild>
                    <a href="#wa" aria-label={`Order ${v.name} via WhatsApp`}>
                      <WhatsAppIcon className="h-4 w-4" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
