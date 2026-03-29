"use client";
import React from "react";
import EmblaCarousel from "../core/utils/EmblaCarousel";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { testimonials } from "@/lib/constants";

const Testimonials = () => {
  return (
    <div
      className='space-y-5 bg-[url("/home/testimonials/testimonials-bg.png")] bg-no-repeat bg-cover bg-center px-5 lg:px-32 py-20'
      id="testimonials"
    >
      <div className="text-center">
        <h2 className="text-primary md:text-xl">TESTIMONIALS</h2>
        <p className="text-customBlue text-4xl md:text-6xl">
          Don't just take our word for it!
        </p>
      </div>
      <EmblaCarousel items={testimonials} CardComponent={TestimonialCard} />
    </div>
  );
};

interface TestimonialCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  title,
  description,
  imageUrl,
}) => (
  <div
    className="h-96 w-80 flex flex-col justify-between 
              p-6 rounded-3xl shadow-lg bg-white dark:bg-gray-800 
              text-gray-900 dark:text-gray-100 select-none transition-colors duration-200"
  >
    {imageUrl ? (
      <Image
        src={imageUrl}
        alt={title}
        width={150}
        height={150}
        className="rounded-full mb-4 mx-auto"
      />
    ) : (
      <CiUser className="mx-auto" size={150} />
    )}
    <div className="flex-grow flex flex-col justify-center">
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
    <h3 className="text-xl font-bold mt-4">{title}</h3>
  </div>
);

export default Testimonials;
