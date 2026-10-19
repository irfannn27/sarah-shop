import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sari Melati',
    role: 'Mahasiswi',
    text: 'Pesan blouse di SarahShop, bahannya adem dan sesuai foto. Nggak nyangka harganya segitu tapi kualitasnya bagus. Owner-nya juga ramah banget!',
  },
  {
    id: 2,
    name: 'Indira Putri',
    role: 'Ibu Rumah Tangga',
    text: 'Aku pesan kue bantocake dan bunga untuk hadiah. Responnya cepat dan pengirimannya juga tepat waktu. Cocok buat yang butuh hadiah dadakan 🫶',
  },
  {
    id: 3,
    name: 'Alya Zahra',
    role: 'Freelancer',
    text: 'Suka banget sama packaging polaroid-nya! Lucu dan estetik, pas buat hias kamar. Udah dua kali order dan selalu puas 😍',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-playfair lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Customer Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 relative shadow-sm border border-pink-50">
            {/* Decorative colored dots */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-200 rounded-full"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-rose-200 rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-pink-300 rounded-full"></div>

            <div className="flex flex-col justify-center gap-8 items-center text-center">
              <div className="lg:col-span-2 max-w-2xl">
                <div className="relative">
                  <span className="text-6xl text-pink-200 font-serif absolute -top-8 -left-4 select-none leading-none">
                    &ldquo;
                  </span>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed px-6 italic transition-all duration-300">
                    {current.text}
                  </p>
                  <span className="text-6xl text-pink-200 font-serif absolute -bottom-10 -right-4 select-none leading-none">
                    &rdquo;
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center font-quicksand mt-8 mb-4">
                <div className="text-lg font-semibold text-gray-800">
                  {current.name}
                </div>
                <div className="text-sm text-gray-500">
                  {current.role}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous Testimonial"
                className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 text-pink-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex ? 'bg-pink-500 w-6' : 'bg-pink-200'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next Testimonial"
                className="w-12 h-12 bg-pink-100 hover:bg-pink-200 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 text-pink-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
