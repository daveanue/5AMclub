import { VotingItemProps } from "../../interfaces/productTypes";

export default function VotingItem({ product } : VotingItemProps) {
  return (
    <div>
    <h3> {product.name} </h3>
    <h4> {product.price} </h4>
    <p> {product.description} </p>
    </div>
  )
}