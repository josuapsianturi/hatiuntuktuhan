import { useState, useEffect } from "react";
import Image from 'next/image';
import PrayerForm from '../client/src/components/prayer-form';
import Footer from '../client/src/components/footer';
import Navbar from '../client/src/components/navbar';

export default function Kesaksian() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 overflow-x-hidden">
      <Navbar />
      {/* Main Content */}
      <main className="pt-32 flex flex-col items-center">
        {/* Banner Image */}
        <div className="w-full max-w-3xl mb-8 rounded-lg">
          <Image
            src="/revival-silent-battle.png"
            alt="Banner Silent Battle - Perjalanan iman menghadapi serangan panik dan kanker, hingga perjumpaan dengan Tuhan Yesus."
            width={1200}
            height={1000}
            className=" object-contain w-full h-64 md:h-96"
            priority
          />
        </div>
        {/* Judul */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">Silent Battle</h1>
        <p className="text-center text-gray-600 mb-4">Kesaksian Pertobatan dan Pemulihan</p>
        <div className="w-24 mx-auto border-b-2 border-purple-200 mb-8" />
        {/* Cerita Pribadi */}
        <section className="max-w-2xl w-full mb-8 bg-white rounded-lg shadow p-8 md:p-10">
          <article className="prose prose-lg font-serif text-gray-800 mx-auto">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              Beberapa tahun lalu, aku didiagnosa kanker tulang oleh seorang sinshe. Aku takut memeriksakan diri ke dokter. Aku jalani pengobatan itu selama 8 bulan, menahan sakit luar biasa sambil tetap bekerja sebagai programmer demi biaya hidup dan obat. Di tengah itu semua, aku sempat berjanji pada Tuhan: "Kalau aku disembuhkan, aku akan melayani-Mu seumur hidupku."
            </p>
            <p>
              Sampai akhirnya aku memberanikan diri ke rumah sakit. Setelah pemeriksaan lengkap, dokter menyatakan bahwa aku bukan kanker tulang, tapi TBC tulang akut. Kondisiku sudah sangat parah — tulang belakangku patah-patah, dan aku harus segera dioperasi, dipasangi 8 pen di tulang spine, dan belajar berjalan lagi dari nol.
            </p>
            <p>
              Setelah proses pemulihan fisik, aku mengalami masa tergelap dalam hidupku: serangan panik, trauma masa kecil, insomnia, kecemasan ekstrem, bahkan pikiran untuk mengakhiri hidup. Aku jalani sesi demi sesi ke psikiater, sambil bertanya dalam hati: <span className="italic text-purple-700">"Tuhan, di mana Engkau?"</span>
            </p>
            <p>
              Ternyata, justru di titik terendah itulah aku mulai mengenal Yesus secara pribadi. Rasa ingin tahu itu membawa aku mendekat. Aku begitu penasaran tentang siapa Dia sebenarnya. Sampai suatu hari, aku percaya bahwa Tuhan menjawabku lewat sebuah mimpi — sebuah perjumpaan dengan kuasa-Nya.
            </p>
            <p>
              Di situ aku tahu: Tuhan mau memakai hidupku sebagai alat-Nya secara luar biasa dan dahsyat, melebihi apa yang pernah kupikirkan. Dan saat itulah aku mengalami pertobatan yang sejati.
            </p>
            <p>
              Kalau bukan karena semua proses itu, mungkin aku tidak akan pernah benar-benar mencari Tuhan.
            </p>
            <p>
              Kini aku bersyukur untuk semua yang pernah aku alami. Karena dari kehancuran, Tuhan membentuk panggilan. Dari air mata, Tuhan munculkan tujuan. Dan dari penderitaan, Tuhan bangkitkan pengharapan.
            </p>
            <p>
              Hari ini aku bersaksi, supaya kamu tahu: <span className="font-semibold text-purple-700">Yesus itu hidup. Dia nyata. Dan Dia tidak pernah meninggalkanmu.</span>
            </p>
            <p>
              Kalau kamu sedang dalam lembah kelam, <span className="font-semibold">jangan menyerah.</span> Dia belum selesai bekerja dalam hidupmu. Aku adalah buktinya.
            </p>
          </article>
        </section>
        {/* Ayat Alkitab */}
        <section className="max-w-2xl w-full mb-8">
          <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
            <p className="italic text-gray-800 mb-2">
              "Janganlah takut, sebab Aku menyertai engkau, janganlah bimbang, sebab Aku ini Allahmu; Aku akan meneguhkan, bahkan akan menolong engkau; Aku akan memegang engkau dengan tangan kanan-Ku yang membawa kemenangan."
            </p>
            <p className="text-right font-semibold text-blue-700">- Yesaya 41:10</p>
          </div>
        </section>
        {/* Ajakan Doa */}
        <section className="max-w-2xl w-full mb-6 text-center">
          <p className="text-md text-gray-700 mb-2">
            Jika kamu sedang berjuang dan membutuhkan dukungan doa, jangan ragu untuk mengirimkan permintaan doamu di bawah ini. Kami siap mendoakanmu.
          </p>
        </section>
        {/* Form Permintaan Doa */}
        <section className="max-w-2xl w-full mb-12">
          <PrayerForm />
        </section>
      </main>
      <Footer />
    </div >
  );
} 