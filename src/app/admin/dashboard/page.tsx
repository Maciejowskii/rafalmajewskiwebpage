import { prisma } from "@/lib/prisma";
import { Plus, FileText, Bolt, ArrowRight } from "lucide-react";
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
      <h1 className="text-4xl font-black text-gray-900 mb-10 tracking-tight">Pulpit</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-xl group-hover:bg-red-600/10 transition-colors" />
          <h2 className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2 z-10">Razem Opublikowanych</h2>
          <p className="text-5xl font-black text-gray-900 z-10">{postsCount}</p>
        </div>
        
        <Link href="/admin/posts/new" className="bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-2xl p-8 flex flex-col justify-center items-center gap-3 group cursor-pointer text-white shadow-lg hover:shadow-red-600/20 active:scale-95">
           <Plus className="w-10 h-10 group-hover:scale-110 transition-transform" />
           <span className="font-black text-lg">Napisz coś nowego</span>
        </Link>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-xl font-black text-gray-900 flex items-center gap-3">
            <FileText className="w-6 h-6 text-red-600" />
            Ostatnie Wpisy
          </h2>
          <Link href="/admin/posts" className="text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group">
            Zobacz wszystkie <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {recentPosts.length === 0 ? (
            <div className="p-12 text-center text-gray-400">
              Nie napisałeś jeszcze żadnego posta.
            </div>
          ) : (
            recentPosts.map((post) => (
              <div key={post.id} className="p-8 hover:bg-gray-50/50 transition-colors flex justify-between items-center group">
                <div>
                  <h3 className="text-gray-900 font-bold text-lg group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex gap-4 mt-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                    <span className={post.publishedAt ? "text-red-600" : ""}>{post.publishedAt ? "Opublikowany" : "Szkic"}</span>
                    <span>•</span>
                    <span>{new Date(post.createdAt).toLocaleDateString("pl-PL")}</span>
                  </div>
                </div>
                <Link 
                  href={`/admin/posts/${post.id}/edit`}
                  className="px-6 py-2.5 border-2 border-gray-100 hover:border-red-600 hover:bg-red-600 hover:text-white rounded-xl text-sm font-bold text-gray-600 transition-all duration-200"
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
