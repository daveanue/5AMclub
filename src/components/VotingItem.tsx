import { VotingItemProps } from "../../interfaces/voteProductTypes";

export default function VotingItem({ id, product, onVoteClick } : VotingItemProps) {



  return (
    <div>
    <h3> {product.name} </h3>
    <h4> {product.price} </h4>
    <p> {product.description} </p>
    <button onClick={()=> onVoteClick(id)}>Vote</button>
    <p>{product.voteCount}</p>
    </div>
  )
}