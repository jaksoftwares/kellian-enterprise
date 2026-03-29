import {
  AboutKellian,
  AboutUsBanner,
  OurExperts,
  OurMission,
  WhyChooseUs,
} from "../../../components";
import React from "react";

const Page = () => {
  return (
    <div className="space-y-8 lg:space-y-16">
      <AboutUsBanner />
      <div className="px-8 lg:px-48 space-y-10">
        <AboutKellian />
      </div>
      <WhyChooseUs />
      <OurMission />
      <OurExperts />
    </div>
  );
};

export default Page;
