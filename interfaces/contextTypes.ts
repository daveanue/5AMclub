import React from 'react';
import { Product }  from './Product';

export interface voteProductsContextType {
  voteProducts: Product[];
  setvoteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}