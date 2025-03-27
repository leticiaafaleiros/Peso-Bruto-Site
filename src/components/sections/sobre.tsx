import Image from 'next/image'

export function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/bgPesado.jpg"
              alt="Peso Bruto Guincho 24h"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a Peso Bruto Guincho 24h
            </h2>
            <p className="text-gray-600 mb-6">
              Com anos de experiência no mercado, a Peso Bruto Guincho 24h é referência em serviços de guincho e assistência veicular em toda região. Nossa equipe altamente qualificada está pronta para atender suas necessidades com rapidez e profissionalismo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-2">Missão</h3>
                <p className="text-gray-600">
                  Fornecer serviços de guincho e assistência veicular com excelência, garantindo a satisfação e segurança dos nossos clientes.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-semibold mb-2">Valores</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Profissionalismo</p>
                  <p>Rapidez</p>
                  <p>Segurança</p>
                  <p>Compromisso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 