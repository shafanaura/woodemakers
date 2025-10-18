import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { ButtonEnhanced } from "@/components/ui/button-enhanced";
import { useI18n } from "@/lib/i18n";

export function SocialVideos() {
  const { t } = useI18n();

  return (
    <SectionWrapper id="videos" ariaLabel="Videos" padding="lg">
      <SectionHeader
        title={t("videos.title")}
        subtitle={t("videos.subtitle")}
      />

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
            <h3 className="font-medium">{t("videos.youtube.title")}</h3>
            <p className="text-sm text-muted-foreground">
              {t("videos.youtube.desc")}
            </p>
          </div>
        </article>

        <article className="rounded-lg border bg-card text-card-foreground p-4 flex flex-col">
          <div className="flex-1">
            <h3 className="font-medium">{t("videos.tiktok.title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("videos.tiktok.desc")}
            </p>
          </div>
          <a
            href="https://tiktok.com/@woode.makers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition cursor-pointer"
            aria-label="Open TikTok video"
          >
            {t("videos.tiktok.cta")}
          </a>
        </article>

        <article className="rounded-lg border bg-card text-card-foreground p-4 flex flex-col">
          <div className="flex-1">
            <h3 className="font-medium">{t("videos.instagram.title")}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t("videos.instagram.desc")}
            </p>
          </div>
          <a
            href="https://instagram.com/woode.makers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition cursor-pointer"
            aria-label="Open Instagram post"
          >
            {t("videos.instagram.cta")}
          </a>
        </article>
      </div>
    </SectionWrapper>
  );
}
