import React, { createContext, useState } from 'react';
import { Product, ProductContextType, ProductProviderProps } from '../../interfaces/Product';

export const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});

export const ProductProvider : React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

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