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