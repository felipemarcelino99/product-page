import { type HTMLAttributes } from "react";
import type { TSize } from "../../../types";

export interface ISizeProps extends HTMLAttributes<HTMLButtonElement> {
  item: TSize;
  selected: boolean;
  disabled: boolean;
  onClick: () => void;
}

export default function Size({
  item,
  disabled,
  selected,
  onClick,
  ...props
}: ISizeProps) {
  return (
    <button
      className={`size ${selected && "size-active"} ${
        disabled && "size-disabled"
      }`}
      {...props}
      data-testid="size"
      onClick={onClick}
      disabled={disabled}
    >
      <h4>{item.number}</h4>
      <p>{item.letter}</p>
    </button>
  );
}
