import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="bg-white flex justify-between items-center pt-4 px-8 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <img src={logo} className="w-32 h-14"/>
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
