import { CartComponentProps } from '../../interfaces/CartComponent'

export default function CartComponent({ cartItem } : CartComponentProps) {
  return (
    <div>
      <h3> {cartItem.product.name} </h3>
      <h4> {cartItem.product.price} </h4>
      <p> {cartItem.quantity} </p>
    </div>
  )
}