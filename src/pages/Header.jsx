import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

function Header() {
  return (
    <header className="bg-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-4xl font-bold text-purple-600 mr-2">M</span>
        <span className="text-2xl font-semibold">aria</span>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
