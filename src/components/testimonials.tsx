import { Card, CardContent } from "@/components/ui/card"

const items = [
  {
    name: "Raka",
    variant: "Dark Two Tone (31cm)",
    quote: "Smooth surface and just‑right height keep my wrists relaxed. The wood looks beautiful on the desk.",
  },
  {
    name: "Lia",
    variant: "Light Tone (33cm)",
    quote: "Warm and natural feel. After a week of use, long writing sessions are much more comfortable.",
  },
  {
    name: "Dimas",
    variant: "Light Two Tone (36cm)",
    quote: "Minimal aesthetic and solid build quality—fits perfectly with a clean setup.",
  },
]

export function Testimonials() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What They Say</h2>
          <p className="mt-2 text-muted-foreground">
            Selected reviews from Tokopedia, Shopee, TikTok Shop, and other marketplaces.
          </p>
        </div>
        <div className="-mx-4 overflow-x-auto pb-2 scroll-smooth">
          <div className="flex gap-4 snap-x snap-mandatory px-4">
            {items.map((t) => (
              <Card key={t.name} className="min-w-[280px] md:min-w-[360px] snap-start">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <img
                      src="/minimal-user-headshot.jpg"
                      alt={`Profile photo of ${t.name}`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.variant}</p>
                    </div>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground">&quot;{t.quote}&quot;</blockquote>
                  <p className="mt-3 text-[11px] text-muted-foreground">Source: marketplace reviews</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
