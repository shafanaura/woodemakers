import { Hero } from "@/components/hero"
import { FeatureGrid } from "@/components/feature-grid"
import { Variants } from "@/components/variants"
import { Testimonials } from "@/components/testimonials"
import { PricingCTA } from "@/components/pricing-cta"
import { WhereToBuy } from "@/components/where-to-buy"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { ProductDetails } from "@/components/product-details"
import { SocialVideos } from "@/components/social-videos"
import SizeGuide from "@/components/size-guide"

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
  )
}
