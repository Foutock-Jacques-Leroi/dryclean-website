"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réserver", href: "/booking" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const message = encodeURIComponent("Salut, je suis intéressé par vos services de nettoyage à sec. Pouvez-vous me donner plus d'informations ?");
  const phoneNumber = process.env.PHONE_NUMBER;
  const Whatsapp = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
            <span className="text-xl font-semibold">C</span>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">CleanPress</p>
            <p className="text-base font-semibold text-slate-900">Dry Cleaning</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-flex"
          >
            Réserver un enlèvement
          </Link>

          <button
            type="button"
            className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
            aria-label="Basculer le menu de navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full transform rounded-full bg-slate-900 transition duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 transform rounded-full bg-slate-900 transition duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-0.5 w-full transform rounded-full bg-slate-900 transition duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${menuOpen ? "max-h-[480px]" : "max-h-0"} overflow-hidden transition-[max-height] duration-500 ease-in-out border-t border-slate-200/80 bg-white/95`}> 
        <div className="space-y-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="block rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Faite une Réservation
          </Link>
        </div>
      </div>
    </header>
  );
}
