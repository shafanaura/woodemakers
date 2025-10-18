"use client";

import { Hero } from "./sections/hero";
import { FeatureGrid } from "./sections/feature-grid";
import { Variants } from "./sections/variants";
import { Testimonials } from "./sections/testimonials";
import { PricingCTA } from "./sections/pricing-cta";
import { WhereToBuy } from "./sections/where-to-buy";
import { FAQ } from "./sections/faq";
import { Footer } from "./sections/footer";
import { ProductDetails } from "./sections/product-details";
import { SocialVideos } from "./sections/social-videos";
import SizeGuide from "./sections/size-guide";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section id="features" aria-label="Features">
        <FeatureGrid />
      </section>
      <section id="variants" aria-label="Product Variants">
        <Variants />
      </section>
      <section id="size-guide" aria-label="Size Guide">
        <SizeGuide />
      </section>
      <section id="details" aria-label="Product Details">
        <ProductDetails />
      </section>
      <section id="videos" aria-label="Videos">
        <SocialVideos />
      </section>
      <section aria-label="Testimonials">
        <Testimonials />
      </section>
      <section id="pricing" aria-label="Pricing">
        <PricingCTA />
      </section>
      <section id="buy" aria-label="Where to Buy">
        <WhereToBuy />
      </section>
      <section id="faq" aria-label="Frequently Asked Questions">
        <FAQ />
      </section>
      <Footer />
    </main>
  );
}
