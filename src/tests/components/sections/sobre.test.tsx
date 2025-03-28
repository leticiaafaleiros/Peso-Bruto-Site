import { render, screen } from '@testing-library/react'
import { Sobre } from '@/components/sections/sobre'

// Mock do next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image({ src, alt, className }: { src: string; alt: string; className?: string }) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={className} />
  }
}))

describe('Sobre', () => {
  it('deve renderizar o título principal', () => {
    render(<Sobre />)
    
    expect(screen.getByRole('heading', { name: 'Sobre a nossa empresa', level: 2 })).toBeInTheDocument()
  })

  it('deve renderizar a imagem principal', () => {
    render(<Sobre />)
    
    expect(screen.getByAltText('Peso Bruto Guincho 24h')).toBeInTheDocument()
  })

  it('deve renderizar o texto principal', () => {
    render(<Sobre />)
    
    const mainText = screen.getByText(/Com anos de experiência no mercado/)
    expect(mainText).toBeInTheDocument()
    expect(mainText).toHaveClass('text-gray-600')
  })

  it('deve renderizar a seção de missão', () => {
    render(<Sobre />)
    
    expect(screen.getByRole('heading', { name: 'Missão', level: 3 })).toBeInTheDocument()
    expect(screen.getByText(/Fornecer serviços de guincho e assistência veicular/)).toBeInTheDocument()
  })

  it('deve renderizar a seção de valores', () => {
    render(<Sobre />)
    
    expect(screen.getByRole('heading', { name: 'Valores', level: 3 })).toBeInTheDocument()
    expect(screen.getByText('Profissionalismo')).toBeInTheDocument()
    expect(screen.getByText('Rapidez')).toBeInTheDocument()
    expect(screen.getByText('Segurança')).toBeInTheDocument()
    expect(screen.getByText('Compromisso')).toBeInTheDocument()
  })

  it('deve ter a estrutura correta do grid', () => {
    render(<Sobre />)
    
    const mainGrid = document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-2')
    expect(mainGrid).toBeInTheDocument()
    expect(mainGrid).toHaveClass('items-stretch')

    const valuesGrid = document.querySelector('.grid.grid-cols-1.sm\\:grid-cols-2')
    expect(valuesGrid).toBeInTheDocument()
  })
}) 