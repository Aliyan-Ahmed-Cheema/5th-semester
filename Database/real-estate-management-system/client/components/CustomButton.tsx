"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export enum ButtonVariant {
  DEFAULT = "default",
  DESTRUCTIVE = "destructive",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  GHOST = "ghost",
  LINK = "link",
}

interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  iconSrc?: string;
  iconAlt?: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton = ({
  variant,
  text,
  onClick,
  disabled,
  isLoading = false,
  className,
  type,
}: ButtonProps) => {
  return (
    <Button
      variant={variant}
      type={type}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {isLoading ? (
        <Loader2 size={20} className="spin-animation" />
      ) : (
        <>
          <span>{text}</span>
        </>
      )}
    </Button>
  );
};

export default CustomButton;
