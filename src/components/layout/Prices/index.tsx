import Price from "../../common/Price";
import SplitPrice from "../../common/SplitPrice";

export function Prices() {
  return (
    <div className="mb-7">
      <Price label="109,90" variant="discount" className="mt-4" />

      <Price label="71,90" discount="34" />

      <SplitPrice price="71,90" />
    </div>
  );
}
