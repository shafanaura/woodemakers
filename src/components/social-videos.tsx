export function SocialVideos() {
  return (
    <section aria-labelledby="videos-heading" className="bg-background text-foreground py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <header className="mb-10">
          <h2 id="videos-heading" className="text-pretty text-3xl md:text-4xl font-semibold">
            Watch the Product in Action
          </h2>
          <p className="text-muted-foreground mt-2">See real-world clips from YouTube, TikTok, and Instagram.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="rounded-lg border overflow-hidden">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">YouTube Review</h3>
              <p className="text-sm text-muted-foreground">Replace with your real YouTube video.</p>
            </div>
          </article>

          <article className="rounded-lg border bg-card text-card-foreground p-4 flex flex-col">
            <div className="flex-1">
              <h3 className="font-medium">TikTok Clip</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Embed requires a post URL. We recommend linking out for performance.
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@youraccount/video/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition"
              aria-label="Open TikTok video"
            >
              Watch on TikTok
            </a>
          </article>

          <article className="rounded-lg border bg-card text-card-foreground p-4 flex flex-col">
            <div className="flex-1">
              <h3 className="font-medium">Instagram Reel</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Link to your Reel or Post. Embeds often require external scripts.
              </p>
            </div>
            <a
              href="https://www.instagram.com/p/XXXXXXXXXXX/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition"
              aria-label="Open Instagram post"
            >
              View on Instagram
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
