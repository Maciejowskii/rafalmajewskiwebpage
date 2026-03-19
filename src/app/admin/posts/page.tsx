import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit2, Eye } from "lucide-react";
import DeletePostButton from "./DeletePostButton";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  let posts: any[] = [];

  try {
    posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error("[POSTS_PAGE] Failed to fetch data from Prisma, using mock data:", err);
    posts = [
      { id: "1", title: "Przykładowy wpis o fotowoltaice", slug: "fotowoltaika-porady", createdAt: new Date(), publishedAt: new Date() },
      { id: "2", title: "Jak dbać o instalację elektryczną?", slug: "dbaj-o-prad", createdAt: new Date() },
      { id: "3", title: "Nowe dotacje Mój Prąd 6.0", slug: "moj-prad-6", createdAt: new Date(), publishedAt: new Date() },
    ];
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-black text-gray-900 tracking-tight">
          Wszystkie Wpisy <span className="text-red-600">({posts.length})</span>
        </h1>
        <Link
          href="/admin/posts/new"
          className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-black px-8 py-4 rounded-xl flex items-center gap-3 shadow-lg hover:shadow-red-600/20 active:scale-95"
        >
          <Plus className="w-5 h-5 shadow-sm" />
          Dodaj wpis
        </Link>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-50 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <th className="p-6">Tytuł</th>
              <th className="p-6">Status</th>
              <th className="p-6">Data Wpisu</th>
              <th className="p-6 text-right">Akcje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-sm">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-12 text-center text-gray-400 font-medium">
                  Brak wpisów. Kliknij "Dodaj wpis", aby rozpocząć.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="p-6">
                    <div className="text-gray-900 font-bold text-lg mb-1 group-hover:text-red-600 transition-colors">{post.title}</div>
                    <div className="text-gray-400 text-xs font-medium tracking-tight">/{post.slug}</div>
                  </td>
                  <td className="p-6">
                    {post.publishedAt ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-50 text-red-600 border border-red-100">
                        Opublikowany
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-200">
                        Szkic
                      </span>
                    )}
                  </td>
                  <td className="p-6 text-gray-500 font-medium">
                    {new Date(post.createdAt).toLocaleDateString("pl-PL")}
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <a 
                        href={`/blog/${post.slug}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200" 
                        title="Zobacz na żywo"
                      >
                        <Eye className="w-5 h-5" />
                      </a>
                      <Link 
                        href={`/admin/posts/${post.id}/edit`} 
                        className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200" 
                        title="Edytuj"
                      >
                        <Edit2 className="w-5 h-5" />
                      </Link>
                      <DeletePostButton id={post.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
