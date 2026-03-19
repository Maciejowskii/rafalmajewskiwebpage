import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Zachodniopomorskie",
    cities: [
      "Koszalin",
      "Szczecin",
      "Kołobrzeg",
      "Białogard",
      "Mielno",
      "Sławno",
      "Stargard",
      "Szczecinek",
    ],
  },
  {
    name: "Pomorskie",
    cities: [
      "Słupsk",
      "Ustka",
      "Gdańsk",
      "Gdynia",
      "Sopot",
      "Bytów",
      "Lębork",
      "Chojnice",
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
    <section id="obszar" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Gdzie działamy?
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-red-600/20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-black text-xl leading-tight">
                  {region.name}
                </h3>
              </div>
              <ul className="space-y-4">
                {region.cities.map((city, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-gray-600 font-bold"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0" />
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
