import { useState, useEffect, createContext } from 'react';
import { Product } from '../../interfaces/productTypes';
import { voteProductsContextType } from '../../interfaces/contextTypes';



const voteProductsContext= createContext<voteProductsContextType | null>(null);

export default function VotingContainer() {
  const [voteProducts, setvoteProducts] = useState<Product[]>([]);
  return (
    <voteProductsContext.Provider
      value={{
        voteProducts,
        setvoteProducts
      }}
      >
    </voteProductsContext.Provider>
  );
}