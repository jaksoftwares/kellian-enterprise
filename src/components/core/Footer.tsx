"use client";
import React from "react";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";
import SiteLogo from "./SiteLogo";
import BookAServiceButton from "./BookAServiceButton";

const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-black grid gap-10 md:grid-cols-3 py-8 px-5 lg:py-16 lg:px-10">
        <section className="border-b-2 md:border-b-0 md:border-r-2 border-black pb-5 md:pb-0 md:pr-5">
          <ul className="flex flex-col gap-y-5 md:gap-y-10 text-center lg:text-left">
            {siteConfig.footerLinks.map(({ title, link }, index) => (
              <li key={index}>
                <Link href={link} className="text-black hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-5 md:mt-10 justify-center lg:justify-normal ">
            {siteConfig.socialLinks.map(
              ({ link, iconCompoment: Icon }, index) => (
                <Link
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                >
                  <Icon size={24} />
                </Link>
              )
            )}
          </div>
        </section>

        <section className="border-b-2 md:border-b-0 md:border-r-2 border-black pb-5 md:pb-0 md:px-5 text-center md:text-left space-y-4">
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
            Kellian Autoservices
          </h2>
          <p className="text-sm md:text-base">
            At Kellian Auto Services, we&apos;re committed to keeping your
            vehicle in top shape with expert repairs, detailing, and maintenance
            services. Quality, professionalism, and customer satisfaction are
            our top priorities.
          </p>
          <BookAServiceButton />
        </section>

        <section className="text-center md:text-right space-y-3 md:space-y-5 flex flex-col text-base md:text-lg font-semibold">
          <p>Reach out to us</p>
          <span>+254 768 395187</span>
          <span>Utawala-Githunguri Road, Mary Start Stage</span>
          <span>Nairobi, Kenya</span>
          <div className="mx-auto md:mx-0 md:ml-auto">
            <SiteLogo />
          </div>
        </section>
      </div>

      <div className="w-full bg-custom-blue-gradient text-center text-white py-4">
        <p>
          &copy; {new Date().getFullYear()} Kellian Auto Services. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
