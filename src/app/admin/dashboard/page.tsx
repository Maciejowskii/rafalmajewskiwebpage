import { prisma } from "@/lib/prisma";
import { Plus, FileText } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  let postsCount = 0;
  let recentPosts: any[] = [];

  try {
    postsCount = await prisma.post.count();
    recentPosts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
    });
  } catch (err) {
    console.error("[DASHBOARD] Failed to fetch data from Prisma, using mock data:", err);
    postsCount = 3;
    recentPosts = [
      { id: "1", title: "Przykładowy wpis o fotowoltaice", createdAt: new Date(), publishedAt: new Date() },
      { id: "2", title: "Jak dbać o instalację elektryczną?", createdAt: new Date() },
      { id: "3", title: "Nowe dotacje Mój Prąd 6.0", createdAt: new Date(), publishedAt: new Date() },
    ];
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Pulpit</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl group-hover:bg-lime-400/10 transition-colors" />
          <h2 className="text-zinc-400 text-sm font-medium mb-2 z-10">Razem Opublikowanych</h2>
          <p className="text-4xl font-bold text-white z-10">{postsCount}</p>
        </div>
        
        <Link href="/admin/posts/new" className="bg-lime-400 hover:bg-lime-300 transition-colors rounded-xl p-6 flex flex-col justify-center items-center gap-2 group cursor-pointer text-zinc-900 border border-lime-500">
           <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
           <span className="font-bold">Napisz coś nowego</span>
        </Link>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-lime-400" />
            Ostatnie Wpisy
          </h2>
          <Link href="/admin/posts" className="text-sm text-lime-400 hover:text-lime-300">
            Zobacz wszystkie →
          </Link>
        </div>
        <div className="divide-y divide-zinc-800">
          {recentPosts.length === 0 ? (
            <div className="p-8 text-center text-zinc-500">
              Nie napisałeś jeszcze żadnego posta.
            </div>
          ) : (
            recentPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-zinc-800/50 transition-colors flex justify-between items-center group">
                <div>
                  <h3 className="text-white font-medium group-hover:text-lime-400 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex gap-4 mt-2 text-xs text-zinc-500">
                    <span>{post.publishedAt ? "Opublikowany" : "Szkic"}</span>
                    <span>•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString("pl-PL")}</span>
                  </div>
                </div>
                <Link 
                  href={`/admin/posts/${post.id}/edit`}
                  className="px-4 py-2 border border-zinc-700 hover:border-lime-400 rounded-lg text-sm text-zinc-300 hover:text-lime-400 transition-colors"
                >
                  Edytuj
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
