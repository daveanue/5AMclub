import React, { createContext, useState } from 'react';
import { cartItemsType, CartProviderProps, CartContextType } from '../../interfaces/cartItemsType';

const mockCartItems: cartItemsType[] = [
  {
    product: {
      id: 1,
      name: 'Premium Headphones',
      voteCount: 120,
      availableQuantity: 25,
      description: 'High-quality premium headphones with noise cancellation.',
      price: 199.99,
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      name: 'Smartphone',
      voteCount: 85,
      availableQuantity: 15,
      description: 'Latest smartphone with a stunning camera and fast processor.',
      price: 799.99,
    },
    quantity: 1,
  },
  {
    product: {
      id: 3,
      name: 'Laptop',
      voteCount: 70,
      availableQuantity: 10,
      description: 'Powerful laptop for work and entertainment.',
      price: 1299.99,
    },
    quantity: 1,
  },
  {
    product: {
      id: 4,
      name: 'Wireless Mouse',
      voteCount: 45,
      availableQuantity: 50,
      description: 'Ergonomic wireless mouse for improved productivity.',
      price: 29.99,
    },
    quantity: 3,
  },
  {
    product: {
      id: 5,
      name: 'Portable Speaker',
      voteCount: 60,
      availableQuantity: 20,
      description: 'Compact portable speaker for music lovers on the go.',
      price: 49.99,
    },
    quantity: 1,
  },
  // Add more mock cart items as needed
];

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {}, // default: generic function that doesn't do anything
});

export const CartProvider: React.FC<CartProviderProps> = ( { children } ) => {
  const [cartItems, setCartItems] = useState<cartItemsType[]>(mockCartItems);

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