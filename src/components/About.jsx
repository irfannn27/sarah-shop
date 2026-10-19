import React from 'react';
import { Gift, HandHeart, MessageCircle, Package } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      id: 1,
      icon: Gift,
      title: 'Bonus Setiap Pembelian',
      desc: 'Selalu ada kejutan kecil di dalam setiap paket.',
    },
    {
      id: 2,
      icon: HandHeart,
      title: 'Kurasi Produk yang Unik',
      desc: 'Produk kami dipilih dengan cermat dan penuh perhatian.',
    },
    {
      id: 3,
      icon: MessageCircle,
      title: 'Komunikasi Ramah & Responsif',
      desc: 'Pelayanan pelanggan yang cepat, sopan, dan personal.',
    },
    {
      id: 4,
      icon: Package,
      title: 'Pengemasan Estetik',
      desc: 'Dikemas rapi, aman, dan cantik—siap untuk difoto 📸',
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden"
      id="about"
    >
      {/* Decorative SVG flower and vector ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-rose-300">
            <circle cx="50" cy="30" r="12" fill="currentColor"></circle>
            <circle cx="30" cy="50" r="12" fill="currentColor"></circle>
            <circle cx="70" cy="50" r="12" fill="currentColor"></circle>
            <circle cx="40" cy="70" r="12" fill="currentColor"></circle>
            <circle cx="60" cy="70" r="12" fill="currentColor"></circle>
            <circle cx="50" cy="50" r="8" fill="currentColor" className="text-orange-300"></circle>
          </svg>
        </div>
        <div className="absolute bottom-32 left-16 w-28 h-28 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-orange-300">
            <circle cx="50" cy="30" r="11" fill="currentColor"></circle>
            <circle cx="30" cy="50" r="11" fill="currentColor"></circle>
            <circle cx="70" cy="50" r="11" fill="currentColor"></circle>
            <circle cx="40" cy="70" r="11" fill="currentColor"></circle>
            <circle cx="60" cy="70" r="11" fill="currentColor"></circle>
            <circle cx="50" cy="50" r="7" fill="currentColor" className="text-pink-400"></circle>
          </svg>
        </div>
        <div className="absolute bottom-20 right-32 w-36 h-16 opacity-15">
          <svg viewBox="0 0 180 80" className="w-full h-full text-green-300">
            <path
              d="M10 40 Q 25 25, 40 40 Q 55 55, 70 40 Q 85 25, 100 40 Q 115 55, 130 40 Q 145 25, 160 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            ></path>
            <ellipse cx="30" cy="28" rx="6" ry="12" fill="currentColor" transform="rotate(-25 30 28)"></ellipse>
            <ellipse cx="60" cy="52" rx="6" ry="12" fill="currentColor" transform="rotate(25 60 52)"></ellipse>
            <ellipse cx="90" cy="28" rx="6" ry="12" fill="currentColor" transform="rotate(-25 90 28)"></ellipse>
            <ellipse cx="120" cy="52" rx="6" ry="12" fill="currentColor" transform="rotate(25 120 52)"></ellipse>
            <ellipse cx="150" cy="28" rx="6" ry="12" fill="currentColor" transform="rotate(-25 150 28)"></ellipse>
          </svg>
        </div>
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-pink-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-18 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center min-h-[70vh]">
          {/* Rotated Product Image Frame */}
          <div className="relative flex justify-center">
            <div className="relative z-10">
              <div className="bg-white/80 w-[320px] sm:w-[440px] md:w-[480px] h-[320px] sm:h-[440px] md:h-[480px] backdrop-blur-sm rounded-3xl p-6 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                <div className="w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src="/images/makeup.jpg"
                    alt="Product Image"
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description & Value List */}
          <div className="space-y-8 font-quicksand max-w-xl">
            <div>
              <h2 className="text-2xl lg:text-4xl font-playfair font-bold text-gray-800 leading-tight mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Kami di sini untuk kamu yang suka hal-hal cantik dan spesial. Kami bikin semua produk dengan sepenuh hati, dari fashion sampai bento cake, biar bisa bikin harimu lebih cerah.
              </p>

              {/* Grid 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-pink-500 mt-1 shrink-0" />
                      <div>
                        <h4 className="font-medium text-pink-500 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
