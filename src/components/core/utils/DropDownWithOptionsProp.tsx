"use client";
import * as React from "react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa";

interface DropDownWithOptionsPropProps {
  options: string[];
  label: string;
  value: string; // Prop for selected value
  onChange: (value: string) => void; // Prop for value change handler
  isContactPreference?: boolean;
}

const DropDownWithOptionsProp: React.FC<DropDownWithOptionsPropProps> = ({
  options,
  label,
  value,
  onChange,
  isContactPreference,
}) => {
  const defaultOption = isContactPreference
    ? "Select how you'd like us to reach you"
    : options[0];

  return (
    <DropdownMenu>
      <DropdownMenuLabel>
        {label}
        <span className="text-red-600">*</span>
      </DropdownMenuLabel>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full flex justify-between">
          {value || defaultOption}{" "}
          {/* Display selected value or default option */}
          <FaAngleDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option}
              value={option}
              className="w-full"
            >
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownWithOptionsProp;
