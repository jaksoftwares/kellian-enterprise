import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const AnyQuestion = () => {
  return (
    <div className="flex items-center justify-center flex-col mx-auto">
      <Image
        src={"/faqs/any-question.png"}
        alt="Questions illustration"
        width={400}
        height={200}
      />

      <div className="text-center">
        <h2 className="font-semibold text-4xl">Any Question?</h2>
        <p>
          We're here to help! Reach out to us with any questions or concerns.
        </p>
      </div>

      <Button asChild className="my-4">
        <Link href={siteConfig.siteLinks.contactUs} className="space-x-2">
          <span>Contact us</span>
          <FaArrowRightLong />
        </Link>
      </Button>
    </div>
  );
};

export default AnyQuestion;
