import Link from "next/link";

export default function Home() {
  return (
<>
    <div className="w-full bg-linear-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-950 to-cyan-500 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Services professionnels de nettoyage à sec
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 mb-8 leading-relaxed">
            Profitez de soins de qualité exceptionnelle pour vos vêtements les plus délicats. Nous offrons des résultats impeccables avec une attention aux détails qui fait la différence. 
            <p className="font-extrabold">RAMASSAGES ET LIVRASONS GRATUIT</p>
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-300 mb-6"
          >
            Découvrir nos services
          </Link>
          <p className="text-blue-100 text-sm">Rapide • Fiable • Professionnel</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Qualité supérieure</h3>
              <p className="text-slate-600">
                Les techniques avancées et les produits premium garantissent que vos vêtements paraissent frais et se sentent parfaits.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6 rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Traitement rapide</h3>
              <p className="text-slate-600">
                Service rapide sans compromettre la qualité. Récupérez vos vêtements plus tôt que prévu.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6 rounded-xl bg-linear-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Entretien des vêtements</h3>
              <p className="text-slate-600">
                Soins spécialisés pour les tissus délicats et les matériaux uniques. Vos articles précieux sont en sécurité avec nous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Prêt à expérimenter la différence ?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Consultez notre gamme complète de services et trouvez exactement ce dont vous avez besoin.
          </p>
          <Link
            href="/services"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300"
          >
            Voir tous les services
          </Link>
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
</>

)
}

      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
              {/* Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div> */}

