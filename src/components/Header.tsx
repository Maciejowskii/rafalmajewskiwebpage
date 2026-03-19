"use client";

import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "O nas", href: "/#o-nas" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "Cennik", href: "/#cennik" },
  { label: "Obszar działania", href: "/#obszar" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex flex-col items-center font-bold text-xl leading-tight text-gray-900 group">
            <span>Voltage</span>
            <span className="text-red-600 text-sm font-bold">&</span>
            <span>Rav Elektro</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-red-600 text-sm font-semibold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3 rounded-md transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
            >
              Darmowa wycena
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-gray-900 p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-100 mt-2 pt-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-600 hover:text-red-600 text-base font-semibold px-2 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMobileOpen(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-5 py-3 rounded-md transition-all duration-200 text-center mt-4 shadow-md"
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
