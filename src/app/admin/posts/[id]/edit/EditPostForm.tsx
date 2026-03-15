"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/RichTextEditor";
import { updatePostAction } from "../../actions";

function SubmitButton({ isDraft }: { isDraft?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      name="status"
      value={isDraft ? "draft" : "published"}
      disabled={pending}
      className={`px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all disabled:opacity-50 ${
        isDraft 
          ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white" 
          : "bg-lime-400 text-zinc-900 hover:bg-lime-300"
      }`}
    >
      <Save className="w-4 h-4" />
      {pending ? "Zapisywanie..." : (isDraft ? "Zapisz jako Szkic" : "Aktualizuj Wpis")}
    </button>
  );
}

export default function EditPostForm({ post }: { post: any }) {
  const [content, setContent] = useState(post.content || "");
  const [error, setError] = useState<string | null>(null);

  async function handleAction(formData: FormData) {
    formData.append("content", content);
    formData.append("id", post.id);
    
    const result = await updatePostAction(null, formData);
    if (result && result.error) {
      setError(result.error);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/posts"
          className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-bold text-white">Edytuj Wpis</h1>
      </div>

      <form action={handleAction} className="space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-zinc-300 mb-2">
              Tytuł Wpisu *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              defaultValue={post.title}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Treść Artykułu *
            </label>
            <RichTextEditor value={content} onChange={setContent} />
          </div>
          
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-zinc-300 mb-2">
              Zajawka (Krótki opis widoczny na liście wpisów)
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              rows={3}
              defaultValue={post.excerpt || ""}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 resize-y"
            />
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">
          <h2 className="text-xl font-bold text-white pb-2 border-b border-zinc-800">
            Ustawienia SEO (Pozycjonowanie)
          </h2>
          <div>
            <label htmlFor="seoTitle" className="block text-sm font-medium text-zinc-300 mb-2">
              SEO Tytuł
            </label>
            <input
              type="text"
              id="seoTitle"
              name="seoTitle"
              defaultValue={post.seoTitle || ""}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50"
            />
          </div>

          <div>
            <label htmlFor="seoDescription" className="block text-sm font-medium text-zinc-300 mb-2">
              SEO Opis
            </label>
            <textarea
              id="seoDescription"
              name="seoDescription"
              rows={2}
              defaultValue={post.seoDescription || ""}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 resize-y"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-4 border-t border-zinc-800">
          <SubmitButton isDraft={!post.publishedAt} />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
