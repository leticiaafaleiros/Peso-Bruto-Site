import React from 'react'

const servicos = [
  {
    id: 1,
    titulo: 'Guincho para Utilitários',
    descricao: 'Transporte seguro e eficiente para utilitários de todos os tamanhos.',
    imagem: '/images/bgUtilitario.jpg',
  },
  {
    id: 2,
    titulo: 'Guincho para Veículos Pesados',
    descricao: 'Especialistas em transporte de caminhões, ônibus e máquinas pesadas.',
    imagem: '/images/bgPesado.jpg',
  },
  {
    id: 3,
    titulo: 'Guincho para Caminhões',
    descricao: 'Serviço especializado para caminhões de carga e reboques.',
    imagem: '/images/bgCaminhao.jpg',
  },
  {
    id: 4,
    titulo: 'Carga de bateria',
    descricao: 'Suporte para carga de bateria em caso de falha elétrica.',
    imagem: '/images/guincho-24h.jpeg'
  },
  {
    id: 5,
    titulo: 'Troca de pneu',
    descricao: 'Troca de pneu caso esteja furado.',
    imagem: '/images/transporte-veiculos.jpeg'
  },
  {
    id: 6,
    titulo: 'Pane seca',
    descricao: 'Suporte para pane seca para a falta de combustível.',
    imagem: '/images/bgPesado3.jpeg'
  }
]

export function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div 
              key={servico.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <h3 className="absolute bottom-0 left-0 w-full p-4 text-white font-semibold text-xl bg-gradient-to-t from-black/70 to-transparent">
                  {servico.titulo}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{servico.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 