import React, { createContext, useState } from 'react';
import { cartItemsType, CartProviderProps, CartContextType } from '../../interfaces/cartItemsType';

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {}, // default: generic function that doesn't do anything
});

export const CartProvider: React.FC<CartProviderProps> = ( { children } ) => {
  const [cartItems, setCartItems] = useState<cartItemsType[]>([]);

  const cartContextValue: CartContextType = {
    cartItems,
    setCartItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}