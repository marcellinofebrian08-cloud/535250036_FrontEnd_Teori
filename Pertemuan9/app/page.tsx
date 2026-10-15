"use client";

import Image from "next/image";
import { useEffect } from "react";

const menu = [
  {
    nama: "Es Kopi Susu Aren",
    gambar: "/img/es kopi susu aren.jpeg",
    deskripsi:
      "Perpaduan espresso pekat dengan susu segar dan manisnya gula aren murni.",
  },
  {
    nama: "Americano",
    gambar: "/img/americano.jpeg",
    deskripsi:
      "Paduan espresso murni dan air panas, menghasilkan kopi hitam beraroma kuat dengan karakter rasa yang autentik dan ringan.",
  },
  {
    nama: "Vanilla Latte",
    gambar: "/img/vanilla latte.jpeg",
    deskripsi:
      "Espresso lembut dengan paduan sirup vanilla dan foam susu yang creamy.",
  },
  {
    nama: "Matcha Latte",
    gambar: "/img/matcha latte.jpeg",
    deskripsi:
      "Pilihan perpaduan bubuk matcha premium khas Jepang dengan susu yang creamy.",
  },
  {
    nama: "Butter Croissant",
    gambar: "/img/butter croissant.jpeg",
    deskripsi:
      "Pastry klasik dengan aroma dan rasa mentega. Pendamping yang sempurna untuk segelas kopimu.",
  },
  {
    nama: "Classic Saltbread",
    gambar: "/img/classic saltbread.jpeg",
    deskripsi:
      "Roti dengan tekstur renyah di luar dan lembut di dalam. Sensasi buttery berpadu dengan taburan sea salt yang gurih.",
  },
];

export default function Home() {
  // Pengganti blur/focus pada script.js
  useEffect(() => {
    const judulAsli = document.title;
    const onBlur = () => (document.title = "Jangan lupa ngopi!");
    const onFocus = () => (document.title = judulAsli);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="logo">
          <Image
            src="/img/Kopi_Nusantara_1.png"
            alt="Logo Kopi Nusantara"
            width={400}
            height={560}
          />
          <h1>KopiNusantara</h1>
        </div>
        <nav className="navbar">
          <ul className="atasan">
            <li>
              <a href="#hero">Beranda</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h2>Cita Rasa Autentik di Setiap Seduhan</h2>
          <p>
            Sajian kopi rumahan dengan cita rasa autentik dari biji kopi
            pilihan, diracik khusus untuk menemani harimu.
          </p>
          <a href="#menu" className="btn-primary">
            Lihat Menu
          </a>
        </div>
      </section>

      <main>
        <section id="menu" className="menu-section">
          <div className="section-title">
            <h2>Menu Andalan Kami</h2>
            <p>Pilihan favorit pelanggan setia Kopi Nusantara</p>
          </div>
          <div className="card-container">
            {menu.map((item) => (
              <article
                key={item.nama}
                className="card"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  alert(
                    `Pilihan yang bagus! Anda memilih ${item.nama}. Kunjungi kedai kami untuk memesan.`,
                  )
                }
              >
                <Image
                  src={item.gambar}
                  alt={item.nama}
                  width={800}
                  height={600}
                  className="responsive-img"
                />
                <div className="card-body">
                  <h3>{item.nama}</h3>
                  <p>{item.deskripsi}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <div id="reservasi"></div>

      <footer id="kontak" className="footer">
        <div className="footer-content">
          <p>&copy; 2026 Kopi Nusantara.</p>
          <p>Jl. Penikmat Kopi No. 88 | IG: @kopinusantara</p>
        </div>
      </footer>
    </>
  );
}
