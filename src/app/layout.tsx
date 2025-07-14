import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { icons } from "lucide-react";

export const metadata = {
  title: "Hati untuk Tuhan",
  description: "Situs rohani untuk mengenal Yesus lebih dalam",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "rohani, Kristen, Yesus, iman, doa, renungan",
  authors: [{ name: "Josua Sianturi", url: "https://github.com/josuasianturi" }],
  creator: "Josua Sianturi",
  openGraph: {
    title: "Hati untuk Tuhan",
    description: "Situs rohani untuk mengenal Yesus lebih dalam",
    url: "https://hatiuntuktuhan.com",
    siteName: "Hati untuk Tuhan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white text-gray-900">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
