import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HandIcon } from "@/components/icons"

const features = [
  {
    title: "Ergonomic Comfort",
    desc: "Supports a natural wrist angle to reduce tension during long typing sessions.",
    imgAlt: "Hand icon",
    Icon: HandIcon,
  },
  {
    title: "Premium Solid Wood",
    desc: "Teak (dark) and pine (light) options with unique natural grain and matte polyurethane finish.",
    imgAlt: "Solid wood icon",
    imageSrc: "/wood-grain-icon-line-art.jpg",
  },
  {
    title: "Anti‑Slip Stability",
    desc: "Rubber underside keeps the wrist rest steady on different desk surfaces.",
    imgAlt: "Anti slip icon",
    imageSrc: "/non-slip-icon-line-art.jpg",
  },
  {
    title: "Multiple Sizes",
    desc: "Available for 60%, 65%, 75%, TKL, and Full‑size layouts.",
    imgAlt: "Size options icon",
    imageSrc: "/ruler-size-icon-line-art.jpg",
  },
]

export function FeatureGrid() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-5 text-center space-y-1.5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Why Choose Our Wrist Rest?</h2>
          <p className="text-muted-foreground">
            Natural aesthetics meet ergonomic function for comfortable productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} className="h-full">
              <CardHeader>
                <div className="mb-2 h-8 w-8 text-primary">
                  {"Icon" in f && f.Icon ? (
                    <f.Icon className="h-8 w-8" />
                  ) : (
                    <img
                      src={f.imageSrc || "/placeholder.svg?height=32&width=32&query=feature%20icon"}
                      alt={f.imgAlt}
                      className="h-8 w-8"
                    />
                  )}
                </div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
