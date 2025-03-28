'use client'

import { Star } from 'lucide-react'

const avaliacoes = [
  {
    nome: 'Fabricioff Silva',
    texto: 'A empresa peso bruto está de parabéns, serviço de qualidade. O melhor guincho de Franca-sp.',
    nota: 5,
    inicial: 'F'
  },
  {
    nome: 'Guilherme Oliveira',
    texto: 'Ótimo profissional desde a linha pesada até a leve.... Recomendo de olhos fechados....',
    nota: 5,
    inicial: 'G'
  },
  {
    nome: 'Anderson Progetti',
    texto: 'Muito atencioso atendimento nota 10!!!!!',
    nota: 5,
    inicial: 'A'
  }
]

function Avatar({ inicial }: { inicial: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-semibold text-xl">
      {inicial}
    </div>
  )
}

export function Rating({ nota }: { nota: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={20}
          className={i < nota ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      data-testid="avaliacoes-section"
      className="py-20 bg-orange-400"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Avaliações
          </h2>
          <div className="flex justify-center mb-4">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={40}
                  className="fill-orange-600 text-orange-600"
                  data-testid="main-star"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {avaliacoes.map((avaliacao, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar inicial={avaliacao.inicial} />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{avaliacao.nome}</h3>
                  <div data-testid="rating-container">
                    <Rating nota={avaliacao.nota} />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{avaliacao.texto}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/search?q=peso+bruto+guincho+24h+franca+sp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors inline-block"
          >
            Avaliar no Google
          </a>
        </div>
      </div>
    </section>
  )
} 