'use client';

import Link from "next/link";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    items: "",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Nettoyage quotidien",
    "Vêtements de cérémonie",
    "Vêtements délicats",
    "Retouches et réparations",
    "Mariage et événements spéciaux",
    "Nettoyage en gros et commercial"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `Bonjour CleanPress! 👋

Je souhaiterais réserver un service de nettoyage.

*Informations personnelles:*
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}

*Détails de la réservation:*
Service: ${formData.service}
Date souhaitée: ${formData.date}
Heure souhaitée: ${formData.time}
Articles à nettoyer: ${formData.items}

*Commentaires additionnels:*
${formData.notes || "Aucun commentaire"}

Merci!`;

    // WhatsApp Business number (update with your actual number)
    const whatsappNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;  // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappLink, "_blank");

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      items: "",
      notes: ""
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full bg-linear-to-b text-black from-slate-50 to-white min-h-screen">
      {/* Header Section */}
      <section className="bg-linear-to-r from-blue-600 to-cyan-500 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-block mb-6 text-blue-100 hover:text-white transition-colors duration-300 font-semibold"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Réservez votre service
          </h1>
          <p className="text-lg text-blue-50">
            Remplissez le formulaire ci-dessous et nous vous contacterons via WhatsApp pour confirmer votre réservation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10">
            
            {/* Success Message */}
            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
                <p className="font-semibold">✓ Demande envoyée avec succès!</p>
                <p className="text-sm mt-1">Vous serez redirigé vers WhatsApp. Un agent vous contactera bientôt.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean@example.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Téléphone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                    Service souhaité *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white"
                  >
                    <option value="">-- Sélectionnez un service --</option>
                    {services.map((svc, idx) => (
                      <option key={idx} value={svc}>{svc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-slate-900 mb-2">
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-slate-900 mb-2">
                    Heure souhaitée *
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
              </div>

              {/* Items */}
              <div>
                <label htmlFor="items" className="block text-sm font-semibold text-slate-900 mb-2">
                  Articles à nettoyer *
                </label>
                <textarea
                  id="items"
                  name="items"
                  value={formData.items}
                  onChange={handleChange}
                  placeholder="Ex: 2 costumes, 3 chemises, 1 robe..."
                  required
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-slate-900 mb-2">
                  Commentaires additionnels
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Demandes spéciales, allergies de produits, etc..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                ></textarea>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
                <p className="font-semibold mb-2">📱 Comment ça fonctionne:</p>
                <ul className="space-y-1 ml-2">
                  <li>• Remplissez le formulaire avec vos informations</li>
                  <li>• Cliquez sur "Réserver via WhatsApp"</li>
                  <li>• Vous serez dirigé vers WhatsApp pour confirmer</li>
                  <li>• Notre équipe vous répondra rapidement!</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>📱 Réserver via WhatsApp</span>
              </button>

              <p className="text-center text-sm text-slate-600">
                Les champs marqués avec * sont obligatoires
              </p>
            </form>
          </div>

          {/* Info Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold text-slate-900 mb-2">Réservation rapide</h3>
              <p className="text-slate-600 text-sm">Réservez en quelques secondes directement via WhatsApp</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="font-semibold text-slate-900 mb-2">Confirmation instantanée</h3>
              <p className="text-slate-600 text-sm">Recevez une confirmation et discutez directement avec notre équipe</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-semibold text-slate-900 mb-2">Communication sécurisée</h3>
              <p className="text-slate-600 text-sm">Toutes vos données sont privées et sécurisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; FYJL CORP 2026 CleanPress. Tous droits réservés.</p>
          <p className="text-sm mt-2">Services professionnels de nettoyage à sec</p>
        </div>
      </footer>
    </div>
  );
}
