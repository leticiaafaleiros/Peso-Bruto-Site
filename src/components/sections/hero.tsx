'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/guincho-24h.jpeg"
          alt="Guincho 24 horas em ação"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Peso Bruto - Guincho 24 Horas
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Assistência rápida e profissional para seu veículo em qualquer hora do dia ou da noite
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+5584999999999"
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              Ligar Agora
            </a>
            <a
              href="#servicos"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 