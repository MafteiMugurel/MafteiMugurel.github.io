import { useEffect } from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Recommendations from "./components/recommendation/Recommendations";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BootScreen from "./components/boot/BootScreen";
import Console from "./components/console/Console";
import "./App.scss";

// Fade sections in as they scroll into view. Content stays visible without JS.
const useReveal = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const root = document.documentElement;
    root.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

// Cards get a soft glow that follows the mouse.
const useSpotlight = () => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return undefined;
    }
    const onMove = (e) => {
      const card = e.target.closest && e.target.closest(".card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
};

function App() {
  useReveal();
  useSpotlight();

  return (
    <div className="App">
      <BootScreen />
      <Header />
      <main>
        <Banner />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <Console />
    </div>
  );
}

export default App;
