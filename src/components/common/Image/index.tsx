import { type HTMLAttributes } from "react";
import type { Image } from "../../../types";
import { useProduct } from "../../../contexts/ProductContext";

export interface IImageProps extends HTMLAttributes<HTMLButtonElement> {
  item: Image;
  onClick: () => void;
}

export default function Image({ item, onClick, ...props }: IImageProps) {
  const { variant } = useProduct();

  return (
    <button {...props} data-testid="image" onClick={onClick}>
      <img
        key={item.id}
        src={item.url}
        alt={`Calça na cor ${variant?.value}`}
        width={80}
        height={80}
      />
    </button>
  );
}
