export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  rating: number;
  featured?: boolean;
  discount?: number;
  brand?: string;
  color?: string;
}
