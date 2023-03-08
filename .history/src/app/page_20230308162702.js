import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Feature from "./Feature";
import Products from "./Products";
import Reviews from "./Reviews";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Feature />
      <Products />
      <Reviews />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
