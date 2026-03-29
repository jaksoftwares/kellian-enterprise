"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import DropDownWithOptionsProp from "../core/utils/DropDownWithOptionsProp";
import { services } from "../../lib/constants";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { DateTimePicker } from "..";
import { useModal } from "../../hooks/use-modal";
import { Label } from "../ui/label";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { bookingSchema } from "@/lib/schema";
import urls from "@/lib/urls";
import { Spinner } from "../ui/spinner";

const BookAServiceModal = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceType: services[0].title,
    dateTime: "",
    vehicleInfo: "",
    notes: "",
    contactPreference: "",
  });
  const { toast } = useToast();
  const [date, setDate] = useState<Date>(new Date());
  const { isOpen, closeModal } = useModal();

  const [submitting, setIsSubmitting] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const isNumber = /[0-9]/.test(e.key);
    const isControlA = (e.ctrlKey || e.metaKey) && e.key === "a";

    if (!isNumber && !["Backspace", "Tab"].includes(e.key) && !isControlA) {
      e.preventDefault();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      bookingSchema.parse({
        ...formData,
        dateTime: format(date, "PPP HH:mm"),
      });

      const response = await fetch(urls.BOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dateTime: format(date, "PPP HH:mm"),
        }),
      });

      if (response.ok) {
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          serviceType: services[0].title,
          dateTime: "",
          vehicleInfo: "",
          notes: "",
          contactPreference: "",
        });
        toast({
          title: "Booking made successfully!",
          variant: "success",
          description:
            "Thank you for booking a service with Kellian Enterprise. We'll get back to you soon.",
        });
        closeModal();
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      toast({
        title: "Failed to make a booking, please try again.",
        variant: "destructive",
        description:
          (error as Error).message || "An unexpected error occurred.",
      });
      if (error instanceof z.ZodError) {
        toast({
          title: "Failed to send message, please try again.",
          variant: "destructive",
          description: "Kindly confirm the information filled in the form.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-96 rounded-md md:min-w-max md:px-12 h-4/5 md:h-fit md:py-8 lg:min-w-max lg:px-12 lg:py-16 overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-customBlue text-xl lg:text-3xl">
            Book a Service Today - Your Car will Thank You
          </DialogTitle>
          <DialogDescription>
            Fill in the details in the form below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Input
            required
            label="Full Names"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <div className="grid md:grid-cols-2 gap-x-4 items-center">
            <Input
              required
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              pattern="[0-9]*"
              inputMode="numeric"
            />
            <Input
              required
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div>
              <DropDownWithOptionsProp
                options={services.map((service) => service.title)}
                label="Type of Service"
                value={formData.serviceType}
                onChange={handleDropdownChange("serviceType")}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label className="font-medium text-base text-gray-600">
                <span>Date and Time</span>
                <span className="text-red-600">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP HH:mm")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4">
                  <DateTimePicker selected={date} setDate={setDate} />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Input
            label="Vehicle Information"
            name="vehicleInfo"
            value={formData.vehicleInfo}
            onChange={handleChange}
          />
          <Input
            label="Notes / Service Description"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
          <DropDownWithOptionsProp
            options={["Email me", "Call me"]}
            label="Contact Preference"
            isContactPreference
            value={formData.contactPreference}
            onChange={handleDropdownChange("contactPreference")}
          />
          <DialogFooter className="flex gap-y-2 flex-col md:flex-row my-5">
            <Button
              className="w-full bg-transparent border-2 border-primary text-primary hover:text-white duration-300"
              onClick={closeModal}
              disabled={submitting}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? (
                <div className="flex items-center gap-x-2">
                  <Spinner size="small" className="text-white" />{" "}
                  <span>Booking ...</span>
                </div>
              ) : (
                "Book Service"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookAServiceModal;
