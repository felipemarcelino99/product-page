import { type HTMLAttributes } from "react";
import type { TVariant } from "../../../types";

export interface IVariantProps extends HTMLAttributes<HTMLButtonElement> {
  item: TVariant;
  active: boolean;
  onClick: () => void;
}

export default function Variant({
  item,
  active,
  onClick,
  ...props
}: IVariantProps) {
  return (
    <button
      className={`variant-base ${active ? "variant-active" : "variant"}`}
      {...props}
      data-testid="variant"
      onClick={onClick}
    >
      <img src={item.url} alt={item.value} width={50} height={50} />
    </button>
  );
}
