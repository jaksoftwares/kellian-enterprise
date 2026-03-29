import { AllFaqs, AnyQuestion, FaqsBanner } from "@/components";
import React from "react";

const Faqs = () => {
  return (
    <>
      <FaqsBanner />
      <div className="flex p-4 lg:px-32 flex-col lg:flex-row gap-y-8 lg:gap-y-0 items-center">
        <AllFaqs />
        <AnyQuestion />
      </div>
    </>
  );
};

export default Faqs;
