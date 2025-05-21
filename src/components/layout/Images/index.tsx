import Image from "../../common/Image";
import { useProduct } from "../../../contexts/ProductContext";

export function Images() {
  const { images, setPrincipalImage, principalImage, variant } = useProduct();

  return (
    <div className="flex items-start gap-1.5 max-w-[47%] flex-1">
      <div className="max-w-20 flex flex-col items-center gap-1.5">
        {images?.map((img) => {
          return (
            <Image
              key={img.id}
              item={img}
              onClick={() => setPrincipalImage(img.url)}
            />
          );
        })}
      </div>
      <div className="w-full">
        <img
          src={principalImage}
          alt={`Calça na cor ${variant?.value}`}
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
}
