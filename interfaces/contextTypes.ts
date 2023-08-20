import React from 'react';
import { Product } from './productTypes';

export interface voteProductsContextType {
  voteProducts: Product[];
  setvoteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}