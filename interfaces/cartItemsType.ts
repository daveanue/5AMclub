// Product && Quantity
import { Product } from './Product';


  export interface cartItemsType {
    product: Product,
    quantity: number
  }

  export interface CartProviderProps {
    children: React.ReactNode;
  }

  export interface CartContextType {
    cartItems: cartItemsType[];
    setCartItems: React.Dispatch<React.SetStateAction<cartItemsType[]>>;
  }

