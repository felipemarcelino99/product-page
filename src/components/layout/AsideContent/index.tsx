import Breadcrumb from "../../common/Breadcrumb";
import Tag from "../../common/Tag";
import Title from "../../common/Title";
import { Rating } from "@mui/material";
import { Prices } from "../Prices";
import { Variants } from "../Variants";
import { Sizes } from "../Sizes";
import { Select } from "../../common/Select";
import Button from "../../common/Button";
import { useProduct } from "../../../contexts/ProductContext";
import CepForm from "../../common/CepForm";

export function AsideContent() {
  const {
    availableVariants,
    availableSizes,
    quantity,
    selectedQuantity,
    setSelectedQuantity,
    product,
  } = useProduct();

  return (
    <div className="flex-1">
      <div>
        <Breadcrumb label="Jeans | +1mil vendidas" />

        <Tag label="Mais vendido" />

        <Title tag="h2" label={product.name} className="mt-1" />

        <Rating
          name="half-rating-read"
          defaultValue={product.rate}
          precision={0.5}
          readOnly
        />

        <Prices />
      </div>

      <Variants items={availableVariants} />

      <Sizes items={availableSizes} />

      <div className="mt-4">
        <div className="mb-10">
          <p>Selecione a quantidade</p>
          <Select
            inventory={quantity}
            value={selectedQuantity}
            onChange={setSelectedQuantity}
          />
        </div>

        <CepForm />

        <Button label="Comprar agora" className="mb-2.5" />

        <Button label="Adicionar ao carrinho" variant="border" />
      </div>
    </div>
  );
}
