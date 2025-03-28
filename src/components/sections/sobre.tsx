'use client'

import Image from 'next/image'

export function Sobre() {
  return (
    <section
      id="sobre"
      data-testid="sobre-section"
      className="py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/bgPesado.jpg"
              alt="Peso Bruto Guincho 24h"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 50vw"
              priority
            />
          </div>
          
          <div className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-center lg:text-left">
              Sobre a nossa empresa
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8 text-center lg:text-left">
              Com anos de experiência no mercado, a Peso Bruto é referência em serviços de guincho e assistência veicular em toda região. Nossa equipe altamente qualificada está pronta para atender suas necessidades com rapidez e profissionalismo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 flex items-center">
                  <div className="w-1 h-5 bg-red-600 mr-2"></div>
                  Missão
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Fornecer serviços de guincho e assistência veicular com excelência, garantindo a satisfação e segurança dos nossos clientes.
                </p>
              </div>

              <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-lg">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 flex items-center">
                  <div className="w-1 h-5 bg-red-600 mr-2"></div>
                  Valores
                </h3>
                <div className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-1.5">
                  {[
                    'Profissionalismo',
                    'Rapidez',
                    'Segurança',
                    'Compromisso'
                  ].map((valor, index) => (
                    <p key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-1.5"></span>
                      {valor}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 