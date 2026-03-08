import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Founder from "./components/Founder";
import Ventures from "./components/Venues";
import Capabilities from "./components/Capabilities";
import Honors from "./components/Honors";
import Media from "./components/Media";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Founder />
      <Ventures />
      <Capabilities />
      <Honors />
      <Media />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
