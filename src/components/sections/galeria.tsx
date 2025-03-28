import React from 'react'
import Image from 'next/image'

const galeria = [
  {
    id: 1,
    imagem: '/images/bgUtilitario.jpg',
  },
  {
    id: 2,
    imagem: '/images/bgPesado.jpg',
  },
  {
    id: 3,
    imagem: '/images/bgCaminhao.jpg',
  },
  {
    id: 4,
    imagem: '/images/guincho-24h.jpeg'
  },
  {
    id: 5,
    imagem: '/images/transporte-veiculos.jpeg'
  },
  {
    id: 6,
    imagem: '/images/bgPesado3.jpeg'
  }
]

export function Galeria() {
  return (
    <section
      id="galeria"
      data-testid="galeria-section"
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Galeria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galeria.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.imagem}
                  alt="Imagem da galeria"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority={item.id <= 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 