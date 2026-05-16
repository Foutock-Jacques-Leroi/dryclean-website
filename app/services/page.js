'use client';

import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Everyday Cleaning",
      description: "Professional cleaning for your regular everyday wear. Quick turnaround with impeccable results.",
      price: "$2-5",
      icon: "👕",
      features: ["Shirts & Blouses", "Pants & Trousers", "Skirts & Dresses", "Standard Care"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Formal Wear",
      description: "Specialized care for suits, tuxedos, and formal attire. Professional finishing included.",
      price: "$5-12",
      icon: "🎩",
      features: ["Suits & Jackets", "Tuxedos", "Formal Dresses", "Premium Press"],
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Delicate Garments",
      description: "Expert handling of silk, wool, and other delicate materials with utmost care.",
      price: "$4-8",
      icon: "✨",
      features: ["Silk Garments", "Wool Items", "Cashmere Care", "Hand Wash Available"],
      color: "from-rose-500 to-orange-400"
    },
    {
      id: 4,
      title: "Alterations & Repairs",
      description: "Professional tailoring and garment repair services to extend the life of your clothing.",
      price: "$10-50",
      icon: "🧵",
      features: ["Hemming", "Seam Repair", "Zipper Replacement", "Custom Tailoring"],
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 5,
      title: "Wedding & Special Events",
      description: "Pristine care for wedding dresses, bridesmaid gowns, and special occasion wear.",
      price: "$10-25",
      icon: "💍",
      features: ["Wedding Dresses", "Gowns & Evening Wear", "Preservation Service", "Steam & Press"],
      color: "from-indigo-500 to-blue-400"
    },
    {
      id: 6,
      title: "Bulk & Commercial",
      description: "Large volume cleaning services for businesses, hotels, and restaurants with flexible scheduling.",
      price: "Custom Quote",
      icon: "📦",
      features: ["High Volume", "Flexible Scheduling", "Commercial Rates", "Bulk Discounts"],
      color: "from-teal-500 to-cyan-400"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block mb-8 text-blue-100 hover:text-white transition-colors duration-300 font-semibold"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto">
            Explore our comprehensive range of professional dry cleaning services tailored to meet all your garment care needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  hoveredCard === service.id
                    ? 'shadow-2xl transform scale-105'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>

                {/* Card Content */}
                <div className="relative z-10 p-8 text-white flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm opacity-95 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-white border-opacity-30">
                    <span className="text-xl font-bold">{service.price}</span>
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Hover Accent Line */}
                {hoveredCard === service.id && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Drop Off", desc: "Bring your items to our convenient location" },
              { step: "2", title: "Inspection", desc: "We inspect and document each garment" },
              { step: "3", title: "Care", desc: "Professional cleaning with expert care" },
              { step: "4", title: "Pick Up", desc: "Get your pristine clothes back fresh" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Affordable Quality Service
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We offer competitive pricing without compromising on quality. Bulk orders and loyalty discounts available upon request.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Express Service</h3>
              <p className="text-slate-600 text-sm">24-hour turnaround available (+20%)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Free Pickup</h3>
              <p className="text-slate-600 text-sm">Within 5-mile radius for orders over $50</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Loyalty Program</h3>
              <p className="text-slate-600 text-sm">10% discount on every 10th order</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contact us today to place your order or ask about any special requests.
          </p>
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2026 CleanPress. All rights reserved.</p>
          <p className="text-sm mt-2">Professional Dry Cleaning Services</p>
        </div>
      </footer>
    </div>
  );
}
