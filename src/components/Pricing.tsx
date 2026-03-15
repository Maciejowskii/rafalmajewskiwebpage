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
    <section id="cennik" className="bg-zinc-900 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="text-center mb-14">
          <span className="text-lime-400 font-semibold text-sm uppercase tracking-widest">
            Cennik
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Ceny orientacyjne usług
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Podane ceny mają charakter orientacyjny i mogą się różnić w
            zależności od zakresu prac, rodzaju instalacji oraz lokalizacji
            inwestycji. W celu przygotowania dokładnej wyceny zapraszamy do
            kontaktu w której zostanie przedstawiona indywidualna wycena dla państwa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingCategories.map((category, i) => (
            <div
              key={i}
              className="bg-zinc-800/50 backdrop-blur border border-zinc-700/50 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="bg-zinc-800/80 px-6 py-4 border-b border-zinc-700/50">
                <h3 className="text-lime-400 font-bold text-lg">
                  {category.title}
                </h3>
              </div>
              <div className="flex-1 p-6 space-y-4">
                {category.items.map((item, j) => (
                  <div
                    key={j}
                    className="flex items-center justify-between text-sm sm:text-base gap-4"
                  >
                    <span className="text-zinc-300 font-medium leading-tight">
                      {item.name}
                    </span>
                    <span className="text-white font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-zinc-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-lime-400/25 group text-lg"
          >
            Skontaktuj się po indywidualną wycenę
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
