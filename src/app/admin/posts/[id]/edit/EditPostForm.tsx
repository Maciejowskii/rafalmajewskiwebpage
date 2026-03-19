"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowLeft, Save, Image as ImageIcon, Sparkles, Globe, FileText } from "lucide-react";
import Link from "next/link";
import RichTextEditor from "@/components/RichTextEditor";
import { updatePostAction } from "../../actions";

function SubmitButton({ isDraft, isSecondary }: { isDraft?: boolean; isSecondary?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      name="status"
      value={isDraft ? "draft" : "published"}
      disabled={pending}
      className={`px-8 py-4 rounded-xl font-black flex items-center gap-3 transition-all duration-300 disabled:opacity-50 active:scale-95 shadow-lg uppercase tracking-widest text-xs ${
        isSecondary
          ? "bg-white text-gray-600 hover:text-red-600 border-2 border-gray-100 hover:border-red-100" 
          : "bg-red-600 text-white hover:bg-red-700 hover:shadow-red-600/20"
      }`}
    >
      <Save className="w-4 h-4" />
      {pending ? "Zapisywanie..." : (isDraft ? "Szkic" : "Aktualizuj")}
    </button>
  );
}

export default function EditPostForm({ post }: { post: any }) {
  const [content, setContent] = useState(post.content || "");
  const [imageUrl, setImageUrl] = useState(post.imageUrl || "");
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
    <div className="max-w-5xl mx-auto pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-6">
          <Link
            href="/admin/posts"
            className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-100 transition-all hover:shadow-lg shadow-sm"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Edytuj Wpis</h1>
            <p className="text-gray-500 mt-1 font-medium">Dostosuj szczegóły i opublikuj zmiany</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SubmitButton isSecondary isDraft />
          <SubmitButton />
        </div>
      </div>

      <form action={handleAction} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {error && (
            <div className="bg-red-50 border-2 border-red-100 text-red-600 p-5 rounded-2xl flex items-center gap-4 animate-in fade-in slide-in-from-top-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <p className="text-sm font-bold">{error}</p>
            </div>
          )}

          {/* Main Content Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 space-y-10 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-red-600 mb-2">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">Podstawowe Informacje</span>
              </div>
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-bold text-gray-700 ml-1">
                  Tytuł Wpisu *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  defaultValue={post.title}
                  className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700 ml-1">
                  Treść Artykułu *
                </label>
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-50 focus-within:border-red-600 transition-all">
                  <RichTextEditor value={content} onChange={setContent} />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="excerpt" className="block text-sm font-bold text-gray-700 ml-1">
                  Zajawka / Krótki opis
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  rows={4}
                  defaultValue={post.excerpt || ""}
                  className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white resize-y transition-all font-medium"
                  placeholder="Krótki tekst zachęcający do przeczytania..."
                />
              </div>
            </div>
          </div>

          {/* SEO Settings Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 space-y-8 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <Globe className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Ustawienia SEO</span>
            </div>
            <div className="grid grid-cols-1 gap-8">
              <div className="space-y-2">
                <label htmlFor="seoTitle" className="block text-sm font-bold text-gray-700 ml-1">
                  SEO Tytuł
                </label>
                <input
                  type="text"
                  id="seoTitle"
                  name="seoTitle"
                  defaultValue={post.seoTitle || ""}
                  className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white transition-all text-sm font-medium"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="seoDescription" className="block text-sm font-bold text-gray-700 ml-1">
                  SEO Opis
                </label>
                <textarea
                  id="seoDescription"
                  name="seoDescription"
                  rows={2}
                  defaultValue={post.seoDescription || ""}
                  className="w-full bg-gray-50 border-2 border-gray-50 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-red-600 focus:bg-white resize-y transition-all text-sm font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {/* Image Upload/Preview Card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-8 shadow-sm sticky top-8">
            <div className="flex items-center gap-2 text-red-600 mb-2">
              <ImageIcon className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Miniaturka Wpisu</span>
            </div>
            
            <div className="aspect-video w-full bg-gray-50 rounded-2xl overflow-hidden border-2 border-gray-50 flex items-center justify-center relative group">
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt="Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              ) : (
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-50">
                    <ImageIcon className="w-8 h-8 text-gray-200" />
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider max-w-[140px] mx-auto">Wklej URL zdjęcia poniżej</p>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <label htmlFor="imageUrl" className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
                URL Obrazka
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-gray-50 border-2 border-gray-50 rounded-xl px-4 py-3.5 text-gray-900 text-xs focus:outline-none focus:border-red-600 focus:bg-white transition-all font-mono"
              />
            </div>

            <div className="bg-red-50/50 border border-red-100 rounded-2xl p-6 space-y-4">
               <div className="flex items-center gap-2 text-red-600 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Status Publikacji</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Status:</span>
                  <span className={post.publishedAt ? "text-red-600" : "text-amber-500"}>
                    {post.publishedAt ? "Opublikowany" : "Szkic"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-gray-400">Utworzono:</span>
                  <span className="text-gray-600">{new Date(post.createdAt).toLocaleDateString("pl-PL")}</span>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

