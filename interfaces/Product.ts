export interface Product {
  id : number;
  name: string;
  voteCount: number;
  availableQuantity: number;
  description?: string;
  price?: number;
}
