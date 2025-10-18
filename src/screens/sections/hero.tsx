import Image from "next/image";
import { ButtonEnhanced } from "@/components/ui/button-enhanced";
import ImageLightbox from "@/components/image-lightbox";
import { useI18n } from "@/lib/i18n";

export function Hero() {
  const { t } = useI18n();

  return (
    <header className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/images/logo-filled.svg"
                alt="WoodeMakers logo"
                width={28}
                height={28}
              />
              <span className="font-medium">{t("common.brand")}</span>
              <span
                className="rounded bg-accent/30 px-2 py-0.5 text-xs text-foreground inline-flex items-center gap-1"
                aria-label="Product origin"
              >
                {t("common.madeInIndonesia")}
                <svg
                  viewBox="0 0 3 2"
                  width="14"
                  height="10"
                  aria-hidden="true"
                >
                  <rect width="3" height="1" fill="#EA1D25" />
                  <rect y="1" width="3" height="1" fill="#ffffff" />
                </svg>
              </span>
            </div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {t("hero.tagline")}
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              {t("hero.headline")}
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <ButtonEnhanced asChild>
                <a href="#buy" aria-label="Shop now">
                  {t("hero.ctaShop")}
                </a>
              </ButtonEnhanced>
              <ButtonEnhanced variant="secondary" asChild>
                <a href="#variants" aria-label="See product variants">
                  {t("hero.ctaVariants")}
                </a>
              </ButtonEnhanced>
            </div>
          </div>
          <div className="relative w-full max-w-xl overflow-hidden rounded-lg border bg-card">
            <ImageLightbox
              src={
                "/placeholder.svg?height=960&width=1280&query=wood desk scene with mechanical keyboard and wooden wrist rest closeup"
              }
              alt={t("hero.imageAlt")}
              caption={t("hero.imageCaption")}
              sizes="(max-width: 768px) 100vw, 480px"
              aspectClass="aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
