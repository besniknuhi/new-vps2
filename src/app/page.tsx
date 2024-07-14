import ChooseUs from "../components/ChooseUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Infrastructure from "../components/Infrastructure";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white antialiased h-full w-full">
        <Hero />
        <Technologies />
        <ChooseUs />
        <Infrastructure />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
