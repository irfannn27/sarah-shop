import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { page: '#home', label: 'Home' },
    { page: '#category', label: 'Category' },
    { page: '#testimonials', label: 'Testimonials' },
    { page: '#faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.querySelector(link.page);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.page);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setIsOpen(false);
    const element = document.querySelector(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-18">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('#home')}
          >
            <img 
              src="/images/logo.jpg" 
              alt="logo" 
              className="w-22 h-auto object-contain max-h-12"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.page;
              return (
                <div key={index} className="relative group">
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className={`font-normal font-quicksand text-sm tracking-wider transition-colors cursor-pointer ${
                      isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/6289526764087"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex border border-primary text-primary px-8 py-2 rounded-full hover:bg-pink-50 transition-colors font-medium text-sm font-quicksand items-center justify-center"
            >
              Order Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-pink-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item, index) => {
                const isActive = activeSection === item.page;
                return (
                  <div key={index}>
                    <button
                      onClick={() => handleNavClick(item.page)}
                      className={`text-left font-quicksand text-sm transition-colors cursor-pointer w-full py-1 ${
                        isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
              <a
                href="https://wa.me/6289526764087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex border border-primary text-primary px-8 py-2 rounded-full hover:bg-pink-50 justify-center transition-colors font-medium text-sm font-quicksand"
              >
                Order Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
