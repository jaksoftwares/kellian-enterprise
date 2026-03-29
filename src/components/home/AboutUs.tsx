import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "../../lib/site-config";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div className="space-y-5 px-5 xl:px-32 py-20">
      <div className="flex flex-col items-center lg:flex-row lg:w-4/5 lg:mx-auto gap-5 lg:gap-0">
        <div>
          <div className="space-y-5 lg:space-y-10">
            <div>
              <h2 className="text-primary md:text-xl">ABOUT US</h2>
              <h3 className="text-customBlue text-2xl lg:text-4xl md:text-5xl lg:w-2/5">
                We are a team driven by excellence
              </h3>
            </div>
            <div className="space-y-2 lg:space-y-10">
              <p className="lg:w-4/5">
                At Kellian, we are passionate about delivering top-notch auto
                care services with a focus on quality, professionalism, and
                customer satisfaction. Our skilled technicians and advanced
                tools ensure your vehicle gets the best treatment, whether it's
                a simple wash or a complete overhaul.
              </p>

              <Button
                asChild
                variant={"link"}
                className="p-0 font-semibold text-black hover:underline underline lg:no-underline hidden lg:block"
              >
                <Link href={siteConfig.siteLinks.aboutUsPage}>
                  <div className="flex gap-x-2 items-center">
                    <span>Learn more about us</span>
                    <FaArrowRightLong />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Image
          src={"/home/about-us.png"}
          alt="Man fixing engine"
          width={500}
          height={200}
          className="rounded-xl"
        />

        <Button
          asChild
          variant={"link"}
          className="p-0 font-semibold text-black hover:underline underline lg:no-underline block lg:hidden"
        >
          <Link href={siteConfig.siteLinks.aboutUsPage}>
            <div className="flex gap-x-2 items-center">
              <span>Learn more about us</span>
              <FaArrowRightLong />
            </div>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AboutUs;
