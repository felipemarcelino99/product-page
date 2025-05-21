export type TVariant = {
  id: number;
  value: string;
  url: string;
};

export type TSize = {
  id: number;
  number: number;
  letter: string;
};

export type Image = {
  id: number;
  url: string;
};

export type ProductInventory = {
  variantId: number;
  sizeId: number;
  quantity: number;
};

export type Product = {
  id: number;
  name: string;
  oldPrice: string;
  price: string;
  discount: string;
  maxSplit: number;
  inventory: ProductInventory[];
  variants: TVariant[];
  sizes: TSize[];
  images: Record<"black" | "blue" | "white", Record<number, Image>>;
  description: string;
  rate: number;
  reviews: Review[];
};

export type Review = {
  id: number;
  name: string;
  review: string;
  rate: number;
};
