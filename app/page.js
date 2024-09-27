import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/product/ProductCard";
import ProductCardList from "@/components/product/ProductCardList";
import Image from "next/image";
import connectDB from "@/config/database";
import Product from "@/models/Product";

// import { Provider } from "react-redux";
// import store from "@/cart/store";

export default async function Home() {
  await connectDB();
  const products = await Product.find({}).lean();

  return (
    <div>
      {/* <Provider store={store}> */}
      <section className="hero">
        <Hero />
      </section>
      <section>
        <ProductCardList products={products} />
      </section>
      {/* <MyApp /> */}
      {/* </Provider> */}
    </div>
  );
}
