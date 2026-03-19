import Image from "next/image";

const team = [
  {
    name: "Bartosz Niewiński",
    role: "Właściciel - VOLTAGE",
    image: "/images/team/bartosz.jpg",
  },
  {
    name: "Rafał Majewski",
    role: "Właściciel - Rav Elektro",
    image: "/images/team/rafal.jpg",
  },
  {
    name: "Jakub Cosel",
    role: "Manager Robót (Niemcy)",
    image: "/images/team/jakub.jpg",
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

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center group">
              <div className="relative w-48 h-48 mb-8 overflow-hidden rounded-full border-4 border-gray-50 shadow-xl group-hover:border-red-600 transition-all duration-500">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300">
                  <span className="text-4xl font-black">{member.name[0]}</span>
                </div>
                {/* Real image if exists - using placeholder logic for now since I don't see images in project */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50" />
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
