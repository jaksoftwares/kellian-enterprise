"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { FaRegClock } from "react-icons/fa";
import { socials, workingHours } from "../../lib/constants";
import {
  T_WorkingHour as WorkingHourSlotProps,
  T_Social as SocialRowProps,
  T_WhatsAppSocial,
} from "../../lib/types";
import Link from "next/link";
import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import urls from "@/lib/urls";
import Map from "./Map";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Spinner } from "@/components/ui/spinner";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(urls.CONTACT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          variant: "success",
          description:
            "Thank you for reaching out. We will get back to you soon.",
        });
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
        });
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Failed to send message.",
        variant: "destructive",
        description:
          (error as Error).message || "An unexpected error occurred.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOnCancel = () => {
    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="text-center" id="contact-us">
        <h3 className="text-customBlue text-2xl md:text-5xl">
          Get in touch with us
        </h3>
        <p>
          Got questions or comments? Reach out to us for any inquiries and
          someone from our team will reach out to you promptly.
        </p>
      </div>
      <section className="px-5 lg:px-32 flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-4 items-start justify-between">
        <form onSubmit={handleOnSubmit} className="lg:w-1/2 self-stretch">
          <div className="space-y-2 md:space-y-4">
            <div className="flex flex-col">
              <Input
                type="text"
                id="from_name"
                name="from_name"
                label="Name"
                value={formData.from_name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col">
              <Input
                type="email"
                id="from_email"
                name="from_email"
                label="Email"
                value={formData.from_email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                label="Message"
                onChange={handleInputChange}
                placeholder="Enter your message"
                required
                className="h-40 overflow-y-scroll resize-none"
              />
            </div>
          </div>
          <div className="flex my-2 gap-x-4 justify-end">
            <Button
              type="button"
              className="bg-transparent border-2 border-primary text-primary hover:text-white duration-300 px-8 py-4"
              onClick={handleOnCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-8 py-4 font-semibold"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-x-2">
                  <Spinner size="small" className="text-white" />{" "}
                  <span>Sending ...</span>
                </div>
              ) : (
                "Send"
              )}
            </Button>
          </div>
        </form>

        <div className="lg:w-1/2 flex flex-col self-stretch">
          <Map />
          <div className="flex flex-col gap-y-8 md:flex-row gap-x-5">
            <div className="border border-black rounded-md md:w-1/2 py-2 space-y-5">
              <div className="flex items-center justify-center gap-x-2">
                <FaRegClock size={20} />
                <h3 className="font-semibold text-xl">Working Hours</h3>
              </div>

              <ul className="flex flex-col justify-between gap-y-2 px-2">
                {workingHours.map(({ day, time }) => (
                  <WorkingHourSlot day={day} time={time} key={day} />
                ))}
              </ul>
            </div>

            <div className="md:w-1/2 flex justify-between flex-col gap-y-2">
              {socials.map(({ icon, text, socialInfo, variant }, index) => (
                <SocialRow
                  key={index}
                  icon={icon}
                  text={text}
                  socialInfo={socialInfo}
                  variant={variant}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const WorkingHourSlot: React.FC<WorkingHourSlotProps> = ({ day, time }) => {
  return (
    <li>
      <span className="font-semibold">{day}: </span>
      <span>{time}</span>
    </li>
  );
};

const SocialRow: React.FC<SocialRowProps> = ({
  icon,
  text,
  socialInfo,
  variant,
}) => {
  const IconComponent = icon;
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(socialInfo as string);
      toast({
        variant: "success",
        title: "Copied!",
        description:
          "Phone number copied to clipboard. Waiting to hear from you!",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy.",
        description: "Please try again.",
      });
    }
  };

  return (
    <>
      {variant === "button" && (
        <div className="flex items-center gap-x-3 w-full justify-between border border-black rounded-md p-2">
          <div className="flex items-center gap-x-3">
            <IconComponent />
            <span>{text}</span>
          </div>
          <button
            onClick={handleCopy}
            className="ml-auto hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-md transition-colors"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      )}
      {variant === "link" && (
        <Link
          href={socialInfo as string}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-x-3 border border-black rounded-md items-center p-2 hover:shadow-2xl duration-300"
        >
          <IconComponent />
          <span>{text}</span>
        </Link>
      )}
      {variant === "dropdown" && (
        <Popover>
          <PopoverTrigger className="flex justify-start items-center gap-x-3 border border-black rounded-md p-2 hover:shadow-2xl duration-300">
            <IconComponent size={25} />
            <span>{text}</span>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            {(socialInfo as T_WhatsAppSocial[]).map(
              ({ label, value }, index) => (
                <Link
                  key={index}
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-x-3 items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span>{label}</span>
                </Link>
              )
            )}
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};

export default GetInTouch;
