import { type HTMLAttributes } from "react";

export interface IBreadcrumbProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
}

export default function Breadcrumb({ label, ...props }: IBreadcrumbProps) {
  return (
    <span className="breadcrumb" {...props}>
      {label}
    </span>
  );
}
