import { Hero } from '@/components/sections/hero'
import { Galeria } from '@/components/sections/galeria'
import { Sobre } from '@/components/sections/sobre'
import { Avaliacoes } from '@/components/sections/avaliacoes'
import { Contato } from '@/components/sections/contato'
import { Servicos } from '@/components/sections/servicos'

export default function Home() {
  return (
    <main>
      <Hero />
      <Galeria />
      <Servicos />
      <Sobre />
      <Avaliacoes />
      <Contato />
    </main>
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