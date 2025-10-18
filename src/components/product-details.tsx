import { ImageLightbox } from "@/components/image-lightbox"

const details = [
  {
    key: "size",
    title: "Size & Profile",
    desc: "Balanced 8 cm depth and 1.7 cm height for a neutral wrist angle and stable base.",
    img: "/images/woode-5.jpg",
    alt: "Close-up with dimensions 8 cm and 1.7 cm",
  },
  {
    key: "finishing",
    title: "Premium Finishing",
    desc: "Protected with polyurethane from Propan Indonesia for long-lasting durability.",
    img: "/images/woode-6.jpg",
    alt: "Finishing with Polyurethane from Propan Indonesia",
  },
  {
    key: "curvature",
    title: "Comfort Curvature",
    desc: "Smoothed top edges and rounded corners for a comfortable palm contact.",
    img: "/images/woode-7.jpg",
    alt: "Rounded edges and crafted profile",
  },
  {
    key: "material",
    title: "Hardwood Selection",
    desc: "Crafted with a combination of Teak and Pine for strength and warm aesthetics.",
    img: "/images/woode-9.jpg",
    alt: "Composition of Teak and Pine woods",
  },
  {
    key: "non-slip",
    title: "Non-slip Base",
    desc: "Textured silicone pads keep your wrist rest firmly in place—no slide, no wobble.",
    img: "/images/woode-8.jpg",
    alt: "Bottom non-slip silicone pads close-up",
  },
  {
    key: "ergonomics",
    title: "Ergonomic Support",
    desc: "Promotes a neutral wrist angle—type, play, and relax with better comfort.",
    img: "/images/woode-4.jpg",
    alt: "Ergonomic wrist angle comparison",
  },
]

export function ProductDetails() {
  return (
    <section aria-labelledby="details-heading" className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h2 id="details-heading" className="text-pretty text-3xl md:text-4xl font-semibold">
            Product Details
          </h2>
          <p className="text-muted-foreground mt-2">
            Explore the build quality and comfort features that make this wrist rest stand out.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {details.map((d) => (
            <article key={d.key} className="border bg-card text-card-foreground overflow-hidden rounded-t-lg">
              <div className="rounded-t-lg overflow-hidden">
                <ImageLightbox
                  src={d.img || "/placeholder.svg?height=720&width=960&query=wood product detail"}
                  alt={d.alt}
                  caption={d.title}
                  sizes="(max-width:768px) 100vw, 33vw"
                  aspectClass="aspect-square"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{d.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
