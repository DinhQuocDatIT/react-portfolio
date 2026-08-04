import { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/AboutMe";
import Education from "./components/sections/Education";
import { sections } from "./constants/sections";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);

            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSection(id);
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        handleScrollTo={scrollTo}
      />
      <main className="pt-16 max-w-6xl mx-auto">
        <Hero />
        <AboutMe />
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
