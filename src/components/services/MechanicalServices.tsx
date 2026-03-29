import React from "react";
import SectionTitleWithRedUnderline from "./SectionTitleWithRedUnderline";
import { T_BasicSomething } from "@/lib/types";
import { mechanicalServices } from "@/lib/constants";
import Image from "next/image";

const MechanicalServices = () => {
  return (
    <div
      className="flex flex-col lg:flex-row items-center gap-x-5"
      id="mechanical-services"
    >
      <ul className="grid lg:grid-cols-2 gap-5 order-2 lg:order-none">
        {mechanicalServices.map((ms, index) => (
          <MechanicalServiceCard key={index} ms={ms} />
        ))}
      </ul>

      <div className="order-1 lg:order-none my-4">
        <SectionTitleWithRedUnderline title="Mechanical Services" />
        <p>
          Kellian provides a comprehensive range of major and minor mechanical
          services to keep your vehicle running smoothly.
        </p>
      </div>
    </div>
  );
};

interface MechanicalServiceCardProps {
  ms: T_BasicSomething;
}

const MechanicalServiceCard: React.FC<MechanicalServiceCardProps> = ({
  ms,
}) => {
  const { imageUrl, title, description } = ms;

  return (
    <li className="border-2 border-black rounded-lg flex flex-col items-center justify-center p-5 space-y-4">
      <div className="w-full h-32 flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src={imageUrl!}
          alt={title}
          width={250}
          height={250}
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

export default MechanicalServices;
