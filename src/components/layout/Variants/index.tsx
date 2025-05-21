import { useProduct } from "../../../contexts/ProductContext";
import Variant from "../../common/Variant";
import type { TVariant } from "../../../types";

type VariantsProps = {
  items: TVariant[];
};

export function Variants({ items }: VariantsProps) {
  const { selectedVariant, setSelectedVariant } = useProduct();

  return (
    <div className="flex items-center gap-1.5">
      {items.map((item) => (
        <Variant
          key={item.id}
          item={item}
          active={selectedVariant === item.id}
          onClick={() => setSelectedVariant(item.id)}
        />
      ))}
    </div>
  );
}
