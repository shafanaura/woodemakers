import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShopeeIcon, TokopediaIcon, TikTokIcon } from "@/components/icons"

const vendors = [
  {
    name: "Shopee",
    href: "#", // TODO: replace with your Shopee product link
    logoSrc: "/shopee-logo-monochrome.jpg",
    alt: "Shopee logo",
  },
  {
    name: "Tokopedia",
    href: "#", // TODO: replace with your Tokopedia product link
    logoSrc: "/tokopedia-logo-monochrome.jpg",
    alt: "Tokopedia logo",
  },
  {
    name: "TikTok Shop",
    href: "#", // TODO: replace with your TikTok Shop product link
    logoSrc: "/tiktok-shop-logo-monochrome.jpg",
    alt: "TikTok Shop logo",
  },
]

export function WhereToBuy() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-6 text-center space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Where to Buy</h2>
          <p className="text-muted-foreground">
            Order from your favorite marketplace or message us directly for custom requests.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {vendors.map((v) => (
            <Card key={v.name} className="flex h-full flex-col">
              <CardHeader className="items-center">
                <div className="mx-auto aspect-square w-20 overflow-hidden rounded-md bg-muted/40">
                  <img
                    src={v.logoSrc || "/placeholder.svg?height=128&width=128&query=marketplace logo"}
                    alt={v.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
                <CardTitle className="mt-3 text-base text-center">{v.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 text-center text-sm text-muted-foreground">
                Official store listing for Wooden Wrist Rest.
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full gap-2 justify-center">
                  <a href={v.href} target="_blank" rel="noopener noreferrer" aria-label={`Buy on ${v.name}`}>
                    {v.name === "Shopee" ? (
                      <ShopeeIcon className="h-4 w-4" />
                    ) : v.name === "Tokopedia" ? (
                      <TokopediaIcon className="h-4 w-4" />
                    ) : (
                      <TikTokIcon className="h-4 w-4" />
                    )}
                    Visit {v.name}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
