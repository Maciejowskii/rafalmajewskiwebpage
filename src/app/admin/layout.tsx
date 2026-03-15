import { logoutAction } from "@/app/admin/actions";
import { Bolt, FileText, LogOut, LayoutDashboard, Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-900 border-r border-zinc-800 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-zinc-800">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center">
              <Bolt className="w-5 h-5 text-zinc-900" />
            </div>
            <div>
              <span className="text-white font-bold block leading-none">VOLTAGE</span>
              <span className="text-zinc-500 text-xs">Admin Panel</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors group"
          >
            <LayoutDashboard className="w-5 h-5 text-zinc-500 group-hover:text-lime-400 transition-colors" />
            Pulpit
          </Link>
          <Link
            href="/admin/posts"
            className="flex items-center gap-3 px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors group"
          >
            <FileText className="w-5 h-5 text-zinc-500 group-hover:text-lime-400 transition-colors" />
            Wszystkie Wpisy
          </Link>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-3 px-4 py-2.5 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors group"
          >
            <Plus className="w-5 h-5 text-zinc-500 group-hover:text-lime-400 transition-colors" />
            Dodaj Nowy Wpis
          </Link>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 px-4 py-2.5 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Wyloguj się
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-10 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
