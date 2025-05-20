import { cva } from "class-variance-authority";

export const tagVariants = cva("tag", {
  variants: {
    variant: {
      default: "bg-orange-400 text-white",
      semibold: "bg-blue-400 text-white",
    },
    size: {
      default: "text-xs",
      lg: "text-lg",
      md: "text-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
