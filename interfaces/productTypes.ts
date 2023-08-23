export interface Product {
  id : number;
  name: string;
  description?: string;
  price?: number;
}

export interface VotingItemProps {
  product: Product;
}