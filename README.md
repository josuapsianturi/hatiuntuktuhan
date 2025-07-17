# Hati untuk Tuhan

Hati untuk Tuhan adalah aplikasi komunitas digital rohani berbasis Next.js yang membagikan inspirasi, ayat harian, permohonan doa, dan konten multimedia untuk menguatkan iman. Aplikasi ini terintegrasi dengan Notion untuk penyimpanan permohonan doa dan menampilkan konten sosial media (TikTok, Instagram, Spotify, WhatsApp Channel) secara interaktif.

## ✨ Fitur Utama

- **Ayat Harian:** Menampilkan ayat Alkitab harian secara dinamis.
- **Permohonan Doa:** Formulir permohonan doa yang terintegrasi dengan Notion.
- **Konten Terbaru:** Preview TikTok & Instagram, ajakan follow, dan playlist Spotify.
- **Channel WhatsApp:** Akses langsung ke channel komunitas.
- **SEO Friendly:** Sudah dioptimasi untuk Google, Bing, dan AI search engine.
- **Responsive & Modern UI:** Menggunakan Tailwind CSS dan komponen custom.

## 🚀 Teknologi

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [Notion API](https://developers.notion.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🛠️ Instalasi & Pengembangan Lokal

1. **Clone repository:**

   ```bash
   git clone https://github.com/username/hatiuntuktuhan.git
   cd hatiuntuktuhan
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Buat file `.env.local` di root project:**

   ```env
   NOTION_INTEGRATION_SECRET=your_notion_secret_here
   NOTION_PAGE_URL=your_notion_page_url_here
   ```

   - Dapatkan API key dan page URL dari [Notion Integrations](https://www.notion.so/my-integrations)
   - Jangan commit file `.env.local` ke repository!

4. **Jalankan aplikasi secara lokal:**
   ```bash
   npm run dev
   ```
   Akses di [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy ke Vercel

1. **Push project ke GitHub.**
2. **Login ke [Vercel](https://vercel.com/), import project dari GitHub.**
3. **Set environment variable di dashboard Vercel:**
   - `NOTION_INTEGRATION_SECRET`
   - `NOTION_PAGE_URL`
4. **Deploy!**

## 📁 Struktur Folder Penting

- `pages/` — Halaman utama Next.js (index, api, dsb)
- `client/src/components/` — Komponen UI (hero, footer, form, dsb)
- `server/` — Integrasi backend (Notion, storage, dsb)
- `shared/` — Schema dan tipe data
- `public/` — Asset publik (logo, favicon, robots.txt, sitemap.xml)

## 📝 Lisensi

Aplikasi ini dikembangkan untuk komunitas rohani dan open source. Silakan gunakan, modifikasi, dan kontribusi!

---

**Dibuat dengan kasih untuk kemuliaan Tuhan Yesus Kristus.**
