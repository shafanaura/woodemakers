import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="materials">
            <AccordionTrigger className="cursor-pointer">What wood and finish are used?</AccordionTrigger>
            <AccordionContent>
              Solid teak (dark tone) and pine (light tone). Finished with matte polyurethane—durable and
              water‑resistant, with a warm, natural feel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="care">
            <AccordionTrigger className="cursor-pointer">How do I care for it?</AccordionTrigger>
            <AccordionContent>
              Wipe with a dry or slightly damp cloth. No special oiling needed—the polyurethane finish protects the wood
              for years of use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="compatibility">
            <AccordionTrigger className="cursor-pointer">Which sizes are available?</AccordionTrigger>
            <AccordionContent>
              Options for 60%, 65%, 75%, TKL, and Full‑size layouts. Please measure your keyboard length (in cm) to
              ensure a perfect fit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="custom">
            <AccordionTrigger className="cursor-pointer">Can I request a custom length?</AccordionTrigger>
            <AccordionContent>
              Yes. We accept custom orders on a pre‑order basis (~7 days). Contact us via WhatsApp to confirm details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger className="cursor-pointer">What is your shipping schedule?</AccordionTrigger>
            <AccordionContent>
              Orders before 12:00 (GMT+7) ship the same day; after 12:00 ship the next day. Orders after Saturday 12:00
              ship on Monday.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
