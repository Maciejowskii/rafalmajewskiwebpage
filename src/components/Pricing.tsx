import { ArrowRight } from "lucide-react";

type PricingCategory = {
  title: string;
  items: { name: string; price: string }[];
};

const pricingCategories: PricingCategory[] = [
  {
    title: "Drobne usługi elektryczne",
    items: [
      { name: "Wymiana gniazdka elektrycznego", price: "od 80 zł" },
      { name: "Montaż nowego gniazdka", price: "od 120 zł" },
      { name: "Wymiana włącznika światła", price: "od 70 zł" },
      { name: "Montaż włącznika światła", price: "od 100 zł" },
      { name: "Montaż lampy / oświetlenia", price: "od 120 zł" },
      { name: "Montaż oświetlenia LED", price: "od 150 zł" },
      { name: "Podłączenie płyty indukcyjnej", price: "od 200 zł" },
    ],
  },
  {
    title: "Instalacje elektryczne w domu",
    items: [
      { name: "Wykonanie punktu elektrycznego", price: "od 120 zł" },
      { name: "Instalacja elektryczna (mieszkanie)", price: "od 6 000 zł" },
      { name: "Instalacja elektryczna (dom jednorodzinny)", price: "od 14 000 zł" },
      { name: "Modernizacja instalacji elektrycznej", price: "od 2 000 zł" },
    ],
  },
  {
    title: "Rozdzielnice elektryczne",
    items: [
      { name: "Montaż rozdzielnicy elektrycznej", price: "od 500 zł" },
      { name: "Modernizacja rozdzielnicy", price: "od 800 zł" },
      { name: "Montaż zabezpieczenia (bezpiecznika)", price: "od 40 zł" },
      { name: "Montaż rozdzielnicy w domu", price: "od 900 zł" },
    ],
  },
  {
    title: "Instalacje elektroenergetyczne",
    items: [
      { name: "Wykonanie WLZ", price: "od 900 zł" },
      { name: "Montaż złącza kablowego", price: "od 1800 zł" },
      { name: "Wykonanie przyłącza energetycznego", price: "od 2500 zł" },
    ],
  },
  {
    title: "Instalacje odgromowe",
    items: [
      { name: "Montaż instalacji odgromowej dom", price: "od 3200 zł" },
      { name: "Modernizacja instalacji odgromowej", price: "od 1500 zł" },
      { name: "Pomiary instalacji odgromowej", price: "od 350 zł" },
    ],
  },
  {
    title: "Pomiary elektryczne",
    items: [
      { name: "Pomiary instalacji mieszkanie", price: "od 250 zł" },
      { name: "Pomiary instalacji dom", price: "od 400 zł" },
      { name: "Pomiary instalacji w firmie", price: "od 700 zł" },
      { name: "Protokół pomiarów", price: "w cenie" },
    ],
  },
  {
    title: "Instalacje przemysłowe",
    items: [
      { name: "Instalacja elektryczna w hali", price: "od 70 zł / punkt" },
      { name: "Montaż tras kablowych", price: "od 35 zł / mb" },
      { name: "Montaż rozdzielnicy przemysłowej", price: "od 2500 zł" },
    ],
  },
  {
    title: "Inteligentny dom",
    items: [
      { name: "Instalacja smart home", price: "od 8 000 zł" },
      { name: "Automatyka budynkowa", price: "od 10 000 zł" },
    ],
  },
  {
    title: "Dojazd",
    items: [
      { name: "Dojazd w mieście", price: "zależy od specyfikacji prac" },
      { name: "Dojazd poza miasto", price: "od 1,5 zł / km" },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="cennik" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Przykładowe ceny usług
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            Podane ceny mają charakter orientacyjny. Zapraszamy do kontaktu w celu przygotowania indywidualnej wyceny.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingCategories.slice(0, 6).map((category, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-900 px-6 py-4">
                <h3 className="text-white font-bold text-lg">
                  {category.title}
                </h3>
              </div>
              <div className="flex-1 p-6 space-y-4">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between text-base gap-4 border-b border-gray-50 pb-2 last:border-0"
                  >
                    <span className="text-gray-600 font-medium">
                      {item.name}
                    </span>
                    <span className="text-red-600 font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 rounded-md transition-all duration-200 shadow-xl hover:shadow-red-600/30 group text-xl"
          >
            Darmowa wycena
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
