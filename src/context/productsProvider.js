import CartContext from "./globalContext";
import { products } from "@/data/cart-data";

const ProductProvider = ({ children }) => {
  
  return (
    <CartContext.Provider value={{ products }}>
      {children}
    </CartContext.Provider>
  );
}
export default ProductProvider;