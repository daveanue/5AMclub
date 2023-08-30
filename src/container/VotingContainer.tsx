import { useState, useEffect} from 'react';
import { Product } from '../../interfaces/productTypes';
import { getProducts } from '../utils/getProducts';
import { sendVote } from '../utils/sendVote';
import VotingItem  from '../components/VotingItem';

// shift + option + f auto format codes

export default function VotingContainer() {
  const [voteProducts, setvoteProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the first product',
      price: 19.99,
      voteCount: 5,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the second product',
      price: 29.99,
      voteCount: 8,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the third product',
      price: 9.99,
      voteCount: 3,
    },
  ]);

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
          voteCount={product.voteCount}
          onVoteClick={()=> handleVote(product.id, setvoteProducts)}
          />
        ))}
      </div>
  );
}