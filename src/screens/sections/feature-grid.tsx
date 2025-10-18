import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { FaHands, FaTree, FaShieldAlt, FaRuler } from "react-icons/fa";
import { useI18n } from "@/lib/i18n";

export function FeatureGrid() {
  const { t } = useI18n();

  const features = [
    {
      title: t("feature.items.ergonomic.title"),
      description: t("feature.items.ergonomic.desc"),
      imageAlt: "Ergonomic comfort icon",
      icon: FaHands,
    },
    {
      title: t("feature.items.solidWood.title"),
      description: t("feature.items.solidWood.desc"),
      imageAlt: "Premium solid wood icon",
      icon: FaTree,
    },
    {
      title: t("feature.items.antiSlip.title"),
      description: t("feature.items.antiSlip.desc"),
      imageAlt: "Anti-slip stability icon",
      icon: FaShieldAlt,
    },
    {
      title: t("feature.items.sizes.title"),
      description: t("feature.items.sizes.desc"),
      imageAlt: "Multiple sizes icon",
      icon: FaRuler,
    },
  ];

  return (
    <SectionWrapper id="features" ariaLabel="Features">
      <SectionHeader
        title={t("feature.title")}
        subtitle={t("feature.subtitle")}
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            imageAlt={feature.imageAlt}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
