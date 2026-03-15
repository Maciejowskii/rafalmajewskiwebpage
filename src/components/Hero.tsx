"use client";

import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
  {
    src: "/images/projects/ulstein-group.jpg",
    alt: "Instalacja przemysłowa Ulstein Group",
  },
  {
    src: "/images/projects/gea.jpg",
    alt: "Kompleksowa instalacja GEA",
  },
  {
    src: "/images/projects/romex-hala.jpg",
    alt: "Instalacja na nowej hali i stacja transformatorowa",
  },
  {
    src: "/images/projects/baltin-sun.jpg",
    alt: "Instalacja w hotelu Baltin Sun",
  },
  {
    src: "/images/projects/vivantes-klinikum.jpg",
    alt: "Instalacje w klinice Vivantes",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-lime-400/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              <span className="text-lime-400 text-sm font-medium">
                Działamy na terenie Polski i Niemiec
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Kompleksowe Instalacje{" "}
              <span className="text-lime-400">Elektryczne</span>{" "}
              i&nbsp;Elektroenergetyczne
            </h1>

            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-xl">
              Realizujemy zlecenia od domów jednorodzinnych, przez apartamenty,
              aż po zaawansowane instalacje przemysłowe i systemy Smart Home.
              Zaufaj certyfikowanym ekspertom i nowoczesnym technologiom.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-900 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-lime-400/25 group"
              >
                Zobacz naszą ofertę
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 border border-zinc-600 hover:border-lime-400 text-white hover:text-lime-400 font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 group bg-zinc-800/50 backdrop-blur"
              >
                <Phone className="w-4 h-4 text-lime-400 group-hover:animate-bounce" />
                Darmowa wycena
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white">2+</p>
                <p className="text-sm text-zinc-500 mt-1">Szybkich ekip mobilnych</p>
              </div>
              <div className="border-l border-zinc-800 pl-8">
                <p className="text-3xl font-bold text-white">4</p>
                <p className="text-sm text-zinc-500 mt-1">
                  Obsługiwane województwa
                </p>
              </div>
              <div className="border-l border-zinc-800 pl-8">
                <p className="text-3xl font-bold text-lime-400">24h</p>
                <p className="text-sm text-zinc-500 mt-1">Szybki kontakt</p>
              </div>
            </div>
          </div>

          {/* Right visual - Image Carousel */}
          <div className="relative hidden lg:block h-full min-h-[500px]">
            {/* Decorative lime glow */}
            <div className="absolute inset-0 bg-lime-400/20 rounded-3xl blur-3xl" />

            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-zinc-700/50 shadow-2xl shadow-lime-900/20 z-10 bg-zinc-800">
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center grayscale-[15%] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                    priority={index === 0}
                  />
                  {/* Info overlay for current slide */}
                  <div className="absolute bottom-6 right-6 bg-zinc-900/80 backdrop-blur border border-zinc-700/50 px-4 py-2 rounded-lg pointer-events-none">
                    <p className="text-zinc-300 text-xs font-medium uppercase tracking-wider">
                      Projekt: <span className="text-white">{image.alt}</span>
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Gradient overlay to fade bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Slide indicators */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-6 bg-lime-400"
                        : "w-2 bg-zinc-600 hover:bg-zinc-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -left-6 bottom-16 z-20 bg-zinc-900 border border-lime-400/30 p-4 rounded-xl shadow-xl shadow-black/50 backdrop-blur flex items-center gap-4">
              <div className="w-12 h-12 bg-lime-400/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold leading-tight">Gwarancja</p>
                <p className="text-zinc-400 text-xs">Jakości i bezpieczeństwa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
