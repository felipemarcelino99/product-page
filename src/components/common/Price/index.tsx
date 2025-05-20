import { type HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { priceVariants } from "./priceVariants";
import { cn } from "../../../lib/utils";

export interface IPriceProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof priceVariants> {
  label: string;
  discount?: string;
}

export default function Price({
  label,
  discount,
  variant,
  className,
  ...props
}: IPriceProps) {
  const classes = cn(priceVariants({ variant }), className);
  const formatedLabel = label.split(",");

  return (
    <h3 className={classes} aria-label={label} {...props} data-testid="price">
      R$ {formatedLabel[0]}
      <sup>{formatedLabel[1]}</sup>
      {discount && <span className="discount">{discount}% OFF</span>}
    </h3>
  );
}
