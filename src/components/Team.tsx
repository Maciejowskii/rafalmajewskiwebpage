import Image from "next/image";

const team = [
  {
    name: "Bartosz Niewiński",
    role: "Właściciel - VOLTAGE",
    image: "/images/people/bartosz-niewinski.jpg",
  },
  {
    name: "Rafał Majewski",
    role: "Właściciel - Rav Elektro",
    image: "/images/people/rafal-majewski.jpg",
  },
];

export default function Team() {
  return (
    <section id="zespol" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nasz Zespół
          </h2>
          <div className="mt-4 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center group">
              <div className="relative w-56 h-56 mb-8 overflow-hidden rounded-full border-4 border-gray-50 shadow-xl group-hover:border-red-600 group-hover:scale-105 transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Fallback if image fails to load */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 -z-10">
                  <span className="text-4xl font-black">{member.name[0]}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-red-600 font-bold uppercase tracking-wider text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
