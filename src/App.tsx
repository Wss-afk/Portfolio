import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { About } from "./components/About";
import { BackgroundScene } from "./components/BackgroundScene";
import { Contact } from "./components/Contact";
import { FocusModeOverlay } from "./components/FocusModeOverlay";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";

export default function App() {
  const [focusMode, setFocusMode] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="app-shell relative min-h-screen overflow-x-clip text-[var(--text)]"
        data-focus-mode={focusMode}
      >
        <BackgroundScene focusMode={focusMode} />
        <Navbar
          focusMode={focusMode}
          onToggleFocusMode={() => setFocusMode((current) => !current)}
        />
        <ScrollProgress />
        <FocusModeOverlay active={focusMode} />
        <main className="relative z-10 pb-20">
          <Hero focusMode={focusMode} />
          <div className="cinematic-divider section-shell" aria-hidden="true">
            <span>01: construir</span>
          </div>
          <About />
          <div className="cinematic-divider section-shell" aria-hidden="true">
            <span>02: tecnologías</span>
          </div>
          <Skills />
          <div className="cinematic-divider section-shell" aria-hidden="true">
            <span>03: evidencia</span>
          </div>
          <Projects />
          <Contact />
        </main>
        <div className="grain-layer" />
      </div>
    </MotionConfig>
  );
}
