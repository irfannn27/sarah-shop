import React from 'react';

export default function CTA() {
  return (
    <section className="py-16 font-quicksand bg-primary">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
          Siap Belanja Produk Pilihan?
        </h2>
        <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
          Sarahshop hadir untuk memenuhi kebutuhanmu dengan produk terbaik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6289526764087"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-3 rounded-full hover:bg-pink-50 hover:shadow-lg transition-all font-medium text-base inline-block"
          >
            Order Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
