import { Product } from '../../interfaces/Product';
import { PRODUCT_URL } from '../../api/apiLinks';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCT_URL);
  const data = await response.json();
  return data as Product[];
}