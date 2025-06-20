// import Image from "next/image";
import './styles/global.css';
import ProductProvider from "@/context/productsProvider";
import Home from "@/app/pages/index";
export default function App() {
  return (
    <div>
      
      <ProductProvider>
        <Home/>
        {/* You can add components here that will use the ProductProvider context */}
      </ProductProvider>
    </div>
  );
}
