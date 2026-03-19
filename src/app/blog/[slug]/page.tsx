import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    imageUrl: "/images/projects/baltin-sun.jpg",
    seoTitle: "Najlepsze panele fotowoltaiczne 2026 | Poradnik VOLTAGE",
    seoDescription: "Dowiedz się jakie panele fotowoltaiczne wybrać w 2026 roku. Przewodnik po technologiach i producentach.",
    author: { name: "Bartosz Niewiński" }
  },
  { 
    id: "2", 
    title: "Pomiary elektryczne - dlaczego są tak ważne dla Twojego bezpieczeństwa?", 
    slug: "pomiary-elektryczne-bezpieczenstwo", 
    content: "<p>Instalacja elektryczna, jak każdy inny element budynku, ulega zużyciu. Regularne pomiary pozwalają wykryć upływy prądu lub uszkodzenia izolacji zanim dojdzie do tragedii...</p>",
    publishedAt: new Date("2026-02-15"),
    updatedAt: new Date("2026-02-15"),
    excerpt: "Regularne przeglądy i pomiary instalacji elektrycznej mogą uratować życie i mienie. Dowiedz się jak często należy je wykonywać.",
    imageUrl: "/images/projects/gea.jpg",
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
    imageUrl: "/images/projects/origami-project.jpg",
    author: { name: "Jakub Cosel" }
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
    title: post.seoTitle || `${post.title} | Blog Voltage & Rav Elektro`,
    description: post.seoDescription || post.excerpt || "Przeczytaj artykuł na blogu Voltage & Rav Elektro.",
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
    <>
      <Header />
      <article className="bg-white min-h-screen pt-32 pb-20">
        {/* JSON-LD Script for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-red-600 mb-8 transition-colors gap-2 text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do listy wpisów
          </Link>

          <header className="mb-12 border-b border-gray-100 pb-12">
            {post.imageUrl && (
              <div className="aspect-[21/9] w-full bg-gray-100 rounded-3xl overflow-hidden border border-gray-100 mb-12 shadow-xl">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-sm font-bold uppercase tracking-wider text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-red-600" />
                <span>{post.author?.name || "Zespół Voltage"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
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

          {/* Post Content */}
          <div 
            className="prose prose-lg prose-red max-w-none text-gray-700 prose-headings:text-gray-900 prose-headings:font-black prose-a:text-red-600 hover:prose-a:text-red-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <span className="text-gray-400 text-sm font-medium italic">Koniec artykułu</span>
            <Link 
              href="/blog" 
              className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl active:scale-95"
            >
              Zobacz więcej wpisów
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
