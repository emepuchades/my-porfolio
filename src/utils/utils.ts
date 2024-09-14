import { useCallback } from "react";
// @ts-ignore
import { Section } from "./types";

export const useScrollHandler = (
  scrollToSection: (direction: "up" | "down") => void
) => {
  return useCallback(
    (event: WheelEvent) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        scrollToSection("down");
      } else if (event.deltaY < 0) {
        scrollToSection("up");
      }
    },
    [scrollToSection]
  );
};

export const createScrollToSection = (
  sections: Section[],
  currentSection: number,
  currentSubsection: number,
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>,
  setCurrentSubsection: React.Dispatch<React.SetStateAction<number>>,
  setIsScrolling: any
) => {
  return (direction: "up" | "down") => {
    if (setIsScrolling(true)) return;

    if (direction === "down") {
      if (currentSection === 1) {
        if (currentSubsection < (sections[1].subsections?.length || 0) - 1) {
          setCurrentSubsection((prev) => prev + 1);
        } else if (currentSection < sections.length - 1) {
          setCurrentSection((prev) => prev + 1);
          setCurrentSubsection(0);
        }
      } else if (currentSection < sections.length - 1) {
        setCurrentSection((prev) => prev + 1);
        setCurrentSubsection(0);
      }
    } else if (direction === "up") {
      if (currentSection === 1) {
        if (currentSubsection > 0) {
          setCurrentSubsection((prev) => prev - 1);
        } else if (currentSection > 0) {
          setCurrentSection((prev) => prev - 1);
          setCurrentSubsection(0);
        }
      } else if (currentSection > 0) {
        setCurrentSection((prev) => prev - 1);
        setCurrentSubsection(0);
      }
    }

    setTimeout(() => setIsScrolling(false), 700);
  };
};
