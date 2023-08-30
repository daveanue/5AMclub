import { useState, useEffect} from 'react';
import { Product } from '../../interfaces/productTypes';
import { getProducts } from '../utils/getProducts';
import { sendVote } from '../utils/sendVote';
import VotingItem  from '../components/VotingItem';

// shift + option + f auto format codes

export default function VotingContainer() {
  const [voteProducts, setvoteProducts] = useState<Product[]>([]);

  const handleVote = async (voteProductId: number, setvoteProducts: React.Dispatch<React.SetStateAction<Product[]>>) => {
    try {
      const updatedVoteCount = await sendVote(voteProductId);

      const updatedVoteProducts = voteProducts.map(product => {
        if (product.id === voteProductId) {
          return {...product, voteCount: updatedVoteCount };
        }
        // if id doesn't match, return product as is
        return product;
      });
      setvoteProducts(updatedVoteProducts);
    }
    catch (error) {
      console.error('Error updating vote Count', error);
    }
  }
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
  }, []);



  return (
      <div>
      {voteProducts.map((product : Product) => (
          <VotingItem
          key={product.id}
          id={product.id}
          product={product}
          onVoteClick={()=> handleVote(product.id, setvoteProducts)}
          />
        ))}
      </div>
  );
}