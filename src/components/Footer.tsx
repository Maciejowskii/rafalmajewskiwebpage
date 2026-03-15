"use client";

import { Zap, Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/ellectrivoltage@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <footer id="kontakt" className="bg-zinc-900 border-t border-zinc-800">
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - CTA + Form */}
          <div>
            <span className="text-lime-400 font-semibold text-sm uppercase tracking-widest">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Napisz do nas
            </h2>
            <p className="text-zinc-400 mt-4 mb-8">
              Wypełnij formularz, a odezwiemy się w ciągu 24 godzin z
              indywidualną wyceną.
            </p>

            {submitted ? (
              <div className="bg-lime-400/10 border border-lime-400/20 rounded-xl p-8 text-center mt-4">
                <div className="w-16 h-16 bg-lime-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Formularz wysłany pomyślnie!</h3>
                <p className="text-zinc-400">
                  Dziękujemy za kontakt. Postaramy się odpowiedzieć na Twoje zapytanie w ciągu najbliższych 24 godzin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Adres email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Twoja wiadomość..."
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[200px] bg-lime-400 hover:bg-lime-300 text-zinc-900 font-semibold px-7 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-lime-400/25"
                >
                  <Send className="w-4 h-4" />
                  Wyślij wiadomość
                </button>
              </form>
            )}
          </div>

          {/* Right - Company Info */}
          <div className="space-y-10">
            {/* VOLTAGE */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-lime-400 rounded-md flex items-center justify-center">
                  <Zap className="w-4 h-4 text-zinc-900" />
                </div>
                <h3 className="text-white font-bold text-lg leading-tight">
                  Zakład Instalatorstwa Elektrycznego i Energetycznego<br/>,,VOLTAGE’’
                </h3>
              </div>
              <div className="text-zinc-400 text-sm space-y-2 mt-4">
                <p className="font-medium text-zinc-300">Bartosz Niewiński</p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-zinc-500" />
                  Ul. Władysława IV 62/33, 75-347 Koszalin<br/>woj. Zachodniopomorskie
                </p>
                <p>NIP: 6692548319</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a
                    href="tel:+48575398688"
                    className="hover:text-lime-400 transition-colors"
                  >
                    +48 575 398 688
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a
                    href="mailto:ellectricvoltage@voltage.com"
                    className="hover:text-lime-400 transition-colors"
                  >
                    ellectricvoltage@voltage.com
                  </a>
                </p>
                <p className="flex items-center gap-2 pl-6">
                  <span className="text-xs text-zinc-500">alt: </span>
                  <a
                    href="mailto:ellectricvoltage@gmail.com"
                    className="text-xs hover:text-lime-400 transition-colors"
                  >
                    ellectricvoltage@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Rav Elektro */}
            <div className="border-t border-zinc-800 pt-8">
              <h3 className="text-white font-bold text-lg mb-4 leading-tight">
                Zakład Instalatorstwa Elektrycznego<br/>,,Rav Elektro’’
              </h3>
              <div className="text-zinc-400 text-sm space-y-2">
                <p className="font-medium text-zinc-300">Rafał Majewski</p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0 text-zinc-500" />
                  Ul. Wańkowicza 23E/2, 75-445 Koszalin<br/>woj. Zachodniopomorskie
                </p>
                <p>NIP: 4990694971</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a
                    href="tel:+48513792945"
                    className="hover:text-lime-400 transition-colors"
                  >
                    +48 513 792 945
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a
                    href="mailto:rafalmajewski@voltage.com"
                    className="hover:text-lime-400 transition-colors"
                  >
                    rafalmajewski@voltage.com
                  </a>
                </p>
                <p className="flex items-center gap-2 pl-6">
                  <span className="text-xs text-zinc-500">alt: </span>
                  <a
                    href="mailto:rafal.majewski2@onet.pl"
                    className="text-xs hover:text-lime-400 transition-colors"
                  >
                    rafal.majewski2@onet.pl
                  </a>
                </p>
              </div>
            </div>

            {/* Coordinator */}
            <div className="border-t border-zinc-800 pt-8">
              <h3 className="text-white font-bold text-lg mb-4">
                Koordynator / Manager Robót Elektrycznych na terenie Niemiec
              </h3>
              <div className="text-zinc-400 text-sm space-y-2">
                <p className="font-medium text-zinc-300">Jakub Cosel</p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0 text-zinc-500" />
                  <a
                    href="mailto:jakubcosel@voltage.com"
                    className="hover:text-lime-400 transition-colors font-medium text-lime-400/80"
                  >
                    jakubcosel@voltage.com
                  </a>
                </p>
                <p className="text-xs text-zinc-500 mt-2 bg-zinc-800/50 inline-block px-3 py-1.5 rounded-lg border border-zinc-700/50">
                  Współpraca, logistyka, tłumaczenia. Biegła znajomość języka niemieckiego (obywatelstwo DE) i angielskiego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-xs">
            © {new Date().getFullYear()} VOLTAGE & Rav Elektro. Wszelkie prawa
            zastrzeżone.
          </p>
          <div className="flex gap-6 text-zinc-500 text-xs">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
