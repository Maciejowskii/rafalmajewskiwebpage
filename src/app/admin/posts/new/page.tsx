"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowLeft, Save, Image as ImageIcon, Sparkles, Globe, FileText } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/RichTextEditor";
import { createPostAction } from "../actions";

function SubmitButton({ isDraft, isSecondary }: { isDraft?: boolean; isSecondary?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      name="status"
      value={isDraft ? "draft" : "published"}
      disabled={pending}
      className={`px-6 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50 active:scale-95 ${
        isSecondary
          ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700" 
          : "bg-lime-400 text-zinc-900 hover:bg-lime-300 shadow-lg shadow-lime-400/20"
      }`}
    >
      <Save className="w-4 h-4" />
      {pending ? "Zapisywanie..." : (isDraft ? "Zapisz jako Szkic" : "Opublikuj Artykuł")}
    </button>
  );
}

export default function NewPostPage() {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  async function handleAction(formData: FormData) {
    formData.append("content", content);
    
    const result = await createPostAction(null, formData);
    if (result && result.error) {
      setError(result.error);
    }
  }

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/posts"
            className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all hover:bg-zinc-800"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-4xl font-black text-white tracking-tight">Nowy Wpis</h1>
            <p className="text-zinc-500 mt-1">Stwórz nową treść dla swojej witryny.</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SubmitButton isSecondary isDraft />
          <SubmitButton />
        </div>
      </div>

      <form action={handleAction} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {/* Main Content Card */}
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 space-y-8 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lime-400 mb-2">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Podstawowe Informacje</span>
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-zinc-300 mb-2">
                  Tytuł Wpisu *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  placeholder="Jak wybrać instalację fotowoltaiczną?"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-zinc-300 mb-2">
                  Treść Artykułu *
                </label>
                <div className="bg-zinc-800/30 rounded-xl overflow-hidden border border-zinc-700/50">
                  <RichTextEditor value={content} onChange={setContent} />
                </div>
              </div>
              
              <div>
                <label htmlFor="excerpt" className="block text-sm font-semibold text-zinc-300 mb-2">
                  Zajawka / Krótki opis
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  rows={4}
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 resize-y transition-all"
                  placeholder="Krótki tekst zachęcający do przeczytania, widoczny na liście wpisów..."
                />
              </div>
            </div>
          </div>

          {/* SEO Settings Card */}
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-lime-400 mb-2">
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Ustawienia SEO</span>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="seoTitle" className="block text-sm font-semibold text-zinc-300 mb-2">
                  SEO Tytuł (Meta Title)
                </label>
                <input
                  type="text"
                  id="seoTitle"
                  name="seoTitle"
                  placeholder="Domyślnie użyje tytułu wpisu"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="seoDescription" className="block text-sm font-semibold text-zinc-300 mb-2">
                  SEO Opis (Meta Description)
                </label>
                <textarea
                  id="seoDescription"
                  name="seoDescription"
                  rows={2}
                  placeholder="Domyślnie użyje zajawki"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 resize-y transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Image Upload/Preview Card */}
          <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl">
            <div className="flex items-center gap-2 text-lime-400 mb-2">
              <ImageIcon className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Miniaturka Wpisu</span>
            </div>
            
            <div className="aspect-video w-full bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 flex items-center justify-center relative group">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt="Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              ) : (
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-800">
                    <ImageIcon className="w-8 h-8 text-zinc-700" />
                  </div>
                  <p className="text-xs text-zinc-500 max-w-[140px] mx-auto">Wklej URL zdjęcia poniżej aby zobaczyć podgląd</p>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">
                URL Obrazka
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-lime-400 transition-all font-mono"
              />
            </div>
          </div>

          <div className="bg-lime-400/5 border border-lime-400/10 rounded-2xl p-6 space-y-4">
             <div className="flex items-center gap-2 text-lime-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Wskazówka</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Pamiętaj o dodaniu odpowiednich tagów SEO. Dobrze sformatowany artykuł z miniaturką ma większą szansę na wysoką pozycję w Google.
              </p>
          </div>
        </div>
      </form>
    </div>
  );
}

