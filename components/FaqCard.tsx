"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "We're not sure what to automate first. Can you help?",
    answer: "Yes! We help identify the most impactful automations for your team.",
  },
  {
    question: "Do we need any technical skills to maintain these automations?",
    answer: "No, we use no-code tools. We also train your team.",
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "Clients have seen up to 4x faster delivery & 230+ hours saved in a month.",
  },
  {
    question: "Is this secure? What about data privacy and other security stuff?",
    answer: "We follow best practices and tools with enterprise-grade security.",
  },
];

export function FaqCard() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-center text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-xl mx-auto space-y-2">
        {faqItems.map((item, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="bg-white px-4 py-3 rounded-md text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="bg-white px-4 py-2">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
