import { useProduct } from "../../../contexts/ProductContext";
import type { TSize } from "../../../types";
import Size from "../../common/Size";

type SizesProps = {
  items: TSize[];
};

export function Sizes({ items }: SizesProps) {
  const { selectedSize, setSelectedSize } = useProduct();

  return (
    <div className="flex items-center gap-1.5 mt-4">
      {items.map((item) => (
        <Size
          key={item.id}
          item={item}
          selected={selectedSize === item.id}
          onClick={() => setSelectedSize(item.id)}
          disabled={!item}
        />
      ))}
    </div>
  );
}
