import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../client/src/lib/queryClient";
import { TooltipProvider } from "../client/src/components/ui/tooltip";
import { Toaster } from "../client/src/components/ui/toaster";
import type { AppProps } from "next/app";
import "../client/src/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hati untuk Tuhan - Komunitas Digital Rohani</title>
        <meta name="description" content="Hati untuk Tuhan adalah komunitas digital yang membagikan inspirasi, ayat harian, dan permohonan doa untuk menguatkan iman. Bergabunglah dan temukan kasih Yesus Kristus!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://hatiuntuktuhan.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="Hati untuk Tuhan - Komunitas Digital Rohani" />
        <meta property="og:description" content="Komunitas digital yang membagikan inspirasi, ayat harian, dan permohonan doa untuk menguatkan iman." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hatiuntuktuhan.com/" />
        <meta property="og:image" content="/logo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hati untuk Tuhan - Komunitas Digital Rohani" />
        <meta name="twitter:description" content="Komunitas digital yang membagikan inspirasi, ayat harian, dan permohonan doa untuk menguatkan iman." />
        <meta name="twitter:image" content="/logo.png" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Hati untuk Tuhan",
          "url": "https://hatiuntuktuhan.com/",
          "logo": "https://hatiuntuktuhan.com/logo.png",
          "sameAs": [
            "https://www.tiktok.com/@hatiuntuktuhan",
            "https://www.instagram.com/hatiuntuktuhan/",
            "https://whatsapp.com/channel/0029Vb5nv4b89indhGAwaY0s",
            "https://open.spotify.com/playlist/3bZfjBuLVHw0aC7UPAsUyg?si=xX-fFWyOSxqnCF7Kyx2sIQ"
          ]
        }) }} />
      </Head>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Component {...pageProps} />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
} 