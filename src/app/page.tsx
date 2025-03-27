import { Hero } from '@/components/sections/hero'
import { Servicos } from '@/components/sections/servicos'
import { Sobre } from '@/components/sections/sobre'
import { Avaliacoes } from '@/components/sections/avaliacoes'
import { Contato } from '@/components/sections/contato'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Servicos />
      <Sobre />
      <Avaliacoes />
      <Contato />
    </div>
  )
}

const servicos = [
  {
    titulo: "Guincho 24h",
    descricao: "Atendimento imediato em qualquer horário do dia ou da noite.",
    imagem: "/images/guincho-24h.jpg",
  },
  {
    titulo: "Assistência Técnica",
    descricao: "Profissionais especializados para resolver problemas mecânicos.",
    imagem: "/images/assistencia-tecnica.jpg",
  },
  {
    titulo: "Transporte de Veículos",
    descricao: "Serviço seguro para transportar seu veículo para qualquer localidade.",
    imagem: "/images/transporte-veiculos.jpg",
  },
]