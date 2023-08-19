import { useState, useEffect, createContext } from 'react';

interface Product {
  id : number;
  name: string;
  description?: string;
  price?: number;
}

interface voteProductsContextType {
  voteProducts: Product[];
  setvoteProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

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