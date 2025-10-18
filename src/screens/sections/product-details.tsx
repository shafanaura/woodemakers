import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductDetailCard } from "@/components/ui/product-detail-card";
import { useI18n } from "@/lib/i18n";

export function ProductDetails() {
  const { t } = useI18n();

  const details = [
    {
      key: "size",
      title: t("details.items.size.title"),
      description: t("details.items.size.desc"),
      imageSrc: "/images/woode-5.jpg",
      imageAlt: t("details.items.size.alt"),
    },
    {
      key: "finishing",
      title: t("details.items.finishing.title"),
      description: t("details.items.finishing.desc"),
      imageSrc: "/images/woode-6.jpg",
      imageAlt: t("details.items.finishing.alt"),
    },
    {
      key: "curvature",
      title: t("details.items.curvature.title"),
      description: t("details.items.curvature.desc"),
      imageSrc: "/images/woode-7.jpg",
      imageAlt: t("details.items.curvature.alt"),
    },
    {
      key: "material",
      title: t("details.items.material.title"),
      description: t("details.items.material.desc"),
      imageSrc: "/images/woode-9.jpg",
      imageAlt: t("details.items.material.alt"),
    },
    {
      key: "non-slip",
      title: t("details.items.nonSlip.title"),
      description: t("details.items.nonSlip.desc"),
      imageSrc: "/images/woode-8.jpg",
      imageAlt: t("details.items.nonSlip.alt"),
    },
    {
      key: "ergonomics",
      title: t("details.items.ergonomics.title"),
      description: t("details.items.ergonomics.desc"),
      imageSrc: "/images/woode-4.jpg",
      imageAlt: t("details.items.ergonomics.alt"),
    },
  ];

  return (
    <SectionWrapper id="details" ariaLabel="Product Details" padding="lg">
      <SectionHeader
        title={t("details.title")}
        subtitle={t("details.subtitle")}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {details.map((detail) => (
          <ProductDetailCard
            key={detail.key}
            title={detail.title}
            description={detail.description}
            imageSrc={detail.imageSrc}
            imageAlt={detail.imageAlt}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
