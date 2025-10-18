import Image from "next/image"

const variants = [
  {
    key: "dark-two-tone",
    name: "Dark Two Tone",
    img: "/images/woode-2.jpg",
    alt: "Dark Two Tone wooden wrist rest next to a keyboard",
  },
  {
    key: "light-two-tone",
    name: "Light Two Tone",
    img: "/images/woode-7.jpg",
    alt: "Light two tone wrist rest showing rounded edges",
  },
  {
    key: "light-tone",
    name: "Light Tone",
    img: "/images/woode-6.jpg",
    alt: "Light tone wrist rest with polyurethane finishing",
  },
  {
    key: "dark-tone",
    name: "Dark Tone",
    img: "/images/woode-4.jpg",
    alt: "Dark tone wrist rest in use showing ergonomic angle",
  },
]

export function VariantsGrid() {
  return (
    <section aria-labelledby="variants-heading" className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h2 id="variants-heading" className="text-pretty text-3xl md:text-4xl font-semibold">
            Choose Your Variant
          </h2>
          <p className="text-muted-foreground mt-2">Four handcrafted finishes to match your setup and typing style.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {variants.map((v) => (
            <article key={v.key} className="rounded-lg border bg-card text-card-foreground overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={v.img || "/placeholder.svg"}
                  alt={v.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{v.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
