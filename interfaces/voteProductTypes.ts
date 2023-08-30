import { Product } from './Product';


export interface VotingItemProps {
  key: number,
  id: number,
  product: Product;
  voteCount: number
  onVoteClick: (voteProductId: number) => void
}