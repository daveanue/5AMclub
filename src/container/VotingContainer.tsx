import { useState, useEffect, createContext } from 'react';
import { Product } from '../../interfaces/productTypes';
import { voteProductsContextType } from '../../interfaces/contextTypes';
import { getProducts } from '../utils/getProducts';
import VotingItem  from '../components/VotingItem';

// shift + option + f auto format codes

export default function VotingContainer() {
  const [voteProducts, setvoteProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const voteProducts = await getProducts();
        setvoteProducts(voteProducts);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [voteProducts]);
  return (
      <div>
        {voteProducts.map((product) => (
          <VotingItem key={product.id} product={product}/>
        ))}
      </div>
  );
}