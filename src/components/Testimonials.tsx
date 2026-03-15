import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Właścicielka domu, Koszalin",
    text: "Profesjonalna ekipa, terminowa realizacja i bardzo czyste wykonanie. Polecam każdemu, kto szuka rzetelnego elektryka. Instalacja Smart Home działa bez zarzutu.",
    rating: 5,
  },
  {
    name: "Marek Wiśniewski",
    role: "Kierownik budowy, Szczecin",
    text: "Współpracujemy z VOLTAGE przy kilku inwestycjach i za każdym razem jestem pod wrażeniem ich punktualności i jakości pracy. Fachowcy w każdym calu.",
    rating: 5,
  },
  {
    name: "Katarzyna Nowak",
    role: "Przedsiębiorca, Gdańsk",
    text: "Kompleksowa instalacja elektryczna w naszym biurze wykonana szybko i sprawnie. Podpowiedzieli najlepsze rozwiązania pod kątem oszczędności energii.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center mb-14">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-widest">
            Referencje
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mt-3">
            Opinie naszych klientów
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-700 font-bold text-sm">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-zinc-900 font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-zinc-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
