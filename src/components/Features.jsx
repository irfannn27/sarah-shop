import React from 'react';
import { Crown, HeartHandshake, Gem } from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Crown,
      title: 'Kualitas Premium',
      description: 'Produk pilihan terbaik dengan standar tinggi untuk kepuasan maksimal',
    },
    {
      id: 2,
      icon: HeartHandshake,
      title: 'Pelayanan Ramah',
      description: 'Customer service 24/7 yang responsif dan siap membantu kapan saja',
    },
    {
      id: 3,
      icon: Gem,
      title: 'Harga Terjangkau',
      description: 'Best value dengan harga bersahabat dan pembayaran fleksibel',
    },
  ];

  return (
    <div className="py-16 px-8 bg-[#f9f9f9]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center font-quicksand">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex-1 text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-200 transition-all duration-300">
                    <Icon className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
