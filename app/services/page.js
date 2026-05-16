'use client';

import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Nettoyage quotidien",
      description: "Nettoyage professionnel de vos vêtements de tous les jours. Traitement rapide avec des résultats impeccables.",
      price: "$2-5",
      icon: "👕",
      features: ["Chemises et blouses", "Pantalons et trousers", "Jupes et robes", "Soin standard"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Vêtements de cérémonie",
      description: "Soins spécialisés pour les costumes, smokings et tenues de cérémonie. Finition professionnelle incluse.",
      price: "$5-12",
      icon: "🎩",
      features: ["Costumes et vestes", "Smokings", "Robes de cérémonie", "Pressage premium"],
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Vêtements délicats",
      description: "Manipulation experte de la soie, laine et autres matériaux délicats avec le plus grand soin.",
      price: "$4-8",
      icon: "✨",
      features: ["Vêtements en soie", "Articles en laine", "Soin du cachemire", "Lavage à la main disponible"],
      color: "from-rose-500 to-orange-400"
    },
    {
      id: 4,
      title: "Retouches et réparations",
      description: "Services de retouches et réparations de vêtements professionnels pour prolonger la durée de vie de vos vêtements.",
      price: "$10-50",
      icon: "🧵",
      features: ["Ourlets", "Réparation de coutures", "Remplacement de fermeture éclair", "Retouches personnalisées"],
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 5,
      title: "Mariage et événements spéciaux",
      description: "Soins impeccables pour les robes de mariée, robes de demoiselle d'honneur et tenues d'occasion spéciale.",
      price: "$10-25",
      icon: "💍",
      features: ["Robes de mariée", "Robes et tenues de soirée", "Service de préservation", "Vapeur et pressage"],
      color: "from-indigo-500 to-blue-400"
    },
    {
      id: 6,
      title: "Nettoyage en gros et commercial",
      description: "Services de nettoyage en grand volume pour les entreprises, hôtels et restaurants avec planification flexible.",
      price: "Devis personnalisé",
      icon: "📦",
      features: ["Volumes élevés", "Planification flexible", "Tarifs commerciaux", "Rabais en gros"],
      color: "from-teal-500 to-cyan-400"
    }
  ];

  return (
    <div className="w-full bg-linear-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-linear-to-r from-blue-600 to-cyan-500 px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block mb-8 text-blue-100 hover:text-white transition-colors duration-300 font-semibold"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Nos services
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto">
            Découvrez notre gamme complète de services professionnels de nettoyage à sec adaptés à tous vos besoins d'entretien des vêtements.
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
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-90`}></div>

                {/* Card Content */}
                <div className="relative z-10 p-8 text-white flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-5xl mb-4">{service.icon}</div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm opacity-95 mb-6 grow">
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
                      En savoir plus
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
            Comment ça fonctionne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Déposer", desc: "Apportez vos articles à notre emplacement commode" },
              { step: "2", title: "Inspection", desc: "Nous inspections et documentons chaque vêtement" },
              { step: "3", title: "Soins", desc: "Nettoyage professionnel avec soin expert" },
              { step: "4", title: "Retrait", desc: "Récupérez vos vêtements frais et impeccables" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Service de qualité abordable
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Nous offrons des prix compétitifs sans compromettre la qualité. Les rabais en gros et de fidélité sont disponibles sur demande.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Service express</h3>
              <p className="text-slate-600 text-sm">Traitement en 24 heures disponible (+20%)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Enlèvement gratuit</h3>
              <p className="text-slate-600 text-sm">Dans un rayon de 5 km pour les commandes de plus de 50 $</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-semibold text-slate-900 mb-2">Programme de fidélité</h3>
              <p className="text-slate-600 text-sm">10 % de rabais sur chaque 10e commande</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Contactez-nous dès aujourd'hui pour passer votre commande ou poser des questions sur les demandes spéciales.
          </p>
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300">
            Nous contacter
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; FYJL CORP 2026 CleanPress. Tous droits réservés.</p>
          <p className="text-sm mt-2">Services professionnels de nettoyage à sec</p>
        </div>
      </footer>
    </div>
  );
}
