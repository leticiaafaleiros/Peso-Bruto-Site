import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/hero'

// Mock do next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image({ src, alt, className }: { src: string; alt: string; className?: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} />
  }
}))

describe('Hero', () => {
  it('deve renderizar o título e subtítulo corretamente', () => {
    render(<Hero />)
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Peso Bruto - Auto Socorro 24H')
    expect(screen.getByText('Assistência rápida e profissional para seu veículo em qualquer hora do dia ou da noite')).toBeInTheDocument()
  })

  it('deve renderizar os botões de ação', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Ligar Agora' })).toHaveAttribute('href', 'tel:+5516993896054')
    expect(screen.getByRole('link', { name: 'Nossos Serviços' })).toHaveAttribute('href', '#servicos')
  })

  it('deve renderizar a imagem de fundo com os atributos corretos', () => {
    render(<Hero />)
    
    const image = screen.getByAltText('Guincho 24 horas em ação')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/images/guincho-24h.jpeg')
    expect(image).toHaveClass('object-cover')
  })

  it('deve ter a estrutura correta de seção e overlay', () => {
    render(<Hero />)
    
    const section = document.querySelector('#hero')
    expect(section).toHaveClass('relative', 'h-screen', 'flex', 'items-center', 'justify-center', 'bg-black', 'text-white')

    // Verifica os overlays
    const bgOverlay = section?.querySelector('.bg-black\\/50')
    expect(bgOverlay).toBeInTheDocument()
    
    const overlay = section?.querySelector('.bg-black\\/60')
    expect(overlay).toBeInTheDocument()
  })
}) 