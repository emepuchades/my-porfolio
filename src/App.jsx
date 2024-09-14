import "./App.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronDown,
  ChevronUp,
  Linkedin,
  Instagram,
  ArrowDown,
} from "lucide-react";
import Subsection from "./components/subsections/Subsection";
import Section from "./components/section/Section";
import { sections } from "./utils/data";
import { createScrollToSection, useScrollHandler } from "./utils/utils";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSubsection, setCurrentSubsection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback(
    createScrollToSection(
      sections,
      currentSection,
      currentSubsection,
      setCurrentSection,
      setCurrentSubsection,
      setIsScrolling
    ),
    [currentSection, currentSubsection]
  );
  const handleScroll = useScrollHandler(scrollToSection);

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault(); // Esto previene que el navegador haga scroll normal.
      handleScroll(e);
    };
    window.addEventListener("wheel", wheelHandler, { passive: false });
    return () => window.removeEventListener("wheel", wheelHandler);
  }, [handleScroll]);

  const goToSection = (index) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setCurrentSection(index);
    setCurrentSubsection(0);
    setTimeout(() => setIsScrolling(false), 700);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="h-full transition-transform duration-700 ease-in-out relative z-10"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        {sections.map((section, index) => (
          <section
            key={index}
            className="h-screen w-screen overflow-hidden relative"
          >
            {section.subsections ? (
              <Subsection
                subsections={section.subsections}
                currentSubsection={currentSubsection}
              />
            ) : (
              <Section section={section} />
            )}
          </section>
        ))}
      </div>
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-20">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`block w-3 h-3 my-2 rounded-full ${
              currentSection === index ? "bg-purple-700" : "bg-gray-500"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </nav>
      <div className="fixed top-4 right-4 z-100 flex items-center space-x-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 text-black hover:text-purple-400" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-6 h-6 text-black hover:text-purple-400" />
        </a>
      </div>
      {/* Section indicator */}
      <div className="fixed bottom-4 left-4 z-100 text-black font-bold text-xl flex flex-col items-center">
        <span>{currentSection + 1}</span>
        <span className="text-indigo-800">-</span>
        <span>{sections.length}</span>
      </div>
      <div
        className="fixed bottom-8 right-8 z-20 flex flex-col items-center text-black"
        aria-label="Scroll indicator"
      >
        <span className="writing-vertical-rl text-sm mb-2">scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </div>
  );
}

export default App;
