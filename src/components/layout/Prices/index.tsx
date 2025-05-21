import { useProduct } from "../../../contexts/ProductContext";
import Price from "../../common/Price";
import SplitPrice from "../../common/SplitPrice";

export function Prices() {
  const { product } = useProduct();

  return (
    <div className="mb-7">
      <Price label={product.oldPrice} variant="discount" className="mt-4" />

      <Price label={product.price} discount={product.discount} />

      <SplitPrice price={product.price} />
    </div>
  );
}
