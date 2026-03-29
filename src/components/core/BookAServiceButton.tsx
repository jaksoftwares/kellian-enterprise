"use client";
import React from "react";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal";
import dynamic from "next/dynamic";

const BookAServiceModal = dynamic(
  () => import("@/components/core/BookAServiceButton"),
  {
    ssr: false,
    loading: () => null,
  }
);

interface BookAServiceButtonProps {
  displayText?: string;
  isSticky?: boolean;
}

const BookAServiceButton: React.FC<BookAServiceButtonProps> = ({
  displayText,
  isSticky,
}) => {
  const { openModal } = useModal();

  return (
    <Button className="lg:text-xl" onClick={openModal}>
      {displayText ?? "Book a service"}
    </Button>
  );
};

export default BookAServiceButton;
