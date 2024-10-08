import deBarfProject from "../../assets/debarf.png";
import mockDeBarfProject from "../../assets/mock1.png";
import mockTaskManager from "../../assets/mock2.png";

export const projects = [
  {
    id:'1',
    title: "Task Manager",
    image: mockTaskManager,
    link: "https://github.com/emepuchades/deBarf",
    style: { height: "400px", width: "600px" }, // Define el objeto aquí, sin comillas
    size: "large",
    description:
      "An online web application for address and guarantor verification",
    about:
      "Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.",
    technologies: ["Vue", "Vuex", "Javascript", "CSS3 & Sass"],
    website: "https://piggment.co",
    github: "https://github.com/example/piggment",
  },
  {
    id:'2',
    title: "Podcaster App",
    image: "/placeholder.svg?height=200&width=600",
    style: { height: "200px", width: "600px" }, // Define el objeto aquí, sin comillas
    link: "#",
    size: "wide",
    description:
      "An online web application for address and guarantor verification",
    about:
      "Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.",
    technologies: ["Vue", "Vuex", "Javascript", "CSS3 & Sass"],
    website: "https://piggment.co",
    github: "https://github.com/example/piggment",
  },
  {
    id:'3',
    title: "debarf",
    image: mockDeBarfProject,
    style: { height: "400px", width: "200px" }, // Define el objeto aquí, sin comillas
    link: "#",
    size: "tall",
    description:
      "An online web application for address and guarantor verification",
    about:
      "Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.",
    technologies: ["Vue", "Vuex", "Javascript", "CSS3 & Sass"],
    website: "https://piggment.co",
    github: "https://github.com/example/piggment",
  },
  {
    id:'4',
    title: "Streamerle",
    image: "/placeholder.svg?height=400&width=400",
    style: { height: "400px", width: "400px" }, // Define el objeto aquí, sin comillas
    link: "#",
    size: "medium",
    description:
      "An online web application for address and guarantor verification",
    about:
      "Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.",
    technologies: ["Vue", "Vuex", "Javascript", "CSS3 & Sass"],
    website: "https://piggment.co",
    github: "https://github.com/example/piggment",
  },
  {
    id:'5',
    title: "femhack",
    image: "/placeholder.svg?height=200&width=200",
    style: { height: "200px", width: "200px" }, // Define el objeto aquí, sin comillas
    link: "#",
    size: "small",
    description:
      "An online web application for address and guarantor verification",
    about:
      "Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.",
    technologies: ["Vue", "Vuex", "Javascript", "CSS3 & Sass"],
    website: "https://piggment.co",
    github: "https://github.com/example/piggment",
  },
  {
    id:'6',
    title: "HackatonMidudev toaxIA",
    image: "/placeholder.svg?height=200&width=200",
    style: { height: "200px", width: "200px" }, // Define el objeto aquí, sin comillas
    link: "#",
    size: "small",
    description:
      "An online web application for address and guarantor verification",
    about:
      "Nester Verify independently verifies the address a customer provides by matching two alternate addresses found in our consumer database. The matched addresses come from sources independent of the customer in question, and can be applied as per a specified date.",
    technologies: ["Vue", "Vuex", "Javascript", "CSS3 & Sass"],
    website: "https://piggment.co",
    github: "https://github.com/example/piggment",
  },
];

export const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-3 md:row-span-1",
  tall: "md:col-span-1 md:row-span-2",
  medium: "md:col-span-2 md:row-span-2",
  small: "md:col-span-1 md:row-span-1",
};

export const imageHeightClasses = {
  large: "h-48 md:h-56",
  wide: "h-40 md:h-40",
  tall: "h-56 md:h-64",
  medium: "h-48 md:h-56",
  small: "h-32 md:h-32",
};
