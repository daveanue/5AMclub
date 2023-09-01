import React, { createContext, useState } from 'react';
import { Product, ProductContextType, ProductProviderProps } from '../../interfaces/Product';

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    voteCount: 0,
    availableQuantity: 10,
    description: "Description for Product 1",
    price: 19.99,
  },
  {
    id: 2,
    name: "Product 2",
    voteCount: 0,
    availableQuantity: 5,
    description: "Description for Product 2",
    price: 29.99,
  },
  {
    id: 3,
    name: "Product 3",
    voteCount: 0,
    availableQuantity: 15,
    description: "Description for Product 3",
    price: 24.99,
  },
];


export const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});

export const ProductProvider : React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const productContextValue : ProductContextType = {
    products,
    setProducts
  };

  return (
    <ProductContext.Provider value={productContextValue}>
      {children}
    </ProductContext.Provider>
  )
}