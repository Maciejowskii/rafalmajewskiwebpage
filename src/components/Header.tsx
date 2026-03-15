"use client";

import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "O nas", href: "/#o-nas" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "Cennik", href: "/#cennik" },
  { label: "Blog", href: "/blog" },
  { label: "Obszar działania", href: "/#obszar" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-lime-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-zinc-900" />
            </div>
            <span className="text-white font-bold text-lg lg:text-xl tracking-tight">
              VOLTAGE <span className="text-zinc-400 font-normal">&</span> Rav
              Elektro
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-lime-400 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-lime-400 hover:bg-lime-300 text-zinc-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-lime-400/25"
            >
              Darmowa wycena
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-zinc-800 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-zinc-300 hover:text-white text-sm font-medium px-2 py-2 rounded-lg hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="bg-lime-400 hover:bg-lime-300 text-zinc-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 text-center mt-2"
              >
                Darmowa wycena
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
