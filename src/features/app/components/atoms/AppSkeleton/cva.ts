// CVA
import { type VariantProps, cva } from "class-variance-authority";

export const skeleton = cva("skeleton", {
  variants: {
    rounded: {
      true: ["skeleton--rounded"],
    },
  },
});

export interface IAppSkeletonProps extends VariantProps<typeof skeleton> {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}
