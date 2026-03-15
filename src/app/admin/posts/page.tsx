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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Wszystkie Wpisy ({posts.length})</h1>
        <Link
          href="/admin/posts/new"
          className="bg-lime-400 hover:bg-lime-300 transition-colors text-zinc-900 font-bold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Dodaj wpis
        </Link>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-800/50 border-b border-zinc-800 text-zinc-400 text-sm">
              <th className="p-4 font-medium">Tytuł</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Data Wpisu</th>
              <th className="p-4 font-medium text-right">Akcje</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-sm">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-zinc-500">
                  Brak wpisów. Kliknij "Dodaj wpis", aby rozpocząć.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-zinc-800/30 transition-colors group">
                  <td className="p-4">
                    <div className="text-white font-medium mb-1">{post.title}</div>
                    <div className="text-zinc-500 text-xs">/{post.slug}</div>
                  </td>
                  <td className="p-4">
                    {post.publishedAt ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-lime-400/10 text-lime-400 border border-lime-400/20">
                        Opublikowany
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
                        Szkic
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-zinc-400">
                    {new Date(post.createdAt).toLocaleDateString("pl-PL")}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer" className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors" title="Zobacz na żywo">
                        <Eye className="w-4 h-4" />
                      </a>
                      <Link href={`/admin/posts/${post.id}/edit`} className="p-2 text-zinc-400 hover:text-lime-400 hover:bg-zinc-700 rounded-lg transition-colors" title="Edytuj">
                        <Edit2 className="w-4 h-4" />
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
