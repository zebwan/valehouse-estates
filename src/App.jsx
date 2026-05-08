import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import IntroScreen from "./components/IntroScreen";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Residences from "./pages/Residences";
import About from "./pages/About";
import Neighbourhoods from "./pages/Neighbourhoods";
import Contact from "./pages/Contact";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className={`app ${showIntro ? "app-intro-active" : "app-ready"}`}>
      {showIntro && <IntroScreen onComplete={handleIntroComplete} />}

      <ScrollToTop />

      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residences" element={<Residences />} />
          <Route path="/about" element={<About />} />
          <Route path="/neighbourhoods" element={<Neighbourhoods />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;