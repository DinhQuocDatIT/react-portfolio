import { useState } from "react";
import Header from "./components/layout/Header";

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <main></main>
    </>
  );
}

export default App;
