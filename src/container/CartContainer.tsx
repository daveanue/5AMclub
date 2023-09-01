import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartComponent from "../components/CartComponent";

export default function CartContainer() {
  const { cartItems, setCartItems } = useContext(CartContext);
  // this will display the product that were added to the cart
  const removeItemFromCart = (cartItemId: number) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((cartItem) => cartItem.product.id !== cartItemId);
    })
  }

  // edit quantity through form box I assume
  const editItemQuantity = (productId: number, quantityNumber: number) => {
    setCartItems(prevCartItems =>
      prevCartItems.map((item) =>
        item.product.id === productId ? { ...item, quantity: quantityNumber }
          : item
      ))
  }

  return (
    cartItems.map(cartItem =>
      <CartComponent
        cartItem={cartItem}
        removeItem={removeItemFromCart}
        editItemQuantity={editItemQuantity}
      />
      )
  )

}