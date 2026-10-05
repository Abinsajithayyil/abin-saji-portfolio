"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [dark, setDark] = useState(false);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch (e) {}
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-display text-lg font-semibold">{profile.name}</a>
        <nav className="flex items-center gap-5 text-sm">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hidden text-muted transition-colors hover:text-ink sm:inline">{label}</a>
          ))}
          <button
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="rounded-md border border-line px-3 py-1 text-muted transition-colors hover:text-ink"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
