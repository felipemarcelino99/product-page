import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      border:
        "border-2 border-blue-500 text-blue-500 hover:border-blue-600 hover:text-blue-600",
    },
    size: {
      default: "text-1xl",
      lg: "text-lg",
      md: "text-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
