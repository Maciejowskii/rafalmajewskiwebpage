"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "@/app/admin/actions";
import { Lock, Mail, ArrowRight, Bolt } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-red-600/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm"
    >
      {pending ? "Logowanie..." : "Zaloguj się"}
      {!pending && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-2xl mb-6 shadow-lg rotate-3 hover:rotate-0 transition-transform duration-300">
          <Bolt className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">
          Admin Panel
        </h2>
        <p className="mt-3 text-gray-500 font-medium">
          Zaloguj się, aby zarządzać treściami
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-10 px-8 shadow-xl shadow-gray-200/50 rounded-3xl border border-gray-100">
          <form className="space-y-6" action={formAction}>
            {state?.error && (
              <div className="bg-red-50 border-2 border-red-100 text-red-600 text-sm font-bold p-4 rounded-xl text-center">
                {state.error}
              </div>
            )}
            
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 uppercase tracking-wider ml-1"
              >
                Adres e-mail
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-12 bg-gray-50 border-2 border-gray-100 rounded-xl py-3.5 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 transition-all sm:text-sm"
                  placeholder="twoj@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 uppercase tracking-wider ml-1"
              >
                Hasło
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-red-600 transition-colors" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-12 bg-gray-50 border-2 border-gray-100 rounded-xl py-3.5 text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-red-600 transition-all sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="pt-2">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
