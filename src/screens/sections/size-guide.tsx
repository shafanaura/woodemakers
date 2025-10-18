import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { SizeGuideItem } from "@/components/ui/size-guide-item";
import { useI18n } from "@/lib/i18n";

export default function SizeGuide() {
  const { t } = useI18n();

  const sizeItems = [
    {
      title: t("sizeGuide.items.p60.title"),
      description: t("sizeGuide.items.p60.desc"),
    },
    {
      title: t("sizeGuide.items.p65_75.title"),
      description: t("sizeGuide.items.p65_75.desc"),
    },
    {
      title: t("sizeGuide.items.tkl.title"),
      description: t("sizeGuide.items.tkl.desc"),
    },
    {
      title: t("sizeGuide.items.full.title"),
      description: t("sizeGuide.items.full.desc"),
    },
  ];

  return (
    <SectionWrapper id="size-guide" ariaLabel="Size Guide">
      <SectionHeader
        title={t("sizeGuide.title")}
        subtitle={t("sizeGuide.subtitle")}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sizeItems.map((item) => (
          <SizeGuideItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
