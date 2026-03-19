import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Clock, ArrowRight, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog i Aktualności | VOLTAGE & Rav Elektro",
  description: "Porady, realizacje i nowości z branży elektrycznej i elektroenergetycznej.",
};

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  let posts: any[] = [];

  try {
    posts = await prisma.post.findMany({
      where: { 
        publishedAt: { not: null },
      },
      orderBy: { publishedAt: "desc" },
    });
  } catch (err) {
    console.error("[BLOG_INDEX] Failed to fetch data from Prisma, using mock data:", err);
    posts = [
      { 
        id: "1", 
        title: "Jak wybrać najlepsze panele fotowoltaiczne w 2026?", 
        slug: "jak-wybrac-panele-fotowoltaiczne", 
        publishedAt: new Date("2026-03-01"),
        excerpt: "Wybór odpowiednich paneli fotowoltaicznych to klucz do sukcesu każdej inwestycji w OZE. Sprawdź na co zwrócić uwagę.",
        imageUrl: "/images/projects/baltin-sun.jpg"
      },
      { 
        id: "2", 
        title: "Pomiary elektryczne - dlaczego są tak ważne dla Twojego bezpieczeństwa?", 
        slug: "pomiary-elektryczne-bezpieczenstwo", 
        publishedAt: new Date("2026-02-15"),
        excerpt: "Regularne przeglądy i pomiary instalacji elektrycznej mogą uratować życie i mienie. Dowiedz się jak często należy je wykonywać.",
        imageUrl: "/images/projects/gea.jpg"
      },
      { 
        id: "3", 
        title: "Inteligentny dom: Od czego zacząć przygodę ze Smart Home?", 
        slug: "od-czego-zaczac-smart-home", 
        publishedAt: new Date("2026-01-20"),
        excerpt: "Planujesz budowę lub remont i marzysz o inteligentnym domu? Podpowiadamy, które elementy systemu są najważniejsze na start.",
        imageUrl: "/images/projects/origami-project.jpg"
      },
    ];
  }

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16 text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
              Nasz <span className="text-red-600">Blog</span>
            </h1>
            <div className="mt-6 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
            <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
              Aktualności z firmy, porady dotyczące instalacji elektrycznych, nowinki technologiczne w Smart Home i wiele więcej.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 text-center text-gray-500 shadow-sm">
              Wkrótce pojawią się tutaj pierwsze wpisy!
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-red-600/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Post Image/Thumbnail */}
                  <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden relative">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-50 text-red-600/20">
                        <Zap className="w-16 h-16" strokeWidth={1} />
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-red-600 font-bold uppercase tracking-wider mb-4">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(post.publishedAt!).toLocaleDateString("pl-PL", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 leading-relaxed mb-6">
                      {post.excerpt || "Przeczytaj artykuł, aby dowiedzieć się więcej na ten temat."}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-red-600 font-bold text-sm">
                      Czytaj dalej
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}
