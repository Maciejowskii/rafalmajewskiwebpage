import {
  Lightbulb,
  Factory,
  Smartphone,
  Cable,
  CloudLightning,
  FileCheck,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Instalacje elektryczne",
    desc: "Domy, apartamenty, usługi. Nowe instalacje i modernizacje istniejących systemów elektrycznych.",
  },
  {
    icon: Factory,
    title: "Instalacje przemysłowe",
    desc: "Hale produkcyjne, magazyny i obiekty komercyjne. Kompleksowe rozwiązania dla przemysłu.",
  },
  {
    icon: Smartphone,
    title: "Smart Home",
    desc: "Automatyka budynkowa, zdalne sterowanie oświetleniem, ogrzewaniem i urządzeniami domowymi.",
  },
  {
    icon: Cable,
    title: "Instalacje elektroenergetyczne",
    desc: "Złącza kablowe, WLZ, stacje transformatorowe i linie zasilające.",
  },
  {
    icon: CloudLightning,
    title: "Instalacje odgromowe i PPOŻ",
    desc: "Zabezpieczenia budynków przed wyładowaniami atmosferycznymi i systemy przeciwpożarowe.",
  },
  {
    icon: FileCheck,
    title: "Pomiary elektryczne",
    desc: "Dokumentacja odbiorcza, protokoły pomiarowe, badania instalacji elektrycznych.",
  },
];

export default function ServicesGrid() {
  return (
    <section id="uslugi" className="bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-14">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-widest">
            Oferta
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
            Zakres naszych usług
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
            Oferujemy pełen zakres usług elektrycznych i elektroenergetycznych
            dla klientów indywidualnych oraz biznesowych.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:shadow-lg hover:border-lime-200 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-lime-400/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-400 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-lime-600 group-hover:text-zinc-900 transition-colors duration-300" />
              </div>
              <h3 className="text-zinc-900 font-semibold text-lg">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
