import './App.css'
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
