"use client";
import React from "react";
import BlackOverlay from "../core/BlackOverlay";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";
import BookAServiceButton from "../core/BookAServiceButton";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <BlackOverlay />
      <div className="bg-[url('/home/hero-bg.png')] bg-no-repeat bg-cover bg-center h-[80vh] md:h-[90vh] flex">
        <div className="px-10 py-5 lg:py-64 lg:px-32 z-10 text-white lg:w-2/3 space-y-5">
          <div className="space-y-5">
            <h1 className="font-fira text-5xl md:text-8xl font-semibold">
              We care about your car
            </h1>
            <p className="text-xl lg:text-2xl">
              We bring years of experience and a commitment to quality that
              ensures your vehicle stays in top condition, you can trust us to
              get your car back on the road quickly and efficiently.
            </p>
          </div>
          <div className="space-x-5">
            <BookAServiceButton />
            <Button className="bg-slate-200 text-black lg:text-xl hover:bg-slate-100">
              <Link href={siteConfig.siteLinks.aboutUsPage}>About us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
