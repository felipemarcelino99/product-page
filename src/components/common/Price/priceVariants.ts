import { cva } from "class-variance-authority";

export const priceVariants = cva("price", {
  variants: {
    variant: {
      default: "font-medium text-gray-800 text-4xl",
      discount: "text-gray-600 text-lg line-through",
      split: "text-gray-800 text-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
