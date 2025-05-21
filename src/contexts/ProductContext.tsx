import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Image, Product, TSize, TVariant } from "../types";
import { PRODUCTS } from "../mock";
import { getWithExpiry, setWithExpiry } from "../lib/utils";

interface IProductContext {
  products: Product[];
  product: Product;
  selectedVariant: number | null;
  setSelectedVariant: (id: number) => void;
  selectedSize: number | null;
  setSelectedSize: (id: number) => void;
  availableSizes: TSize[];
  availableVariants: TVariant[];
  quantity: number;
  selectedQuantity: number;
  setSelectedQuantity: (id: number) => void;
  variant: TVariant | undefined;
  images: Image[] | undefined;
  principalImage: string | undefined;
  setPrincipalImage: (id: string) => void;
}

interface IProductProvider {
  children: React.ReactNode;
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

const ProductProvider: React.FC<IProductProvider> = ({ children }) => {
  const saved = getWithExpiry("selectedProduct");

  const initialProduct = saved?.product || PRODUCTS[0];
  const initialVariant = saved?.variant || PRODUCTS[0].variants[0];
  const initialVariantId = saved?.selectedVariant ?? 1;
  const initialImages = saved?.images || PRODUCTS[0].variants[0].images;
  const initialPrincipalImage =
    saved?.principalImage || PRODUCTS[0].variants[0].images[0].url;

  const [products] = useState<Product[]>(PRODUCTS);
  const [product] = useState<Product>(initialProduct);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(
    initialVariantId
  );
  const [variant, setVariant] = useState<TVariant | undefined>(initialVariant);
  const [selectedSize, setSelectedSize] = useState<number | null>(
    saved?.selectedSize ?? null
  );
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    saved?.selectedQuantity ?? 1
  );
  const [images, setImages] = useState<Image[] | undefined>(initialImages);
  const [principalImage, setPrincipalImage] = useState<string | undefined>(
    initialPrincipalImage
  );

  useEffect(() => {
    const selectedData = {
      product,
      images,
      principalImage,
      variant,
      selectedVariant,
      selectedSize,
      selectedQuantity,
    };

    setWithExpiry("selectedProduct", selectedData, 15 * 60 * 1000);
  }, [
    selectedVariant,
    selectedSize,
    selectedQuantity,
    product,
    images,
    principalImage,
    variant,
  ]);

  const variants = product.variants;
  const sizes = product.sizes;
  const inventory = product.inventory;

  const availableSizes = selectedVariant
    ? sizes.filter((size) =>
        inventory.some(
          (inv) =>
            inv.variantId === selectedVariant &&
            inv.sizeId === size.id &&
            inv.quantity > 0
        )
      )
    : [];

  const quantity =
    selectedVariant && selectedSize
      ? inventory.find(
          (item) =>
            item.variantId === selectedVariant && item.sizeId === selectedSize
        )?.quantity ?? 1
      : 1;

  const availableVariants = variants.filter((variant) =>
    inventory.some((inv) => inv.variantId === variant.id && inv.quantity > 0)
  );

  useEffect(() => {
    const variantImages = product?.variants?.find(
      (item) => item.id === selectedVariant
    )?.images;

    const variant = product?.variants?.find(
      (item) => item.id === selectedVariant
    );

    setVariant(variant);
    setImages(variantImages);

    if (variantImages) setPrincipalImage(variantImages[0].url);
  }, [selectedVariant, product]);

  const contextValues = useMemo(
    () => ({
      products,
      product,
      availableVariants,
      availableSizes,
      selectedVariant,
      setSelectedVariant,
      selectedSize,
      setSelectedSize,
      quantity,
      selectedQuantity,
      setSelectedQuantity,
      variant,
      images,
      principalImage,
      setPrincipalImage,
    }),
    [
      products,
      product,
      availableVariants,
      availableSizes,
      selectedVariant,
      selectedSize,
      quantity,
      selectedQuantity,
      setSelectedQuantity,
      variant,
      images,
      principalImage,
      setPrincipalImage,
    ]
  );

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = (): IProductContext => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
};

export { ProductProvider, useProduct };
