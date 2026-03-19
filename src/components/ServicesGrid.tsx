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
    <section id="uslugi" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Zakres naszych usług
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Red accent line at top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="w-14 h-14 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
