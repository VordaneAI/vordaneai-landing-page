import { IntroAnimation } from "../components/ui/IntroAnimation";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Products } from "../components/sections/Products";
import { Services } from "../components/sections/Services";
import { Solutions } from "../components/sections/Solutions";
import { Technology } from "../components/sections/Technology";
import { Ticker } from "../components/ui/Ticker";
import { Why } from "../components/sections/Why";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main id="main">
        <Hero />
        <Ticker />
        <Products />
        <Solutions />
        <Services />
        <Technology />
        <Why />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
