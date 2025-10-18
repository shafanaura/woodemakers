import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();

  const items = [
    {
      name: "Raka",
      variant: "Dark Two Tone (31cm)",
      quote:
        "Smooth surface and just‑right height keep my wrists relaxed. The wood looks beautiful on the desk.",
    },
    {
      name: "Lia",
      variant: "Light Tone (33cm)",
      quote:
        "Warm and natural feel. After a week of use, long writing sessions are much more comfortable.",
    },
    {
      name: "Dimas",
      variant: "Light Two Tone (36cm)",
      quote:
        "Minimal aesthetic and solid build quality—fits perfectly with a clean setup.",
    },
  ];

  return (
    <SectionWrapper ariaLabel="Testimonials">
      <SectionHeader
        title={t("testimonials.title")}
        subtitle={t("testimonials.subtitle")}
      />
      <div className="-mx-4 overflow-x-auto pb-2 scroll-smooth">
        <div className="flex gap-4 snap-x snap-mandatory px-4">
          {items.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              variant={item.variant}
              quote={item.quote}
              source={t("testimonials.source")}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
