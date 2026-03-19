import { logoutAction } from "@/app/admin/actions";
import { Bolt, FileText, LogOut, LayoutDashboard, Plus } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
              <Bolt className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-gray-900 font-extrabold block leading-none">VOLTAGE</span>
              <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Admin Panel</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-xl transition-all duration-200 group font-bold text-sm"
          >
            <LayoutDashboard className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
            Pulpit
          </Link>
          <Link
            href="/admin/posts"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-xl transition-all duration-200 group font-bold text-sm"
          >
            <FileText className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
            Wszystkie Wpisy
          </Link>
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-xl transition-all duration-200 group font-bold text-sm"
          >
            <Plus className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors" />
            Dodaj Nowy Wpis
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex w-full items-center gap-3 px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200 font-bold text-sm"
            >
              <LogOut className="w-5 h-5" />
              Wyloguj się
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 md:p-12 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
