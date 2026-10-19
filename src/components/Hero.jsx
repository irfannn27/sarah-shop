import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-[#f9f9f9] py-16 md:py-24 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text Column */}
          <div className="text-center md:text-left">
            <p className="font-quicksand text-sm font-semibold text-primary uppercase leading-relaxed tracking-wider mb-2">
              New Collection
            </p>
            <h1 className="text-5xl font-playfair md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Pretty Things Made Just for You
            </h1>
            <p className="text-sm font-quicksand md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
              From Korean thriftwear, sweet treats, to polaroid prints and flower bouquets – SarahShop is your one-stop shop for all things pretty and unique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollTo('#category')}
                className="bg-primary font-quicksand text-white px-8 py-3 rounded-full hover:bg-pink-500 transition-all shadow-md hover:shadow-pink-200 flex items-center text-sm justify-center space-x-2 font-medium cursor-pointer"
              >
                <span>Discover Collection</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
              <button
                onClick={() => scrollTo('#about')}
                className="border border-primary font-quicksand text-primary px-8 py-3 rounded-full hover:bg-pink-50 transition-colors font-medium text-sm cursor-pointer"
              >
                About Us
              </button>
            </div>
          </div>

          {/* Right Hero Visual Column */}
          <div className="flex justify-center">
            <div className="flex justify-center py-8 px-8">
              <div className="relative group">
                {/* Background glow discs */}
                <div className="w-96 h-96 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-full opacity-30 absolute -top-6 -left-6 blur-sm"></div>
                <div className="w-88 h-88 bg-gradient-to-tr from-pink-300 to-rose-300 rounded-full opacity-25 absolute -top-3 -left-3 animate-pulse"></div>

                {/* Floating animated bouncing dots */}
                <div
                  className="absolute -top-8 -right-8 w-6 h-6 bg-rose-300 rounded-full opacity-60 animate-bounce"
                  style={{ animationDelay: '0s' }}
                ></div>
                <div
                  className="absolute -bottom-6 -left-6 w-4 h-4 bg-pink-400 rounded-full opacity-50 animate-bounce"
                  style={{ animationDelay: '1s' }}
                ></div>
                <div
                  className="absolute top-4 -right-12 w-3 h-3 bg-purple-300 rounded-full opacity-70 animate-bounce"
                  style={{ animationDelay: '2s' }}
                ></div>

                {/* Main Image Avatar Card */}
                <div className="relative overflow-hidden rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-pink-50 to-rose-50 transform group-hover:scale-105 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-100/20 to-rose-200/30 rounded-full"></div>
                  <img
                    src="/images/hero.jpg"
                    alt="Sarah Shop Hero"
                    className="w-80 h-80 object-cover rounded-full relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-200/10 via-transparent to-pink-100/10 rounded-full z-20"></div>
                </div>

                {/* Spinning thin decorative rings */}
                <div
                  className="absolute inset-0 border-2 border-pink-200 rounded-full scale-110 opacity-40 animate-spin"
                  style={{ animationDuration: '20s' }}
                ></div>
                <div
                  className="absolute inset-0 border border-rose-300 rounded-full scale-125 opacity-20 animate-spin"
                  style={{ animationDuration: '30s', animationDirection: 'reverse' }}
                ></div>

                {/* Floating sparkles */}
                <div className="absolute top-8 left-12 text-pink-400 opacity-60 animate-pulse text-lg select-none">
                  ✨
                </div>
                <div
                  className="absolute bottom-12 right-8 text-rose-400 opacity-50 animate-pulse text-lg select-none"
                  style={{ animationDelay: '1.5s' }}
                >
                  💫
                </div>
                <div
                  className="absolute top-16 right-16 text-purple-400 opacity-40 animate-pulse text-lg select-none"
                  style={{ animationDelay: '3s' }}
                >
                  ⭐
                </div>

                {/* Hover ambient blur */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400/0 via-rose-400/0 to-purple-400/0 group-hover:from-pink-400/10 group-hover:via-rose-400/10 group-hover:to-purple-400/10 transition-all duration-500 scale-150 blur-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
