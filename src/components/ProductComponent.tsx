import { ProductComponentProps } from "../../interfaces/Product";

export default function ProductComponent({ id, product, addToCart} : ProductComponentProps) {


  return (
    <div>
      <h3> {product.name} </h3>
      <h4> {product.price} </h4>
      <p> {product.description} </p>
      <button onClick={() => addToCart}>+</button>
    </div>
  )
}