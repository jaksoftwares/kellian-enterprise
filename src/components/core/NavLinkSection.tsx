"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";

interface NavLinkSectionProps {
  leftSection: {
    title: string;
    description: string;
    siteLink: string;
    siteLinkTitle: string;
  };
  middleSection: {
    btnTitle: string;
    btnLink: string;
    btnContent: string;
  }[];
}

const NavLinkSection: React.FC<NavLinkSectionProps> = ({
  leftSection,
  middleSection,
}) => {
  const { title, description, siteLink, siteLinkTitle } = leftSection;
  const [hoveredContent, setHoveredContent] = useState<string>();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={`grid grid-cols-3 py-12 px-8 gap-5 bg-custom-blue-gradient text-white fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <section className="pr-5 border-gray-300 border-r-2 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p>{description}</p>
        </div>
        <Link
          href={siteLink}
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
        >
          <span>{siteLinkTitle}</span>
          <FaArrowRightLong />
        </Link>
      </section>

      <section className="px-5 border-r-2">
        <ul className="space-y-2">
          {middleSection.map(({ btnTitle, btnLink, btnContent }, index) => (
            <li key={index} onMouseEnter={() => setHoveredContent(btnContent)}>
              <Link href={btnLink}>
                <Button className="flex items-center justify-between w-full p-2 transition-transform duration-300 transform text-lg hover:scale-105 bg-transparent">
                  <span>{btnTitle}</span>
                  <FaArrowRightLong />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-center lg:text-left">
        <p>
          <span
            className={`transition-opacity duration-300 block ${
              hoveredContent === description ? "opacity-100" : "opacity-0"
            }`}
          >
            {description}
          </span>
          <span
            className={`transition-opacity duration-300 block ${
              hoveredContent !== description ? "opacity-100" : "opacity-0"
            }`}
          >
            {hoveredContent}
          </span>
        </p>
      </section>
    </div>
  );
};

export default NavLinkSection;
