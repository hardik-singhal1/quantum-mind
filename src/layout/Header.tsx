// Header.tsx
import React, { useEffect, useState } from "react";
import { NAV_LINKS } from "../constant/app.constant";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed w-full py-4 bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div
          className="text-2xl font-bold gradient-text cursor-pointer"
          onClick={() => handleScrollToSection("hero")}
        >
          Quantum Mind
        </div>
        <nav className="space-x-6 text-white">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollToSection(link.id)}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
