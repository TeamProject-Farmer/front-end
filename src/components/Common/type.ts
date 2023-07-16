export interface ProductProps {
  image?: string;
  title: string;
  discount: number;
  price: number | string;
  star: number;
  review: number | string;
  specialPrice: boolean;
  freeShipping: boolean;
}