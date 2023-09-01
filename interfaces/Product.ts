export interface Product {
  id : number;
  name: string;
  voteCount: number;
  availableQuantity: number;
  description?: string;
  price?: number;
}


export interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export interface ProductProviderProps {
  children: React.ReactNode;
}

export interface ProductComponentProps {
  id: number;
  key?: number;
  product: Product;
  addToCart: (product: Product) => void;
}