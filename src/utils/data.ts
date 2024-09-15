import { Section } from "../types/types";

export const sections: Section[] = [
  {
    type: "default",
    title: "Maria Puchades",
    subtitle: "Senior Frontend Engineer",
    description:
      "Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.",
    buttonText: "About me",
  },
  {
    type: "portfolio",
    title: "Portfolio",
    subtitle: "Previous Projects",
    description:
      "I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please contact me!",
    buttonText: "See Projects",
    subsections: [ { name: "Trello clone", description: "Es un clon de trello literal xD", image: '', tags: [
      "React",
      "Redux",
      "Node",
      "JavaScript",
      "SASS",
      "Firebase",
    ]}, { name: "Barf", description: "Comida natural para perros", image: '', tags: [
      "React",
      "Redux",
      "Firebase",
    ]}, { name: "Streamle", description: "Adivina el streamerS", image: '', tags: [
      "React",
      "Redux",
      "Firebase",
    ]}],
  },
  {
    type: "contact",
    title: "Contact",
    subtitle: "Creating Apps",
    description:
      "What would you do if you had a software expert available at your fingertips. Want to start new project Or just say hey. You can also follow me on Instagram.",
    buttonText: "Contact",
  },
];
