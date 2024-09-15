export type SectionType = "default" | "contact" | "portfolio"; // Add more types as needed

export interface Subsections {
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Section {
  type: SectionType;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  subsections?: Subsections[];
}