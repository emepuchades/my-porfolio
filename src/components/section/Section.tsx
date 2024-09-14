import React from "react";
import { Section as SectionType } from "../../types/types";
import {
  DefaultSection,
  ContactSection,
  PortfolioSection,
} from "./sectionComponents";

const sectionComponents = {
  default: DefaultSection,
  contact: ContactSection,
  portfolio: PortfolioSection,
};

interface SectionProps {
  section: SectionType;
}

export default function Section({ section }: SectionProps) {
  const SectionComponent = sectionComponents[section.type] || DefaultSection;

  return <SectionComponent section={section} />;
}
