import { fiveReasonsWhy } from "@/lib/constants";
import { T_BasicSomething } from "@/lib/types";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="grid place-items-center lg:place-items-baseline lg:grid-cols-3 bg-gray-200 py-12 px-8 gap-3 lg:px-48 lg:py-16">
      <div className="lg:w-11/12 lg:h-64">
        <h2 className="text-primary md:text-xl">
          WE ARE WHAT YOUR VEHICLE NEEDS
        </h2>
        <p className="text-customBlue text-4xl md:text-6xl">Why choose us?</p>
        <p>
          Discover what sets us apart! From top-notch service to customer care,
          here's why we're the best choice for all your vehicle needs.
        </p>
      </div>

      {fiveReasonsWhy.map((reason) => (
        <WhyChooseUsCard key={reason.title} reason={reason} />
      ))}
    </div>
  );
};

interface WhyChooseUsCardProps {
  reason: T_BasicSomething;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({ reason }) => {
  const { title, description, imageUrl } = reason;

  return (
    <div className="bg-white rounded-lg p-5 lg:w-11/12 h-64 flex flex-col justify-between hover:bg-custom-blue-gradient hover:cursor-pointer duration-300 group">
      <div className="flex items-center gap-x-5">
        <Image src={imageUrl!} alt="Choose us." width={35} height={35} />
        <h4 className="text-customBlue font-semibold text-xl transition-colors group-hover:text-white">
          {title}
        </h4>
      </div>
      <p className="mt-3 text-gray-700 transition-colors group-hover:text-white flex-1">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseUs;
