import { render, screen } from '@testing-library/react'
import { Avaliacoes } from '@/components/sections/avaliacoes'

describe('Avaliacoes', () => {
  it('deve renderizar o componente corretamente', () => {
    render(<Avaliacoes />)
    
    // Verifica se o título está presente
    expect(screen.getByText('Avaliações')).toBeInTheDocument()
    
    // Verifica se as estrelas principais estão presentes
    const mainStars = screen.getAllByTestId('main-star')
    expect(mainStars).toHaveLength(5)
    
    // Verifica se os containers de avaliação estão presentes
    const ratingContainers = screen.getAllByTestId('rating-container')
    expect(ratingContainers).toHaveLength(3)
    
    // Verifica se os nomes dos avaliadores estão presentes
    expect(screen.getByText('Fabricioff Silva')).toBeInTheDocument()
    expect(screen.getByText('Guilherme Oliveira')).toBeInTheDocument()
    expect(screen.getByText('Anderson Progetti')).toBeInTheDocument()
    
    // Verifica se os textos das avaliações estão presentes
    expect(screen.getByText('A empresa peso bruto está de parabéns, serviço de qualidade. O melhor guincho de Franca-sp.')).toBeInTheDocument()
    expect(screen.getByText('Ótimo profissional desde a linha pesada até a leve.... Recomendo de olhos fechados....')).toBeInTheDocument()
    expect(screen.getByText('Muito atencioso atendimento nota 10!!!!!')).toBeInTheDocument()
    
    // Verifica se os avatares estão presentes
    expect(screen.getByText('F')).toBeInTheDocument()
    expect(screen.getByText('G')).toBeInTheDocument()
    expect(screen.getByText('A')).toBeInTheDocument()
    
    // Verifica se o link para avaliação está presente
    const avaliarLink = screen.getByText('Avaliar no Google')
    expect(avaliarLink).toBeInTheDocument()
    expect(avaliarLink).toHaveAttribute('href', 'https://www.google.com/search?q=peso+bruto+guincho+24h+franca+sp')
    expect(avaliarLink).toHaveAttribute('target', '_blank')
    expect(avaliarLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('deve renderizar estrelas preenchidas e não preenchidas corretamente', () => {
    render(<Avaliacoes />)
    
    // Todas as avaliações têm nota 5, então todas as estrelas devem estar preenchidas
    const ratingContainers = screen.getAllByTestId('rating-container')
    
    ratingContainers.forEach(container => {
      const stars = container.querySelectorAll('svg')
      expect(stars).toHaveLength(5)
      
      stars.forEach(star => {
        expect(star).toHaveClass('fill-yellow-400', 'text-yellow-400')
      })
    })
  })
}) 