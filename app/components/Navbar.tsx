"use client";
import { useEffect, useState } from "react";
import { poppins } from "@/lib/fonts";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-10 py-4 flex justify-between items-center transition-all duration-500
      ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <h1 className={`${poppins.className} font-bold tracking-widest text-white`}>
        nada satya m.
      </h1>

      <div className="hidden md:flex gap-8 text-sm text-white">
        <a href="#about" className="hover:text-gray-300 transition">
          About
        </a>
        <a href="#projects" className="hover:text-gray-300 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-gray-300 transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
