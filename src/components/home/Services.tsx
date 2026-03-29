import { services } from "../../lib/constants";
import { T_BasicSomething, T_HomeService } from "../../lib/types";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services" className="space-y-5">
      <div className="text-center space-y-5">
        <h2 className="text-primary md:text-xl">OUR SERVICES</h2>
        <p className="text-customBlue text-4xl md:text-6xl">
          Top-Notch Services for Every Car
        </p>
        <p className="lg:text-xl">
          Kellian Garage provides everything your vehicle needs, from expert
          repairs to routine maintenance. Trust our skilled team to keep your
          car in peak condition, inside and out.
        </p>
      </div>

      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.slice(0, 8).map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </ul>

      <div className="flex justify-center">
        <Button asChild className="space-x-2">
          <Link href={siteConfig.siteLinks.servicesPage.main}>
            <span>See our complete range of services</span>
            <FaArrowRightLong />
          </Link>
        </Button>
      </div>
    </div>
  );
};

interface ServiceCardProps {
  service: T_HomeService;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { imageUrl, title, description, serviceLink } = service;

  return (
    <Link
      href={serviceLink}
      className="hover:shadow-2xl duration-300 border-2 border-black rounded-lg p-5 space-y-4 flex flex-col items-center justify-center"
    >
      <li className="flex flex-col items-center justify-center space-y-4">
        <div className="w-full h-48 flex items-center justify-center overflow-hidden rounded-md">
          <Image
            src={imageUrl!}
            alt={description}
            width={250}
            height={250}
            className="rounded-md object-cover h-full"
          />
        </div>

        <h3 className="text-xl text-customBlue font-semibold text-center">
          {title}
        </h3>
        <p className="text-lg text-center">{description}</p>
      </li>
    </Link>
  );
};

export default Services;
