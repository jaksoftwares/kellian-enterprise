"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../../lib/constants";
import NavLink from "./NavLink";
import { siteConfig } from "../../lib/site-config";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import SiteLogo from "./SiteLogo";
import NavLinkSection from "./NavLinkSection";
import { T_NavLinkSectionOption } from "../../lib/types";
import BookAServiceButton from "./BookAServiceButton";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<T_NavLinkSectionOption | null>(
    null
  );
  const headerRef = useRef<HTMLElement>(null);
  const hoverZoneRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (name: T_NavLinkSectionOption) => {
    setHoveredLink(name);
  };

  const handleMouseLeave = (event: MouseEvent) => {
    const hoverZone = hoverZoneRef.current;
    if (
      hoverZone &&
      !hoverZone.contains(event.target as Node) &&
      event.clientY > hoverZone.getBoundingClientRect().bottom + 50
    ) {
      setHoveredLink(null);
    }
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setHoveredLink(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out ${
        isScrolling ? "-translate-y-full" : "translate-y-0"
      } dark:bg-black`}
    >
      <div className="px-8 py-2 lg:px-32 xl:px-40 flex justify-between items-center">
        <Link
          href={siteConfig.siteLinks.home}
          className="flex items-center space-x-2 w-10 lg:w-fit"
        >
          <SiteLogo />
        </Link>
        <nav className="hidden lg:flex space-x-20 items-center relative">
          {navLinks.map(({ name, link, nameKey }) => (
            <div key={name} onMouseEnter={() => handleMouseEnter(nameKey)}>
              <NavLink link={link} name={name} />
            </div>
          ))}
        </nav>
        <div className="hidden lg:items-center lg:justify-center lg:flex">
          <BookAServiceButton />
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      <div
        ref={hoverZoneRef}
        className={`absolute left-0 right-0 transition-opacity duration-300 ease-in-out ${
          hoveredLink
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {hoveredLink && (
          <div
            key={hoveredLink}
            className="transition-opacity duration-300 ease-in-out"
          >
            <NavLinkSection
              leftSection={siteConfig.navLinkSections[hoveredLink].left}
              middleSection={siteConfig.navLinkSections[hoveredLink].middle}
            />
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <nav className="px-4 py-4 flex flex-col space-y-4 transition-all duration-300 ease-in-out transform origin-top">
            {navLinks.map(({ name, link }) => (
              <NavLink key={name} link={link} name={name} />
            ))}
            <BookAServiceButton />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
