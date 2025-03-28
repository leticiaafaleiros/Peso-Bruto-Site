import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import HomePage from '@/app/page'
import RootLayout from '@/app/layout'

describe('HomePage', () => {
  it('deve renderizar todos os componentes da página inicial', () => {
    const Wrapper = () => (
      <RootLayout>
        <HomePage />
      </RootLayout>
    )
    
    render(<Wrapper />)

    // Hero
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    
    // Sobre
    expect(screen.getByTestId('sobre-section')).toBeInTheDocument()
    
    // Serviços
    expect(screen.getByTestId('servicos-section')).toBeInTheDocument()
    
    // Galeria
    expect(screen.getByTestId('galeria-section')).toBeInTheDocument()
    
    // Avaliações
    expect(screen.getByTestId('avaliacoes-section')).toBeInTheDocument()
    
    // Contato
    expect(screen.getByTestId('contato-section')).toBeInTheDocument()
    
    // Footer
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})