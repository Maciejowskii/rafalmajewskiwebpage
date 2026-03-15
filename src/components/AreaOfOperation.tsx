import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Zachodniopomorskie",
    cities: [
      "Szczecin",
      "Police",
      "Goleniów",
      "Stargard",
      "Gryfino",
      "Pyrzyce",
      "Koszalin",
      "Białogard",
    ],
  },
  {
    name: "Nadmorskie",
    cities: [
      "Mielno",
      "Unieście",
      "Sarbinowo",
      "Kołobrzeg",
      "Dźwirzyno",
      "Ustronie Morskie",
      "Darłowo",
      "Jarosławiec",
    ],
  },
  {
    name: "Pomorskie",
    cities: [
      "Słupsk",
      "Ustka",
      "Miastko",
      "Polanów",
      "Bytów",
      "Gdańsk",
      "Gdynia",
      "Sopot",
    ],
  },
  {
    name: "Niemcy",
    cities: [
      "Berlin",
      "Brandenburgia",
      "Schwedt",
      "Pasewalk",
      "Prenzlau",
      "Angermünde",
      "Neubrandenburg",
    ],
  },
];

export default function AreaOfOperation() {
  return (
    <section id="obszar" className="bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-14">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-widest">
            Zasięg
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
            Obszar działalności
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-100">
                <div className="w-10 h-10 bg-lime-400/15 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-lime-600" />
                </div>
                <h3 className="text-zinc-900 font-bold text-lg leading-tight">
                  {region.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {region.cities.map((city, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-zinc-600 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 bg-lime-400 rounded-full shrink-0" />
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
