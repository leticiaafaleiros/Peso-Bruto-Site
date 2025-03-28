import { render, screen } from '@testing-library/react'
import { Contato } from '@/components/sections/contato'
import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe('Contato', () => {
  it('deve renderizar o título e subtítulo', () => {
    render(<Contato />)
    expect(screen.getByText('Precisa de ajuda agora?')).toBeInTheDocument()
    expect(screen.getByText('Entre em contato pelo WhatsApp ou ligue agora mesmo')).toBeInTheDocument()
  })

  it('deve renderizar o botão de telefone com o número correto', () => {
    render(<Contato />)
    const phoneButton = screen.getByRole('link', { name: /ligar agora/i })
    expect(phoneButton).toHaveAttribute('href', 'tel:5516993896054')
  })

  it('deve renderizar o botão do WhatsApp com o link correto', () => {
    render(<Contato />)
    const whatsappButton = screen.getByRole('link', { name: /chamar no whatsapp/i })
    expect(whatsappButton).toHaveAttribute('href', 'https://wa.me/5516993896054')
    expect(whatsappButton).toHaveAttribute('target', '_blank')
    expect(whatsappButton).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('deve mostrar mensagem sobre área de atendimento', () => {
    render(<Contato />)
    expect(screen.getByText(/atendemos franca e região/i)).toBeInTheDocument()
  })
})