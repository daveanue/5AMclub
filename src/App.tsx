import './App.css'
import { useState } from 'react';
import { Product } from '../interfaces/Product';
import VotingContainer from './container/VotingContainer'
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';
import ProductContainer from './container/ProductContainer';
function App() {
  /*
  reducing traffic load by making cart client sided
  only when decide to checkout do we send all product information
  to server side.
  */

  

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
      <ProductProvider>
        <ProductContainer />
      </ProductProvider>
      </CartProvider>

      <VotingContainer />
    </div>
  )
}

export default App
