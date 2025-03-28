'use client'

import Image from 'next/image'

const servicos = [
  {
    icon: '/images/ico17.png',
    title: 'GUINCHO 24 HORAS',
    alt: 'Ícone de guincho'
  },
  {
    icon: '/images/ico19.png',
    title: 'TROCA DE PNEU',
    alt: 'Ícone de pneu'
  },
  {
    icon: '/images/ico20.png',
    title: 'PANE SECA',
    alt: 'Ícone de gasolina'
  },
  {
    icon: '/images/ico21.png',
    title: 'CARGA DE BATERIA',
    alt: 'Ícone de bateria'
  }
]

export function Servicos() {
  return (
    <section 
      id="servicos" 
      className="py-16 bg-gray-50"
      data-testid="servicos-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4 relative">
                <Image
                  src={servico.icon}
                  alt={servico.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {servico.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 