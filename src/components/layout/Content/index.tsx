import { Indent } from "../../common/Indent";
import { Images } from "../Images";
import { AsideContent } from "../AsideContent";
import Title from "../../common/Title";
import { useProduct } from "../../../contexts/ProductContext";

export function Content() {
  const { product } = useProduct();

  return (
    <main className="bg-stone-50 min-h-dvh py-14">
      <section>
        <Indent>
          <div className="flex items-start justify-between gap-20">
            <Images />
            <AsideContent />
          </div>
          <div className="py-9">
            <Title tag="h3" label="Descrição" />
            <p className="whitespace-pre-line text-sm text-gray-700">
              {product.description}
            </p>
          </div>
        </Indent>
      </section>
    </main>
  );
}
