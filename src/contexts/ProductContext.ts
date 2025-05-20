import { createContext, useContext } from "react";
import type { Product } from "../types";

interface ProductContextProps {
  products: Product[];
  product: Product;
  inventory: number;
  selectedSize: number;
  setSelectedSize: () => void;
  selectedVariant: number;
  setSelectedVariant: () => void;
}

const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  // useEffect(() => {
  //   const result = [...products];
  // }, [products]);
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
