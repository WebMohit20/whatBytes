// import Image from "next/image";
import ProductProvider from "@/context/productsProvider";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Cart App</h1>
      <ProductProvider>
        
        {/* You can add components here that will use the ProductProvider context */}
      </ProductProvider>
    </div>
  );
}
