import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    category: 'Pemesanan',
    question: 'Bagaimana cara memesan produk di SarahShop?',
    answer:
      'Semua pemesanan dilakukan via WhatsApp. Cukup kirim foto atau nama produk yang kamu mau, nanti owner langsung bantu proses dari awal sampai selesai.',
  },
  {
    id: 2,
    category: 'Pembayaran',
    question: 'Pembayarannya bisa lewat apa aja?',
    answer:
      'Pembayaran bisa dilakukan melalui transfer bank (BCA/BRI), e-wallet (DANA, OVO, ShopeePay), atau bayar di tempat (COD) untuk area tertentu.',
  },
  {
    id: 3,
    category: 'Sistem Pre-Order',
    question: 'Apakah produknya ready semua?',
    answer:
      'Sebagian besar produk sistemnya pre-order (PO), jadi pengiriman dilakukan sekitar 3–7 hari setelah pembayaran. Kalau produk ready, akan langsung dikirim.',
  },
  {
    id: 4,
    category: 'Pengiriman',
    question: 'Pengiriman dilakukan lewat mana?',
    answer:
      'Pengiriman bisa langsung oleh owner (janjian atau diantar ke rumah), atau via kurir (JNE, J&T, SiCepat, dll). Ongkos kirim ditanggung pembeli ya.',
  },
  {
    id: 5,
    category: 'Ongkir',
    question: 'Ongkir ditanggung siapa?',
    answer:
      'Ongkir ditanggung pembeli. Tapi kadang ada promo free ongkir juga loh, bisa cek di Instagram @sarahshop.id atau tanya langsung ke admin WhatsApp!',
  },
  {
    id: 6,
    category: 'Return & Tukar',
    question: 'Kalau barang rusak atau salah kirim gimana?',
    answer:
      'Bisa tukar atau return maksimal 2 hari setelah barang diterima. Syaratnya: barang belum dipakai, belum dicuci, dan ada video unboxing sebagai bukti.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-white font-quicksand" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-gray-900 mb-4">
            FAQ
          </h2>
          <p className="text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang Sarah Shop
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#f9f9f9] rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-pink-50 transition-colors focus:outline-none focus:bg-pink-50 cursor-pointer"
                >
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-gray-700 leading-relaxed border-t border-pink-50/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
