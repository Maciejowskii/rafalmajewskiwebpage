import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const MOCK_POSTS = [
  { 
    id: "1", 
    title: "Jak wybrać najlepsze panele fotowoltaiczne w 2026?", 
    slug: "jak-wybrac-panele-fotowoltaiczne", 
    content: "<p>Wybór odpowiednich paneli fotowoltaicznych to klucz do sukcesu każdej inwestycji w OZE. W roku 2026 technologia N-Type oraz panele bificialne stały się standardem rynkowym...</p>",
    publishedAt: new Date("2026-03-01"),
    updatedAt: new Date("2026-03-01"),
    excerpt: "Wybór odpowiednich paneli fotowoltaicznych to klucz do sukcesu każdej inwestycji w OZE. Sprawdź na co zwrócić uwagę.",
    seoTitle: "Najlepsze panele fotowoltaiczne 2026 | Poradnik VOLTAGE",
    seoDescription: "Dowiedz się jakie panele fotowoltaiczne wybrać w 2026 roku. Przewodnik po technologiach i producentach.",
    author: { name: "Maciej Kowalski" }
  },
  { 
    id: "2", 
    title: "Pomiary elektryczne - dlaczego są tak ważne dla Twojego bezpieczeństwa?", 
    slug: "pomiary-elektryczne-bezpieczenstwo", 
    content: "<p>Instalacja elektryczna, jak każdy inny element budynku, ulega zużyciu. Regularne pomiary pozwalają wykryć upływy prądu lub uszkodzenia izolacji zanim dojdzie do tragedii...</p>",
    publishedAt: new Date("2026-02-15"),
    updatedAt: new Date("2026-02-15"),
    excerpt: "Regularne przeglądy i pomiary instalacji elektrycznej mogą uratować życie i mienie. Dowiedz się jak często należy je wykonywać.",
    author: { name: "Rafał Majewski" }
  },
  { 
    id: "3", 
    title: "Inteligentny dom: Od czego zacząć przygodę ze Smart Home?", 
    slug: "od-czego-zaczac-smart-home", 
    content: "<p>Budowa inteligentnego domu nie musi oznaczać ogromnych kosztów na start. Kluczem jest wybór stabilnej bazy, takiej jak system KNX lub bardziej przystępne rozwiązania Zigbee...</p>",
    publishedAt: new Date("2026-01-20"),
    updatedAt: new Date("2026-01-20"),
    excerpt: "Planujesz budowę lub remont i marzysz o inteligentnym domu? Podpowiadamy, które elementy systemu są najważniejsze na start.",
    author: { name: "Jan Nowak" }
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  let post: any = null;

  try {
    post = await prisma.post.findUnique({
      where: { slug: resolvedParams.slug },
    });
  } catch (err) {
    post = MOCK_POSTS.find(p => p.slug === resolvedParams.slug);
  }

  if (!post) {
    return { title: "Nie znaleziono wpisu" };
  }

  return {
    title: post.seoTitle || `${post.title} | Blog VOLTAGE`,
    description: post.seoDescription || post.excerpt || "Przeczytaj artykuł na blogu VOLTAGE.",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  let post: any = null;

  try {
    post = await prisma.post.findUnique({
      where: { slug: resolvedParams.slug },
      include: { author: true },
    });
  } catch (err) {
    console.error("[BLOG_POST] Failed to fetch data from Prisma, checking mock data:", err);
    post = MOCK_POSTS.find(p => p.slug === resolvedParams.slug);
  }

  if (!post || (!post.publishedAt && !post.id)) {
    notFound();
  }

  // Generate JSON-LD schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt || "",
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: {
      "@type": "Person",
      name: post.author?.name || "Zespół VOLTAGE",
    },
  };

  return (
    <article className="bg-zinc-950 min-h-screen pt-24 pb-20">
      {/* JSON-LD Script for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-zinc-500 hover:text-lime-400 mb-8 transition-colors gap-2 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Wróć do listy wpisów
        </Link>

        <header className="mb-12 border-b border-zinc-800 pb-8">
          {post.imageUrl && (
            <div className="aspect-[21/9] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 mb-10 shadow-2xl">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-lime-400" />
              <span>{post.author?.name || "Zespół VOLTAGE"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-lime-400" />
              <time dateTime={post.publishedAt.toISOString()}>
                {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        {/* Post Content - rendering the HTML generated from react-quill */}
        <div 
          className="prose prose-invert prose-lime max-w-none prose-p:text-zinc-300 prose-headings:text-white prose-a:text-lime-400 hover:prose-a:text-lime-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer info / tags could go here */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
          <span className="text-zinc-500 text-sm">Zakończenie artykułu</span>
          <Link href="/blog" className="px-6 py-2.5 bg-zinc-900 border border-zinc-800 hover:border-lime-400 hover:text-lime-400 text-zinc-300 rounded-lg transition-colors font-medium">
            Więcej wpisów
          </Link>
        </div>
      </div>
    </article>
  );
}
