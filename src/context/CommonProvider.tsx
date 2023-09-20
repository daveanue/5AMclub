import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";

const CommonProvider: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <CartProvider>
    <ProductProvider>
      {children}
    </ProductProvider>
  </CartProvider>
)


export default CommonProvider