import { type HTMLAttributes } from "react";

export interface ISplitPriceProps extends HTMLAttributes<HTMLParagraphElement> {
  price: string;
  maxSplit?: number;
}

export default function SplitPrice({
  price,
  maxSplit = 3,
  ...props
}: ISplitPriceProps) {
  const parsedPrice = parseFloat(price);
  const invalidPrice = isNaN(parsedPrice);

  if (invalidPrice) return null;

  const formattedLabel = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parsedPrice / maxSplit);

  return (
    <p className="split_price" {...props} data-testid="splitPrice">
      em até {maxSplit}x {formattedLabel} sem juros
    </p>
  );
}
