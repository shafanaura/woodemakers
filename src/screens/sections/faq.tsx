import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/lib/i18n";

export function FAQ() {
  const { t } = useI18n();

  const faqItems = [
    { value: "materials", question: t("faq.q1"), answer: t("faq.a1") },
    { value: "care", question: t("faq.q2"), answer: t("faq.a2") },
    { value: "compatibility", question: t("faq.q3"), answer: t("faq.a3") },
    { value: "custom", question: t("faq.q4"), answer: t("faq.a4") },
    { value: "shipping", question: t("faq.q5"), answer: t("faq.a5") },
  ];

  return (
    <SectionWrapper id="faq" ariaLabel="Frequently Asked Questions">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={t("faq.title")} centered />
        <Accordion type="single" collapsible className="mt-6">
          {faqItems.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
}
