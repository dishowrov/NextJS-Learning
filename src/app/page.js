import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Gsap from "./components/Gsap";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <About/> */}
      <Gsap/>
      <Footer />
    </>
  );
}
