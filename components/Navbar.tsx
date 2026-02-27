"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "achievements",
  "experience",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const main = document.getElementById("main-scroll");
    if (!main) return;

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const mainRect = main.getBoundingClientRect();

        if (
          rect.top <= mainRect.top + 100 &&
          rect.bottom >= mainRect.top + 100
        ) {
          current = id;
        }
      });

      setActive(current);
    };

    main.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    active === id
      ? "text-purple-400 border-b-2 border-purple-400 pb-1"
      : "text-gray-300 hover:text-purple-400 transition";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <h1 className="text-purple-400 font-semibold">
          SANDEEP PORTFOLIO !
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}