// React
import type React from "react";

// CVA
import { type VariantProps, cva } from "class-variance-authority";

// Interfaces
import { type TColor } from "@/features/app/interfaces";

export const button = cva("btn", {
  variants: {
    rounded: {
      small: ["btn--rounded-small"],
      large: ["btn--rounded-large"],
    },
    variant: {
      primary: ["btn--primary"],
      secondary: ["btn--secondary"],
      success: ["btn--success"],
      danger: ["btn--danger"],
      info: ["btn--info"],
      warning: ["btn--warning"],
      facebook: ["btn--facebook"],
      spotify: ["btn--spotify"],
      "dark-1": ["btn--dark-1"],
      blank: ["btn--transparent"],
    },
    size: {
      small: ["btn--small"],
      medium: ["btn--medium"],
      large: ["btn--large"],
    },
    block: {
      true: ["btn--block"],
    },
    loading: {
      true: ["btn--loading"],
    },
  },
  defaultVariants: {
    color: "primary",
    rounded: "small",
    size: "medium",
  },
});

export interface IAppButtonProps extends VariantProps<typeof button> {
  children: string;
  className?: string;
  rounded?: "small" | "large";
  variant?: TColor;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  width?: string;
  height?: string;
  icon?: string;
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
