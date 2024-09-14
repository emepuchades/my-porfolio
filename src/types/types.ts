export type SectionType = "default" | "contact" | "portfolio"; // Add more types as needed

export interface Section {
  type: SectionType;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  subsections?: string[];
}
