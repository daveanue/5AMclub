import './App.css'
import { useState } from 'react';
import { Product } from '../interfaces/Product';
import VotingContainer from './container/VotingContainer'
import { CartProvider } from './context/CartContext';
import ProductContainer from './container/ProductContainer';
function App() {
  /*
  reducing traffic load by making cart client sided
  only when decide to checkout do we send all product information
  to server side.
  */

  const addToCart = (product: Product) => {
    // if the product already exist in the cart, then we need to increment the quantity by 1
    setCartItems((prevCartItems) => {
      const existingCartItems = prevCartItems.find(item => item.product.id === product.id);

      if (existingCartItems) {
        return prevCartItems.map(item =>
          item.product.id === product.id ? {...item, quantity: item.quantity + 1}
          : item);
      } else {
        // product yet to exist in cart, add product with quantity of 1
        return [...prevCartItems, {product, quantity: 1}];
      }
    })
  }

  const removeItemFromCart = (productId: number) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.product.id !== productId);
    })
  }
  // edit quantity through form box I assume
  const editItemQuantity = (productId: number, quantityNumber: number) => {
    setCartItems(prevCartItems =>
      prevCartItems.map((item) =>
        item.product.id === productId ? {...item, quantity : quantityNumber}
        : item
  ))
  }


  return (
    <div>
      <CartProvider>
        <ProductContainer />
      </CartProvider>
      <VotingContainer />

    </div>
  )
}

export default App
