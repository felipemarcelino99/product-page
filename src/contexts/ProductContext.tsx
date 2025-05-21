import React, { createContext, useContext, useMemo, useState } from "react";
import type { Product, TSize, TVariant } from "../types";
import { PRODUCTS } from "../mock";

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
}

interface IProductProvider {
  children: React.ReactNode;
}

const ProductContext = createContext<IProductContext>({} as IProductContext);

const ProductProvider: React.FC<IProductProvider> = ({ children }) => {
  const [products] = useState<Product[]>(PRODUCTS);
  const [product] = useState<Product>(PRODUCTS[0]);
  const [selectedVariant, setSelectedVariant] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

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
