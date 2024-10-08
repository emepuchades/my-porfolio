import { Database, FileJson, Globe, Palette } from "lucide-react";

export const skills = [
  {
    name: "React",
    icon: <FileJson className="w-6 h-6" />,
    level: 8,
    color: "text-blue-400",
  },
  {
    name: "Node.js",
    icon: <Database className="w-6 h-6" />,
    level: 7,
    color: "text-green-400",
  },
  {
    name: "HTML/CSS",
    icon: <Globe className="w-6 h-6" />,
    level: 10,
    color: "text-red-400",
  },
  {
    name: "UI/UX",
    icon: <Palette className="w-6 h-6" />,
    level: 6,
    color: "text-purple-400",
  },
];
