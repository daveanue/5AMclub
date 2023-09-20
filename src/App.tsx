import './App.css'
import ProductContainer from './container/ProductContainer';
import CartContainer from './container/CartContainer';
import AdminPortal from './container/adminPortal';
function App() {
  /*
  reducing traffic load by making cart client sided
  only when decide to checkout do we send all product information
  to server side.
  */

  return (
    <div>
      <AdminPortal/>
      <ProductContainer />
      <CartContainer />
    </div>
  )
}

export default App
