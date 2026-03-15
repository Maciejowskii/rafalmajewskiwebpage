import { Shield, Zap, Clock } from "lucide-react";

const props = [
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    desc: "Certyfikowane materiały i sprawdzone rozwiązania",
  },
  {
    icon: Zap,
    title: "Nowoczesne technologie",
    desc: "Smart Home, automatyka i najnowsze systemy",
  },
  {
    icon: Clock,
    title: "Terminowość realizacji",
    desc: "Dotrzymujemy ustalonych terminów",
  },
];

export default function ValueProps() {
  return (
    <section id="o-nas" className="bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {props.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-6 md:py-4 group"
            >
              <div className="w-14 h-14 shrink-0 bg-lime-400/15 rounded-2xl flex items-center justify-center group-hover:bg-lime-400/25 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h3 className="text-zinc-900 font-semibold text-base">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
