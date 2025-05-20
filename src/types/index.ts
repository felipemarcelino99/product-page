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

type ProductInventory = {
  variantId: number;
  sizeId: number;
  quantity: number;
};

export type Product = {
  name: string;
  oldPrice: string;
  price: string;
  discount: string;
  maxSplit: number;
  inventory: Record<number, ProductInventory> | ProductInventory[];
  variants: Record<number, TVariant> | TVariant[];
  sizes: Record<number, TSize> | TSize[];
  images: Record<"black" | "blue" | "white", Record<number, Image>>;
  description: string;
  rate: number;
};

export type Review = {
  name: string;
  review: string;
  rate: number;
};
