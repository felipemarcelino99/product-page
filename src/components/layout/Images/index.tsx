import Image from "../../common/Image";
import { useProduct } from "../../../contexts/ProductContext";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

export function Images() {
  const { images, setPrincipalImage, principalImage } = useProduct();

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
      <div className="w-full relative overflow-hidden group max-w-[1024px]">
        <InnerImageZoom
          src={principalImage ?? ""}
          zoomType="hover"
          zoomPreload={true}
          zoomScale={1.5}
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
}
