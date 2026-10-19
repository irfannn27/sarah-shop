import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Thrift Korean',
    description: 'Kemeja, Blouse & Sweater Premium',
    image: '/images/fashion.jpg',
    gradient: 'from-pink-200 via-rose-200 to-pink-300',
    delay: '0s',
    dot: {
      position: '-bottom-4 -left-2',
      size: 'w-3 h-3',
      color: 'bg-pink-400',
      type: 'animate-bounce',
      delay: '0s',
    },
  },
  {
    id: 2,
    title: 'Makanan',
    description: 'Kuliner Spesial & Camilan',
    image: '/images/makanan.jpg',
    gradient: 'from-rose-200 via-pink-200 to-purple-200',
    delay: '0.1s',
    dot: {
      position: '-top-2 -left-4',
      size: 'w-2 h-2',
      color: 'bg-rose-400',
      type: 'animate-pulse',
      delay: '0.7s',
    },
  },
  {
    id: 3,
    title: 'Makeup',
    description: 'Beauty & Cosmetics',
    image: '/images/makeup.jpg',
    gradient: 'from-purple-200 via-pink-200 to-rose-200',
    delay: '0.2s',
    dot: {
      position: '-bottom-2 -right-4',
      size: 'w-4 h-4',
      color: 'bg-purple-300',
      type: 'animate-bounce',
      delay: '0.6s',
    },
  },
  {
    id: 4,
    title: 'Banto Cake',
    description: 'Kue Cantik & Dessert',
    image: '/images/cake.jpg',
    gradient: 'from-rose-300 via-pink-200 to-purple-200',
    delay: '0.3s',
    dot: {
      position: '-bottom-4 -left-2',
      size: 'w-3 h-3',
      color: 'bg-pink-400',
      type: 'animate-bounce',
      delay: '1.5s',
    },
  },
  {
    id: 5,
    title: 'Percetakan',
    description: 'Polaroid, Poto Kayu & Photostrip',
    image: '/images/perpotoan.jpg',
    gradient: 'from-purple-200 via-rose-200 to-pink-200',
    delay: '0.4s',
    dot: {
      position: '-top-2 -left-4',
      size: 'w-2 h-2',
      color: 'bg-rose-400',
      type: 'animate-pulse',
      delay: '2.8s',
    },
  },
  {
    id: 6,
    title: 'Buket Bunga',
    description: 'Fresh & Artificial Flowers',
    image: '/images/bunga.jpg',
    gradient: 'from-pink-200 via-purple-200 to-rose-200',
    delay: '0.5s',
    dot: {
      position: '-bottom-2 -right-4',
      size: 'w-4 h-4',
      color: 'bg-purple-300',
      type: 'animate-bounce',
      delay: '1.5s',
    },
  },
];

export default function Categories() {
  const handleCategoryClick = (categoryName) => {
    const message = encodeURIComponent(`Halo SarahShop, saya mau tanya/order tentang kategori ${categoryName} ✨`);
    window.open(`https://wa.me/6289526764087?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 min-h-screen" id="category">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl font-bold font-playfair text-slate-800 mb-4">
            Our Categories
          </h2>
          <p className="text-gray-600 text-lg font-quicksand max-w-2xl mx-auto">
            Temukan koleksi terbaik kami dalam berbagai kategori pilihan yang telah dikurasi khusus untuk Anda
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.title)}
              className="group relative cursor-pointer transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: cat.delay }}
            >
              {/* Card Ambient Glow */}
              <div
                className={`absolute -inset-4 bg-gradient-to-br ${cat.gradient} rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Card Body */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-sm group-hover:shadow-xl transition-all duration-500 overflow-hidden border border-pink-100">
                {/* Image Container */}
                <div className="relative h-58 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-10`}></div>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 relative font-quicksand">
                  {/* Expanding accent bar */}
                  <div
                    className={`w-12 h-1 bg-gradient-to-r ${cat.gradient} rounded-full mb-3 transform group-hover:w-16 transition-all duration-300`}
                  ></div>
                  <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-rose-400/0 to-purple-400/0 group-hover:from-pink-400/5 group-hover:via-rose-400/5 group-hover:to-purple-400/5 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </div>

              {/* Floating Decorative Dot */}
              {cat.dot && (
                <div
                  className={`absolute ${cat.dot.position} ${cat.dot.size} ${cat.dot.color} rounded-full opacity-40 ${cat.dot.type}`}
                  style={{ animationDelay: cat.dot.delay }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
