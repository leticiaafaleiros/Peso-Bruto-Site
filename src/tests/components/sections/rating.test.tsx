import { render, screen } from '@testing-library/react'
import { Rating } from '@/components/sections/avaliacoes'

describe('Rating', () => {
  it('deve renderizar estrelas preenchidas e não preenchidas corretamente para diferentes notas', () => {
    const { container } = render(<Rating nota={3} />)
    
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
    
    // Verifica se as primeiras 3 estrelas estão preenchidas
    stars.forEach((star, index) => {
      if (index < 3) {
        expect(star).toHaveClass('fill-yellow-400', 'text-yellow-400')
      } else {
        expect(star).toHaveClass('text-gray-300')
        expect(star).not.toHaveClass('fill-yellow-400')
      }
    })
  })

  it('deve renderizar todas as estrelas preenchidas para nota 5', () => {
    const { container } = render(<Rating nota={5} />)
    
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
    
    stars.forEach(star => {
      expect(star).toHaveClass('fill-yellow-400', 'text-yellow-400')
    })
  })

  it('deve renderizar todas as estrelas vazias para nota 0', () => {
    const { container } = render(<Rating nota={0} />)
    
    const stars = container.querySelectorAll('svg')
    expect(stars).toHaveLength(5)
    
    stars.forEach(star => {
      expect(star).toHaveClass('text-gray-300')
      expect(star).not.toHaveClass('fill-yellow-400')
    })
  })
}) 