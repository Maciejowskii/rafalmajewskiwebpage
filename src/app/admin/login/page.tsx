"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "@/app/admin/actions";
import { Lock, Mail, ArrowRight } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-lime-400 hover:bg-lime-300 text-zinc-900 font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Logowanie..." : "Zaloguj się"}
      {!pending && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Panel Administratora
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-400">
          Zaloguj się, aby zarządzać wpisami na blogu.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-zinc-900 py-8 px-4 shadow sm:rounded-xl sm:px-10 border border-zinc-800">
          <form className="space-y-6" action={formAction}>
            {state?.error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg text-center">
                {state.error}
              </div>
            )}
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300"
              >
                Adres e-mail
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 bg-zinc-800 border border-zinc-700 rounded-lg py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400 sm:text-sm"
                  placeholder="admin@voltage.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-300"
              >
                Hasło
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 bg-zinc-800 border border-zinc-700 rounded-lg py-2.5 text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-lime-400 focus:border-lime-400 sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <SubmitButton />
            </div>
            
            {/* Auto-setup hint for dev */}
            <p className="text-xs text-zinc-600 text-center mt-4">
              Użyj domyślnego konta: <br/>
              <b>admin@voltage.com</b> / <b>admin123</b>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
