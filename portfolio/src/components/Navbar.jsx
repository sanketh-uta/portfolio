import React, { useState } from "react";
import {
  Menu,
  X,
  Code,
  Terminal,
  Briefcase,
  School,
  User,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navItems = [
//     { label: "About", href: "#about" },
//     { label: "Education", href: "#education" },
//     { label: "Experience", href: "#experience" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ];

  return (
    <nav className="bg-gray-800 text-gray-100 shadow-lg fixed w-full top-0 z-50 border-b border-emerald-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center flex-wrap">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-1">
            <div className="flex-shrink-0 flex items-center space-x-1">
              <a
                href="https://www.linkedin.com/in/sanketh-bolishetti-01494b1a7/"
                className="text-emerald-400 hover:text-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <span className="text-emerald-400">&lt;</span> */}
                <Linkedin
                  size={24}
                  className="inline mx-1 text-white hover:text-emerald-400 transition-colors duration-200"
                />
              </a>

              <a
                href="https://github.com/sanketh-uta"
                className="text-emerald-400 hover:text-emerald-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github
                  size={24}
                  className="inline mx-1 text-white hover:text-emerald-400 transition-colors duration-200"
                />
                {/* <span className="text-emerald-400">/</span> */}
                {/* <span className="text-emerald-400">&gt;</span> */}
              </a>

              {/* Optionally, you can still include the 'Code' icon if needed */}
            </div>

            <a href="#" className="text-xl font-mono font-bold group">
              <span className="text-emerald-400">&lt;</span>
              <span className="text-white group-hover:text-emerald-400 transition-colors duration-200">
                Sanketh
              </span>
              <span className="text-emerald-400">/&gt;</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200 group"
              >
                <User
                  className="inline mr-2 text-gray-300 group-hover:text-emerald-400"
                  size={18}
                />
                <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                  About
                </span>
              </a>
              <a
                href="#education"
                className="text-gray-300 text-lg hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200 group"
              >
                <School
                  className="inline mr-2 text-gray-300 group-hover:text-emerald-400"
                  size={18}
                />
                <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                  Education
                </span>
              </a>
              <a
                href="#experience"
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200 group"
              >
                <Briefcase
                  className="inline mr-2 text-gray-300 group-hover:text-emerald-400"
                  size={18}
                />
                <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                  Experience
                </span>
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200 group"
              >
                <Code
                  className="inline mr-2 text-gray-300 group-hover:text-emerald-400"
                  size={18}
                />
                <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                  Projects
                </span>
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-mono transition-colors duration-200 group"
              >
                <Phone
                  className="inline mr-2 text-gray-300 group-hover:text-emerald-400"
                  size={18}
                />
                <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                  Contact
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Terminal size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            <a
              href="#about"
              className="block text-gray-300 hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="inline mr-2 text-emerald-400" size={18} />
              <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                About
              </span>
            </a>
            <a
              href="#education"
              className="block text-gray-300 hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <School className="inline mr-2 text-emerald-400" size={18} />
              <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                Education
              </span>
            </a>
            <a
              href="#experience"
              className="block text-gray-300 hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase className="inline mr-2 text-emerald-400" size={18} />
              <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                Experience
              </span>
            </a>
            <a
              href="#projects"
              className="block text-gray-300 hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code className="inline mr-2 text-emerald-400" size={18} />
              <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                Projects
              </span>
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-emerald-400 hover:bg-gray-700 px-3 py-2 rounded-md text-base font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone className="inline mr-2 text-emerald-400" size={18} />
              <span className="text-gray-300 text-lg group-hover:text-emerald-400 transition-colors duration-200">
                Contact
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
