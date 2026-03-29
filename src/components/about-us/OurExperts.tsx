"use client";
import React from "react";
import { managers, technicians } from "@/lib/constants";
import { T_Manager, T_Technician } from "@/lib/types";
import Image from "next/image";
import EmblaCarousel from "../core/utils/EmblaCarousel";

const OurExperts = () => {
  return (
    <div id="team" className="bg-gray-100 py-12 px-8 gap-3 lg:px-48 lg:py-16">
      <h2 className="text-customBlue text-4xl text-center">
        Meet our experiences management team that keeps things running
      </h2>

      <div className="my-8">
        <EmblaCarousel items={managers} CardComponent={ManagementCard} />
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="text-primary md:text-xl">OUR TECHNICIANS</h2>
          <p className="text-customBlue text-xl">
            We have a dedicated team of expert technicians to cater to your
            car’s needs
          </p>
        </div>

        <div className="grid gap-y-4 md:gap-y-8 grid-cols-1 md:grid-cols-3">
          {technicians.map((technician) => (
            <TechnicianCircle
              key={technician.imageUrl}
              techinician={technician}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

interface ManagementCardProps {
  imageUrl: string;
  role: string;
  description: string;
  names: string;
}

const ManagementCard: React.FC<ManagementCardProps> = ({
  imageUrl,
  role,
  description,
  names,
}) => {
  return (
    <div className="bg-white rounded-lg w-96 py-4 shadow-lg flex items-center flex-col space-y-4 hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={imageUrl}
        alt={`${names}'s image`}
        width={150}
        height={150}
        className="w-80 object-cover h-80 rounded-xl overflow-hidden"
      />
      <div className="px-4">
        <h2 className="text-customBlue font-bold text-xl">{names}</h2>
        <span className="text-primary uppercase text-sm font-medium">
          {role}
        </span>
        <p className="text-gray-600 text-sm mt-3">{description}</p>
      </div>
    </div>
  );
};

interface TechnicianCircleProps {
  techinician: T_Technician;
}

const TechnicianCircle: React.FC<TechnicianCircleProps> = ({ techinician }) => {
  const { imageUrl, names, role } = techinician;
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageUrl}
        alt={`${names}'s image`}
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="text-xl">{names}</h2>
      <h2>{role}</h2>
    </div>
  );
};

export default OurExperts;
