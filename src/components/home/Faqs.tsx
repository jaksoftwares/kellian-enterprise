import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { faqs } from "../../lib/constants";
import { FaArrowRightLong } from "react-icons/fa6";

const Faqs = () => {
  return (
    <div className="px-5 lg:px-32 flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-10 py-5 lg:h-96">
      <div className="lg:w-1/2 space-y-5 lg:space-y-10 text-center lg:text-left">
        <div>
          <h2 className="text-primary md:text-xl">FAQ&apos;S</h2>
          <div className="text-customBlue text-2xl md:text-5xl lg:aboutw-7/12">
            <h3>Got questions?</h3>
            <h3>We have answers!</h3>
          </div>
        </div>
        <p className="lg:w-1/2">
          Explore our FAQ&apos;s section for quick answers to the most
          frequently asked questions about our services and appointments.
        </p>

        <Button
          asChild
          variant={"link"}
          className="p-0 font-semibold text-black hover:underline underline lg:no-underline hidden lg:block"
        >
          <Link href={siteConfig.siteLinks.faqsPage}>
            <div className="flex gap-x-2 items-center">
              <span>More FAQ&apos;s</span>
              <FaArrowRightLong />
            </div>
          </Link>
        </Button>
      </div>

      <Accordion type="single" collapsible className="lg:w-2/3">
        {faqs.slice(0, 6).map(({ question, answer }) => (
          <>
            <AccordionItem value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          </>
        ))}
      </Accordion>

      <Button
        asChild
        variant={"link"}
        className="p-0 font-semibold text-black hover:underline underline lg:no-underline flex lg:hidden items-center justify-center"
      >
        <Link href={siteConfig.siteLinks.faqsPage}>
          <div className="flex gap-x-2 items-center">
            <span>More FAQ&apos;s</span>
            <FaArrowRightLong />
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default Faqs;
