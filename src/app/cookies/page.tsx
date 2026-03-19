import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
              Polityka Cookies
            </h1>
            <div className="mt-6 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg prose-red max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Czym są pliki "cookies"?</h2>
              <p>
                Poprzez pliki "cookies" (tzw. "ciasteczka") należy rozumieć dane informatyczne, w szczególności pliki tekstowe, przechowywane w urządzeniach końcowych Użytkowników przeznaczone do korzystania ze stron internetowych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Do czego używamy plików "cookies"?</h2>
              <p>
                Pliki "cookies" używane są w celu:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>dostosowania zawartości stron internetowych do preferencji Użytkownika,</li>
                <li>optymalizacji korzystania ze stron internetowych,</li>
                <li>tworzenia anonimowych statystyk, które pomagają zrozumieć, w jaki sposób Użytkownik korzysta ze stron internetowych.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Rodzaje plików "cookies"</h2>
              <p>
                Stosowane są dwa rodzaje plików "cookies" – "sesyjne" oraz "stałe". Pierwsze z nich są plikami tymczasowymi, które pozostają na urządzeniu Użytkownika aż do wylogowania ze strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). "Stałe" pliki pozostają na urządzeniu Użytkownika przez czas określony w parametrach plików "cookies" albo do momentu ich ręcznego usunięcia przez Użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Zarządzanie plikami "cookies"</h2>
              <p>
                Standardowo oprogramowanie służące do przeglądania stron internetowych domyślnie dopuszcza umieszczanie plików "cookies" na urządzeniu końcowym. Użytkownik może samodzielnie i w każdym czasie zmienić ustawienia dotyczące plików "cookies", określając warunki ich przechowywania i uzyskiwania dostępu przez pliki "cookies" do urządzenia Użytkownika.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Wyłączenie "cookies"</h2>
              <p>
                Ograniczenie stosowania plików "cookies" może wpłynąć na niektóre funkcjonalności dostępne na stronie internetowej.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
