import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-pink-50 to-rose-100 font-quicksand border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Socials */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-bold font-playfair text-pink-800">SarahShop</h3>
            </div>
            <p className="text-pink-700 text-sm leading-relaxed">
              Toko fashion wanita terpercaya dengan koleksi terbaru dan kualitas terbaik. Temukan gaya yang sempurna untuk setiap momen spesial Anda.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/sarahshop.id_bdg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-500 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="mailto:sarahnahdi61@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-500 transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/6289526764087"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-500 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('#home')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#category')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  Produk
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#category')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  Kategori
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#about')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  Tentang Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-800">Layanan Pelanggan</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  Cara Pemesanan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#testimonials')}
                  className="text-pink-700 hover:text-pink-900 text-sm transition-colors cursor-pointer text-left"
                >
                  Testimoni
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-800">Hubungi Kami</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-600 shrink-0" />
                <a
                  href="https://wa.me/6289526764087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 hover:text-pink-900 text-sm"
                >
                  +62 89526764087
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-600 shrink-0" />
                <a
                  href="mailto:sarahnahdi61@gmail.com"
                  className="text-pink-700 hover:text-pink-900 text-sm"
                >
                  sarahnahdi61@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-pink-600 mt-0.5 shrink-0" />
                <span className="text-pink-700 text-sm">
                  Jl. Fashion No. 123
                  <br />
                  Bandung, Jawa Barat 40123
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-pink-200 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
          <p className="text-pink-700 text-sm">
            © {new Date().getFullYear()} Sarah Shop. All rights reserved.
          </p>
          <p className="text-pink-600/70 text-xs">
            Made with 💖 for pretty things
          </p>
        </div>
      </div>
    </footer>
  );
}
