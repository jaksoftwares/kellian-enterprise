import React from "react";
import SectionTitleWithRedUnderline from "./SectionTitleWithRedUnderline";
import { carWashServices } from "@/lib/constants";
import { T_BasicSomething } from "@/lib/types";
import Image from "next/image";

const CarWashServices = () => {
  return (
    <div className="space-y-10">
      <SectionTitleWithRedUnderline title="Car Wash Services" />

      <ul className="grid lg:grid-cols-3 gap-4">
        {carWashServices.map((cws, index) => (
          <CarWashService key={index} cws={cws} />
        ))}
      </ul>
    </div>
  );
};

interface CarWashServiceProps {
  cws: T_BasicSomething;
}

const CarWashService: React.FC<CarWashServiceProps> = ({ cws }) => {
  const { imageUrl, title, description } = cws;

  return (
    <li className="border-2 border-black rounded-lg flex flex-col items-center justify-center p-5 space-y-4">
      <div className="w-full h-64 flex items-center justify-center overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageUrl!}
          alt={title}
          width={400}
          height={400}
          className="rounded-md object-cover max-w-full max-h-full"
        />
      </div>

      <h4 className="text-xl text-customBlue font-semibold text-center">
        {title}
      </h4>
      <p className="text-lg text-center">{description}</p>
    </li>
  );
};

export default CarWashServices;
