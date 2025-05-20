import { type HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { tagVariants } from "./tagVariants";

export interface ITagProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof tagVariants> {
  label: string;
}

export default function Tag({ label, variant, ...props }: ITagProps) {
  const classes = tagVariants({ variant });

  return (
    <div className={classes} aria-label={label} {...props} data-testid="tag">
      {label}
    </div>
  );
}
