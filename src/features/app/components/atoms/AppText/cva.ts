// CVA
import { cva, type VariantProps } from "class-variance-authority";

// Interfaces
import { type TColor } from "@/features/app/interfaces";

export const text = cva("text", {
  variants: {
    size: {
      xsmall: ["text--xsmall"],
      small: ["text--small"],
      medium: ["text--medium"],
      large: ["text--large"],
      xlarge: ["text--xlarge"],
      "2xlarge": ["text--2xlarge"],
    },
    color: {
      primary: ["color-primary"],
      secondary: ["color-secondary"],
      success: ["color-success"],
      danger: ["color-danger"],
      info: ["color-info"],
      warning: ["color-warning"],
      facebook: ["color-facebook"],
      spotify: ["color-spotify"],
      "white-1": ["color-white-1"],
      "dark-1": ["color-dark-1"],
      "gray-1": ["color-gray-1"],
      "gray-2": ["color-gray-2"],
      "gray-3": ["color-gray-3"],
      "gray-4": ["color-gray-4"],
      "gray-5": ["color-gray-5"],
      blank: ["color-transparent"],
    },
    weight: {
      normal: ["text--normal"],
      semibold: ["text--semibold"],
      bold: ["text--bold"],
      xbold: ["text--xbold"],
      "2xbold": ["text--2xbold"],
    },
  },
  defaultVariants: {
    size: "medium",
    weight: "normal",
  },
});

// Interfaces
export interface IAppTextProps extends VariantProps<typeof text> {
  className?: string;
  children: string | number;
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "2xlarge";
  color?: TColor;
  weight?: "normal" | "bold" | "semibold" | "xbold" | "2xbold";
  onClick?: () => void;
}
