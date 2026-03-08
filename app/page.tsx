import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Founder from './components/Founder';
import Ventures from './components/Venues';
import Capabilities from './components/Capabilities';
import Honors from './components/Honors';
import Media from './components/Media';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <Hero />
      <Founder />
      <Ventures />
      <Capabilities />
      <Honors />
      <Media />
      <Timeline />
      <Gallery />
      <Articles />
      <Contact />
      <Footer />
    </main>
  );
}
