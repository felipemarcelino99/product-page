import { useState } from "react";
import type { TVariant } from "../../../types";
import Variant from "../../common/Variant";

type VariantsProps = {
  items: TVariant[];
};

export function Variants({ items }: VariantsProps) {
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    null
  );

  return (
    <div className="flex items-center gap-1.5">
      {items.map((item) => (
        <Variant
          key={item.id}
          item={item}
          active={selectedVariantId === item.id}
          onClick={() => setSelectedVariantId(item.id)}
        />
      ))}
    </div>
  );
}
