import { IProduct, IProductDetails } from "@/types/store/product";

export interface Cart {
  id: number;
  totalPrice: number;
  totalQuantity: number;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  product: IProduct
}