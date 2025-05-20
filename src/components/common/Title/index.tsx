import { type ElementType, type HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { titleVariants } from "./titleVariants";
import { cn } from "../../../lib/utils";

export interface ITitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  label: string;
  tag?: ElementType;
}

export default function Title({
  label,
  variant,
  className,
  tag: Tag = "h1",
  ...props
}: ITitleProps) {
  const classes = cn(titleVariants({ variant }), className);

  return (
    <Tag className={classes} aria-label={label} {...props} data-testid="title">
      {label}
    </Tag>
  );
}
