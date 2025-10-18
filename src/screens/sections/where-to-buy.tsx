import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { VendorCard } from "@/components/ui/vendor-card";
import { useI18n } from "@/lib/i18n";

export function WhereToBuy() {
  const { t } = useI18n();

  const vendors = [
    {
      name: "Shopee",
      href: "https://shopee.co.id/woode.makers",
      logoSrc: "/shopee-logo-monochrome.jpg",
      alt: "Shopee logo",
    },
    {
      name: "Tokopedia",
      href: "https://www.tokopedia.com/woodemakers",
      logoSrc: "/tokopedia-logo-monochrome.jpg",
      alt: "Tokopedia logo",
    },
    {
      name: "TikTok Shop",
      href: "https://tiktok.com/@woode.makers",
      logoSrc: "/tiktok-shop-logo-monochrome.jpg",
      alt: "TikTok Shop logo",
    },
  ];

  return (
    <SectionWrapper id="buy" ariaLabel="Where to Buy">
      <SectionHeader title={t("where.title")} subtitle={t("where.subtitle")} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {vendors.map((vendor) => (
          <VendorCard
            key={vendor.name}
            name={vendor.name}
            href={vendor.href}
            logoSrc={vendor.logoSrc}
            alt={vendor.alt}
            description={t("where.official")}
            buttonText={t("where.visit", { name: vendor.name })}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
