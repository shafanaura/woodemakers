export default function SizeGuide() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-5 text-center space-y-1.5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Size Guide</h2>
          <p className="text-muted-foreground">Pick the ideal length for your keyboard layout.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">60% (30 cm)</h3>
            <p className="text-sm text-muted-foreground mt-1">Compact boards; aligns with alpha keys footprint.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">65%–75% (31–33 cm)</h3>
            <p className="text-sm text-muted-foreground mt-1">Fits layouts with arrows and extra columns.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">TKL (36 cm)</h3>
            <p className="text-sm text-muted-foreground mt-1">Tenkeyless; leaves space for mouse hand.</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium">Full-size (46 cm)</h3>
            <p className="text-sm text-muted-foreground mt-1">Covers numpad width for 100% keyboards.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
