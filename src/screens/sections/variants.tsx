import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { VariantCard } from "@/components/ui/variant-card";
import { useI18n } from "@/lib/i18n";

export function Variants() {
  const { t } = useI18n();

  const variants = [
    {
      key: "dark-two-tone",
      name: t("variants.names.darkTwoTone"),
      description: t("variants.descriptions.darkTwoTone"),
      imageSrc: "/images/woode-2.jpg",
      imageAlt: "Dark Two Tone wooden wrist rest next to a keyboard",
    },
    {
      key: "light-two-tone",
      name: t("variants.names.lightTwoTone"),
      description: t("variants.descriptions.lightTwoTone"),
      imageSrc: "/images/woode-7.jpg",
      imageAlt:
        "Light Two Tone wrist rest showing rounded edges and stripe detail",
    },
    {
      key: "light-tone",
      name: t("variants.names.lightTone"),
      description: t("variants.descriptions.lightTone"),
      imageSrc: "/images/woode-6.jpg",
      imageAlt: "Light tone wrist rest with polyurethane finishing",
    },
    {
      key: "dark-tone",
      name: t("variants.names.darkTone"),
      description: t("variants.descriptions.darkTone"),
      imageSrc: "/images/woode-4.jpg",
      imageAlt: "Dark tone wrist rest in use showing ergonomic angle",
    },
  ];

  const buyOptions = {
    shopee: "https://shopee.co.id/woode.makers",
    tokopedia: "https://www.tokopedia.com/woodemakers",
    tiktok: "https://tiktok.com/@woode.makers",
    whatsapp: "https://api.whatsapp.com/send?phone=6285117732112",
  };

  const translations = {
    shopee: t("variants.buy.shopee"),
    tokopedia: t("variants.buy.tokopedia"),
    tiktok: t("variants.buy.tiktok"),
    whatsapp: t("variants.buy.whatsapp"),
  };

  return (
    <SectionWrapper id="variants" ariaLabel="Product Variants">
      <SectionHeader
        title={t("variants.title")}
        subtitle={t("variants.subtitle")}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {variants.map((variant) => (
          <VariantCard
            key={variant.key}
            name={variant.name}
            description={variant.description}
            imageSrc={variant.imageSrc}
            imageAlt={variant.imageAlt}
            buyOptions={buyOptions}
            translations={translations}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
