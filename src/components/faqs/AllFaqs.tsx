import React from "react";
import { faqs } from "@/lib/constants";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const AllFaqs = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="lg:w-1/2 h-96 overflow-scroll relative"
    >
      {faqs.map(({ question, answer }) => (
        <AccordionItem className="px-2" value={question} key={question}>
          <AccordionTrigger>{question}</AccordionTrigger>
          <AccordionContent>{answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AllFaqs;
