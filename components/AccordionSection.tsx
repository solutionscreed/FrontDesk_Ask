"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import clsx from "clsx";
import { FiArrowRight } from "react-icons/fi";

const items = [
  {
    id: "item-1",
    question: "Approvals take forever.",
    answer: "Dummy answer: Approvals often take long due to unclear workflows.",
  },
  {
    id: "item-2",
    question: "Data scattered in tools",
    answer: "Dummy answer: Use central data dashboards or integrations.",
  },
  {
    id: "item-3",
    question: "Too many manual tasks",
    answer: "Dummy answer: Automate using workflow tools or AI bots.",
  },
  {
    id: "item-4",
    question: "Don’t know where to start",
    answer: "Dummy answer: Start with the biggest pain point and simplify first.",
  },
];

export function AccordionSection() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">
        What’s <span className="text-yellow-500">slowing</span> down your team the most
      </h3>

      <Accordion
        type="single"
        collapsible
        className="w-full rounded-md space-y-2"
        value={activeItem || undefined}
        onValueChange={(val) => setActiveItem(val)}
      >
        {items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger
              className={clsx(
                "px-4 py-2 rounded-md transition text-left",
                activeItem === item.id ? "bg-yellow-300" : "bg-white"
              )}
            >
              {item.question}
            </AccordionTrigger>
            <AccordionContent
              className={clsx(
                "px-4 py-2",
                activeItem === item.id && "bg-yellow-100"
              )}
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-6 text-center">
        <a href="#contact">
          <Button
            variant="default"
            className="rounded-full px-6 py-3 text-sm font-semibold gap-2"
          >
            Tell us about your problem
            <FiArrowRight className="inline-block" />
          </Button>
        </a>
      </div>
    </div>
  );
}
