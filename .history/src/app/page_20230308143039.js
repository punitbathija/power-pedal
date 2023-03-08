import { Inter } from "@next/font/google";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Feature from "./Feature";
import Products from "./Products";
import Reviews from "./Reviews";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Feature />
      <Products />
      <Reviews />
      <Footer />
    </>
  );
}
