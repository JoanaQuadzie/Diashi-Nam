import Products from "./components/products";
import Navbar from "../../components/navbar";
import Hero from "./components/hero";
import Footer from "../../components/footer";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Testimonial />
      <Footer />
    </>
  );
}
