import { Shield, Zap, Clock } from "lucide-react";

const props = [
  {
    icon: Shield,
    title: "Bezpieczeństwo",
    desc: "Najwyższe standardy wykonania i certyfikowane materiały.",
  },
  {
    icon: Zap,
    title: "Nowoczesne technologie",
    desc: "Systemy Smart Home i innowacyjne rozwiązania elektroenergetyczne.",
  },
  {
    icon: Clock,
    title: "Terminowość realizacji",
    desc: "Gwarantujemy dotrzymanie ustalonych terminów każdego projektu.",
  },
];

export default function ValueProps() {
  return (
    <section id="o-nas" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {props.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group px-6"
            >
              <div className="w-20 h-20 shrink-0 bg-red-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-red-600 transition-all duration-500 shadow-sm">
                <item.icon className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
