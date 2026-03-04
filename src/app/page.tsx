import Hero from "@/components/Hero";
import EpisodesGrid from "@/components/EpisodesGrid";
import Characters from "@/components/Characters";
import About from "@/components/About";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <CursorGlow />
      <main>
        <Hero />
        <div className="section-divider" />
        <EpisodesGrid />
        <div className="section-divider" />
        <Characters />
        <div className="section-divider" />
        <About />
      </main>
      <Footer />
    </>
  );
}
