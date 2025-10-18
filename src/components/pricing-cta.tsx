"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const PRICES: Record<
  "dark-two-tone" | "light-two-tone" | "light-tone" | "dark-tone",
  { label: string; price: string }[]
> = {
  "dark-two-tone": [
    { label: "30cm (60%)", price: "Rp 79.000" },
    { label: "31cm (65%)", price: "Rp 83.000" },
    { label: "32cm (75%)", price: "Rp 87.000" },
    { label: "33cm (75%)", price: "Rp 91.000" },
    { label: "36cm (TKL)", price: "Rp 113.000" },
    { label: "46cm (100%)", price: "Rp 153.000" },
  ],
  "light-two-tone": [
    { label: "30cm (60%)", price: "Rp —" },
    { label: "31cm (65%)", price: "Rp —" },
    { label: "32cm (75%)", price: "Rp —" },
    { label: "33cm (75%)", price: "Rp —" },
    { label: "36cm (TKL)", price: "Rp —" },
    { label: "46cm (100%)", price: "Rp —" },
  ],
  "light-tone": [
    { label: "30cm (60%)", price: "Rp —" },
    { label: "31cm (65%)", price: "Rp —" },
    { label: "32cm (75%)", price: "Rp —" },
    { label: "33cm (75%)", price: "Rp —" },
    { label: "36cm (TKL)", price: "Rp —" },
    { label: "46cm (100%)", price: "Rp —" },
  ],
  "dark-tone": [
    { label: "30cm (60%)", price: "Rp —" },
    { label: "31cm (65%)", price: "Rp —" },
    { label: "32cm (75%)", price: "Rp —" },
    { label: "33cm (75%)", price: "Rp —" },
    { label: "36cm (TKL)", price: "Rp —" },
    { label: "46cm (100%)", price: "Rp —" },
  ],
};

export function PricingCTA() {
  const [variant, setVariant] =
    React.useState<keyof typeof PRICES>("dark-two-tone");
  const sizes = PRICES[variant];

  return (
    <div className="bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="mb-6 text-center space-y-1.5">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Pricing
          </h2>
          <p className="text-muted-foreground">
            Dimension (Width × Depth × Height): 46 × 8 × 1.7 cm
          </p>
        </div>

        <div className="mx-auto mb-4 flex max-w-md flex-wrap items-center justify-center gap-2">
          <button
            className={`rounded-md border px-3 py-1.5 text-sm ${
              variant === "dark-two-tone"
                ? "bg-primary text-primary-foreground"
                : "bg-background"
            }`}
            onClick={() => setVariant("dark-two-tone")}
          >
            Dark Two Tone
          </button>
          <button
            className={`rounded-md border px-3 py-1.5 text-sm ${
              variant === "light-two-tone"
                ? "bg-primary text-primary-foreground"
                : "bg-background"
            }`}
            onClick={() => setVariant("light-two-tone")}
          >
            Light Two Tone
          </button>
          <button
            className={`rounded-md border px-3 py-1.5 text-sm ${
              variant === "light-tone"
                ? "bg-primary text-primary-foreground"
                : "bg-background"
            }`}
            onClick={() => setVariant("light-tone")}
          >
            Light Tone
          </button>
          <button
            className={`rounded-md border px-3 py-1.5 text-sm ${
              variant === "dark-tone"
                ? "bg-primary text-primary-foreground"
                : "bg-background"
            }`}
            onClick={() => setVariant("dark-tone")}
          >
            Dark Tone
          </button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Sizes & Prices — {variant.replace(/-/g, " ")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sizes.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between rounded-md border bg-background px-4 py-4 shadow-sm hover:shadow transition-shadow"
                >
                  <span className="text-sm">{s.label}</span>
                  <span className="text-sm font-semibold">{s.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Prices may vary by wood selection and finish. Share your price
              list for each variant to update these fields.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
