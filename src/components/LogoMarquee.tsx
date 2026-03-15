"use client";
import Image from "next/image";

const logos = [
  { name: "ZORD Koszalin", file: "zord.png" },
  { name: "OSKP Koszalin", file: "oskp.jpg" },
  { name: "Romex", file: "romex.jpg" },
  { name: "GEA", file: "gea.jpg" },
  { name: "Espersen", file: "espersen.png" },
  { name: "Fight Club Koszalin", file: "fight-club.jpg" },
  { name: "Baltin Sun", file: "baltin-sun.jpg" },
  { name: "Origami", file: "origami.png" },
  { name: "Vivantes", file: "vivantes.jpg" },
  { name: "Kevee", file: "kevee.png" },
  { name: "Ulstein", file: "ulstein.jpg" },
];

function LogoItem({ logo }: { logo: { name: string; file: string } }) {
  return (
    <div className="flex-shrink-0 mx-8 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer w-40 h-24">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={`/logos/${logo.file}`}
          alt={`Logo partnera - ${logo.name}`}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="bg-white py-20 overflow-hidden border-t border-stone-100">
      <div className="text-center mb-12">
        <span className="text-zinc-400 font-semibold text-xs uppercase tracking-[0.2em]">
          Zaufali nam m.in.
        </span>
      </div>

      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] items-center">
          {/* Double the array for infinite scroll effect */}
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
