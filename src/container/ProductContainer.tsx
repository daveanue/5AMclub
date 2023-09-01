import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { ProductContext } from "../context/ProductContext"
import ProductComponent from "../components/ProductComponent";
import { Product } from "../../interfaces/Product";

export default function ProductContainer() {
  /*
    Cart
      -ProductCointainer
        - ProductComponent

        OR

    (global states) - cartItem, auth
    -Cart
      -removeItemFromCart
      -editItemFromCart
      -deleteFromCart
    -ProductContainer
      - Product Component
          -addToCart

  */

  const { products } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCart = (product: Product) => {
    // if the product already exist in the cart, then we need to increment the quantity by 1
    setCartItems((prevCartItems) => {
      const existingCartItems = prevCartItems.find(item => item.product.id === product.id);

      if (existingCartItems) {
        return prevCartItems.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 }
            : item);
      } else {
        // product yet to exist in cart, add product with quantity of 1
        return [...prevCartItems, { product, quantity: 1 }];
      }
    })

  }



  return (
    <>
      {
        products.map((product : Product) =>
          <ProductComponent
            id={product.id}
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        )
      }
    </>
  )
}