import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
              Polityka Prywatności
            </h1>
            <div className="mt-6 w-24 h-1.5 bg-red-600 mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg prose-red max-w-none text-gray-600 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informacje ogólne</h2>
              <p>
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu internetowego Voltage & Rav Elektro.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Administrator Danych</h2>
              <p>
                Administratorem danych osobowych zawartych w serwisie są:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Voltage Bartosz Niewiński</strong>, ul. Władysława IV 62/33, 75-347 Koszalin, NIP: 6692548319</li>
                <li><strong>Rav Elektro Rafał Majewski</strong>, ul. Wańkowicza 23E/2, 75-445 Koszalin, NIP: 4990694971</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cele i podstawy przetwarzania</h2>
              <p>
                Dane osobowe przetwarzane są:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>na podstawie zgody wyrażonej przez Użytkownika (np. w formularzu kontaktowym),</li>
                <li>w celach niezbędnych do wykonania umowy, której stroną jest Użytkownik,</li>
                <li>w celu marketingu bezpośredniego własnych produktów i usług.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Prawa Użytkownika</h2>
              <p>
                Użytkownikowi przysługuje prawo do:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>wglądu do swoich danych osobowych,</li>
                <li>ich sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                <li>przenoszenia danych,</li>
                <li>cofnięcia zgody w dowolnym momencie.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kontakt</h2>
              <p>
                W sprawach związanych z przetwarzaniem danych można kontaktować się pod adresami e-mail: 
                <a href="mailto:bartoszniewinski@voltage-ravelektro.pl" className="text-red-600 font-bold hover:underline"> bartoszniewinski@voltage-ravelektro.pl</a> oraz 
                <a href="mailto:rafalmajewski@voltage-ravelektro.pl" className="text-red-600 font-bold hover:underline"> rafalmajewski@voltage-ravelektro.pl</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
