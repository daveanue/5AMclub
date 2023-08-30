export interface Product {
  id : number;
  name: string;
  voteCount: number;
  description?: string;
  price?: number;
}



export interface VotingItemProps {
  key: number,
  id: number,
  product: Product;
  onVoteClick: (voteProductId: number) => void
}