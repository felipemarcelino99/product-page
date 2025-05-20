import { useState } from "react";
import type { TSize } from "../../../types";
import Size from "../../common/Size";

type SizesProps = {
  items: TSize[];
};

export function Sizes({ items }: SizesProps) {
  const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-1.5 mt-4">
      {items.map((item) => (
        <Size
          key={item.id}
          item={item}
          selected={selectedSizeId === item.id}
          onClick={() => setSelectedSizeId(item.id)}
          disabled={true}
        />
      ))}
    </div>
  );
}
