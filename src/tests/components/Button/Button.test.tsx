import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button/Button'

describe('Button', () => {
  it('deve renderizar o botão com o texto correto', () => {
    render(<Button>Botão</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Botão')
  })

  it('deve aplicar a classe correta para a variante primary', () => {
    render(<Button variant="primary">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-red-600', 'hover:bg-red-700')
  })

  it('deve aplicar a classe correta para a variante secondary', () => {
    render(<Button variant="secondary">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-zinc-200', 'hover:bg-zinc-300')
  })

  it('deve estar desabilitado quando a prop disabled é true', () => {
    render(<Button disabled>Botão</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('deve aplicar classes customizadas quando passadas via className', () => {
    render(<Button className="custom-class">Botão</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })
})