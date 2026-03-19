"use client";

import { ArrowRight, Phone, Zap } from "lucide-react";
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden py-16 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
              <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                Polska & Niemcy
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Kompleksowe Instalacje <br />
              <span className="text-red-600">Elektryczne</span> <br />
              <span className="text-gray-800 tracking-tighter">& Elektroenergetyczne</span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Od standardowych instalacji w domach po nowoczesne systemy Smart Home i obiekty przemysłowe. Realizujemy projekty na terenie Polski i Niemiec.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              <a
                href="#uslugi"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md transition-all duration-200 shadow-lg hover:shadow-red-600/30 active:scale-95 group"
              >
                Zobacz ofertę
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-50 font-bold px-8 py-4 rounded-md transition-all duration-200 active:scale-95"
              >
                Skontaktuj się
              </a>
            </div>

            {/* Quick stats / Features */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-10">
              <div>
                <p className="text-3xl font-black text-gray-900">15+</p>
                <p className="text-sm font-bold text-gray-500 uppercase">Lat doświadczenia</p>
              </div>
              <div>
                <p className="text-3xl font-black text-gray-900">500+</p>
                <p className="text-sm font-bold text-gray-500 uppercase">Realizacji</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-3xl font-black text-red-600 font-serif italic text-sm">JAKOŚĆ & BEZPIECZEŃSTWO</p>
              </div>
            </div>
          </div>

          {/* Right visual - Bright, clean image display */}
          <div className="relative h-[400px] lg:h-[600px] w-full">
            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl shadow-gray-200 overflow-hidden border border-gray-100">
              {heroImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
              
              {/* Playful red elements */}
              <div className="absolute top-8 right-8 z-20 bg-red-600 text-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce shadow-red-600/20">
                <Phone className="w-6 h-6" />
                <span className="font-bold">+48 575 398 688</span>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                  <Zap className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="text-gray-900 font-black leading-none">Smart Home</p>
                  <p className="text-gray-500 text-xs font-bold mt-1">SYSTEMY PRZYSZŁOŚCI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
