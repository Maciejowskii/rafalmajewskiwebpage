import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

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
        excerpt: "Wybór odpowiednich paneli fotowoltaicznych to klucz do sukcesu każdej inwestycji w OZE. Sprawdź na co zwrócić uwagę."
      },
      { 
        id: "2", 
        title: "Pomiary elektryczne - dlaczego są tak ważne dla Twojego bezpieczeństwa?", 
        slug: "pomiary-elektryczne-bezpieczenstwo", 
        publishedAt: new Date("2026-02-15"),
        excerpt: "Regularne przeglądy i pomiary instalacji elektrycznej mogą uratować życie i mienie. Dowiedz się jak często należy je wykonywać."
      },
      { 
        id: "3", 
        title: "Inteligentny dom: Od czego zacząć przygodę ze Smart Home?", 
        slug: "od-czego-zaczac-smart-home", 
        publishedAt: new Date("2026-01-20"),
        excerpt: "Planujesz budowę lub remont i marzysz o inteligentnym domu? Podpowiadamy, które elementy systemu są najważniejsze na start."
      },
    ];
  }

  return (
    <div className="bg-zinc-950 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-zinc-500 hover:text-lime-400 mb-6 transition-colors gap-2">
            <ArrowLeft className="w-4 h-4" />
            Wróć do strony głównej
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Nasz <span className="text-lime-400">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl">
            Aktualności z firmy, porady dotyczące instalacji elektrycznych, nowinki technologiczne w Smart Home i wiele więcej.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            Wkrótce pojawią się tutaj pierwsze wpisy!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-500/50 hover:shadow-lg hover:shadow-lime-900/20 transition-all duration-300"
              >
                {/* Post Image/Thumbnail */}
                <div className="aspect-[16/9] w-full bg-zinc-800 overflow-hidden relative">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                      <div className="w-12 h-12 rounded-full bg-lime-400/10 flex items-center justify-center border border-lime-400/20">
                        <span className="text-lime-400 font-bold text-xl">V</span>
                      </div>
                    </div>
                  )}
                  {/* Overlay for better readability if needed, though here we want clean looks */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-lime-400 font-medium mb-4">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(post.publishedAt!).toLocaleDateString("pl-PL", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 mt-auto line-clamp-3 leading-relaxed">
                    {post.excerpt || "Przeczytaj artykuł, aby dowiedzieć się więcej na ten temat."}
                  </p>
                </div>
                <div className="px-8 py-4 border-t border-zinc-800/50 text-sm font-semibold text-white group-hover:text-zinc-900 group-hover:bg-lime-400 transition-colors flex items-center justify-between">
                  Czytaj dalej
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
