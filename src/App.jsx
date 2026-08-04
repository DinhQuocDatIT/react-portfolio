import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth">
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <main className="pt-16 max-w-6xl mx-auto">
        <Hero />
      </main>
    </div>
  );
}

export default App;
