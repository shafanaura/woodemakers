import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PriceItem } from "@/components/ui/price-item";
import { ButtonEnhanced } from "@/components/ui/button-enhanced";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const PRICES: Record<
  "dark-two-tone" | "light-two-tone" | "light-tone" | "dark-tone",
  { label: string; price: string }[]
> = {
  "dark-two-tone": [
    { label: "30cm (60%)", price: "IDR 79.000" },
    { label: "31cm (65%)", price: "IDR 83.000" },
    { label: "32cm (75%)", price: "IDR 87.000" },
    { label: "33cm (75%)", price: "IDR 91.000" },
    { label: "36cm (TKL)", price: "IDR 113.000" },
    { label: "46cm (100%)", price: "IDR 153.000" },
  ],
  "light-two-tone": [
    { label: "30cm (60%)", price: "IDR —" },
    { label: "31cm (65%)", price: "IDR —" },
    { label: "32cm (75%)", price: "IDR —" },
    { label: "33cm (75%)", price: "IDR —" },
    { label: "36cm (TKL)", price: "IDR —" },
    { label: "46cm (100%)", price: "IDR —" },
  ],
  "light-tone": [
    { label: "30cm (60%)", price: "IDR —" },
    { label: "31cm (65%)", price: "IDR —" },
    { label: "32cm (75%)", price: "IDR —" },
    { label: "33cm (75%)", price: "IDR —" },
    { label: "36cm (TKL)", price: "IDR —" },
    { label: "46cm (100%)", price: "IDR —" },
  ],
  "dark-tone": [
    { label: "30cm (60%)", price: "IDR —" },
    { label: "31cm (65%)", price: "IDR —" },
    { label: "32cm (75%)", price: "IDR —" },
    { label: "33cm (75%)", price: "IDR —" },
    { label: "36cm (TKL)", price: "IDR —" },
    { label: "46cm (100%)", price: "IDR —" },
  ],
};

export function PricingCTA() {
  const { t } = useI18n();
  const [variant, setVariant] = useState<keyof typeof PRICES>("dark-two-tone");
  const sizes = PRICES[variant];

  const variantButtons = [
    { key: "dark-two-tone" as const, label: t("variants.names.darkTwoTone") },
    { key: "light-two-tone" as const, label: t("variants.names.lightTwoTone") },
    { key: "light-tone" as const, label: t("variants.names.lightTone") },
    { key: "dark-tone" as const, label: t("variants.names.darkTone") },
  ];

  return (
    <SectionWrapper id="pricing" ariaLabel="Pricing" background="secondary">
      <SectionHeader
        title={t("pricing.title")}
        subtitle={t("pricing.dimension")}
      />

      <div className="mx-auto mb-4 flex max-w-md flex-wrap items-center justify-center gap-2">
        {variantButtons.map((button) => (
          <ButtonEnhanced
            key={button.key}
            className={`rounded-md border px-3 py-1.5 text-sm cursor-pointer ${
              variant === button.key
                ? "bg-primary text-primary-foreground"
                : "bg-background text-foreground hover:text-white"
            }`}
            onClick={() => setVariant(button.key)}
          >
            {button.label}
          </ButtonEnhanced>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            {t("pricing.sizesPrices", { variant: variant.replace(/-/g, " ") })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sizes.map((size) => (
              <PriceItem
                key={size.label}
                label={size.label}
                price={size.price}
              />
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {t("pricing.note")}
          </p>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
