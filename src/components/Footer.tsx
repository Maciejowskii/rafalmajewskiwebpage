import { Zap, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-gray-900 text-white py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          {/* Logo White */}
          <div className="flex flex-col items-center font-bold text-2xl leading-tight text-white mb-4">
            <span>Voltage</span>
            <span className="text-red-600 text-sm font-bold">&</span>
            <span>Rav Elektro</span>
          </div>
          <div className="w-12 h-1 bg-red-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-24">
          {/* VOLTAGE */}
          <div className="space-y-6">
            <h3 className="text-red-600 font-black text-xl tracking-wider uppercase">VOLTAGE</h3>
            <div className="space-y-4 text-gray-300">
              <p className="font-bold text-white text-lg">Bartosz Niewiński</p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                <span>Ul. Władysława IV 62/33,<br /> 75-347 Koszalin</span>
              </p>
              <p className="pl-8 text-sm text-gray-400">NIP: 6692548319</p>
              <a href="tel:+48575398688" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-bold">+48 575 398 688</span>
              </a>
              <a href="mailto:bartoszniewinski@voltage-ravelektro.pl" className="flex items-center gap-3 hover:text-red-600 transition-colors break-all">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm">bartoszniewinski@voltage-ravelektro.pl</span>
              </a>
            </div>
          </div>

          {/* Rav Elektro */}
          <div className="space-y-6">
            <h3 className="text-red-600 font-black text-xl tracking-wider uppercase">Rav Elektro</h3>
            <div className="space-y-4 text-gray-300">
              <p className="font-bold text-white text-lg">Rafał Majewski</p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-1" />
                <span>Ul. Wańkowicza 23E/2,<br /> 75-445 Koszalin</span>
              </p>
              <p className="pl-8 text-sm text-gray-400">NIP: 4990694971</p>
              <a href="tel:+48513792945" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-bold">+48 513 792 945</span>
              </a>
              <a href="mailto:rafalmajewski@voltage-ravelektro.pl" className="flex items-center gap-3 hover:text-red-600 transition-colors break-all">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm">rafalmajewski@voltage-ravelektro.pl</span>
              </a>
            </div>
          </div>

          {/* Niemcy */}
          <div className="space-y-6">
            <h3 className="text-red-600 font-black text-xl tracking-wider uppercase">Niemcy</h3>
            <div className="space-y-4 text-gray-300">
              <p className="font-bold text-white text-lg">Jakub Cosel</p>
              <p className="text-sm text-gray-400">Koordynator / Manager Robót</p>
              <a href="tel:+48789427196" className="flex items-center gap-3 hover:text-red-600 transition-colors">
                <Phone className="w-5 h-5 text-red-600 shrink-0" />
                <span className="font-bold">789 427 196</span>
              </a>
              <a href="mailto:jakubcosel@voltage-ravelektro.pl" className="flex items-center gap-3 hover:text-red-600 transition-colors break-all">
                <Mail className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-sm">jakubcosel@voltage-ravelektro.pl</span>
              </a>
              <div className="mt-8 pt-8 border-t border-gray-800">
                 <p className="text-xs text-gray-500 italic">
                   Realizujemy projekty na terenie całej Polski oraz Niemiec, zapewniając najwyższą jakość i zgodność z normami obu krajów.
                 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Voltage & Rav Elektro. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-6 font-bold uppercase tracking-tighter">
            <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka prywatności</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
