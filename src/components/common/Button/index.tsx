import { type HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { buttonVariants } from "./buttonVariants";

export interface IButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
}

export default function Button({
  label,
  variant,
  className,
  ...props
}: IButtonProps) {
  const classes = cn(buttonVariants({ variant }), className);

  return (
    <button className={classes} {...props} data-testid="button">
      {label}
    </button>
  );
}
