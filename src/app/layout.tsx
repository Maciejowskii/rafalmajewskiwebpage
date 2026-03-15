import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "VOLTAGE & Rav Elektro | Kompleksowe Instalacje Elektryczne",
  description:
    "Profesjonalne instalacje elektryczne i elektroenergetyczne. Smart Home, instalacje przemysłowe, pomiary. Polska i Niemcy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
