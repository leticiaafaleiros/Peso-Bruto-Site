'use client'

import Image from 'next/image'
import { BLUR_DATA_URLS } from '@/lib/constants/images'

export function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative h-screen flex items-center justify-center bg-black text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/guincho-24h.jpeg"
          alt="Guincho 24 horas em ação"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover"
          priority
          quality={75}
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URLS.HERO_BG}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Peso Bruto - Auto Socorro 24H
          </h1>
          <p className="text-xl md:text-3xl mb-12 max-w-3xl">
            Assistência rápida e profissional para seu veículo em qualquer hora do dia ou da noite
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:+5516993896054"
              className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              Ligar Agora
            </a>
            <a
              href="#servicos"
              className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
} 