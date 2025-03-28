import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '@/components/sections/navbar'

describe('Navbar', () => {
  it('deve renderizar corretamente', () => {
    render(<Navbar />)
    
    // Verifica se o navbar está presente
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    
    // Verifica o logo
    expect(screen.getByAltText('Logo Peso Bruto')).toBeInTheDocument()
    
    // Verifica os links de navegação
    expect(screen.getByText('Galeria')).toBeInTheDocument()
    expect(screen.getByText('Serviços')).toBeInTheDocument()
    expect(screen.getByText('Sobre')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
  })

  it('deve abrir e fechar o menu mobile', () => {
    render(<Navbar />)
    
    // Inicialmente o botão de menu deve estar visível e o menu fechado
    const menuButton = screen.getByRole('button', { name: /abrir menu/i })
    expect(menuButton).toBeInTheDocument()
    
    // Clica no botão para abrir o menu
    fireEvent.click(menuButton)
    
    // Verifica se o botão mudou para "Fechar menu"
    expect(screen.getByRole('button', { name: /fechar menu/i })).toBeInTheDocument()
    
    // Verifica se o botão "Ligar Agora" está visível no menu mobile
    expect(screen.getByText('Ligar Agora')).toBeInTheDocument()
    
    // Clica novamente para fechar o menu
    fireEvent.click(screen.getByRole('button', { name: /fechar menu/i }))
    
    // Verifica se o botão voltou para "Abrir menu"
    expect(screen.getByRole('button', { name: /abrir menu/i })).toBeInTheDocument()
  })

  it('deve fechar o menu mobile ao clicar em um link', () => {
    render(<Navbar />)
    
    // Abre o menu
    fireEvent.click(screen.getByRole('button', { name: /abrir menu/i }))
    
    // Clica em um link
    fireEvent.click(screen.getAllByText('Serviços')[1]) // Pega o link do menu mobile
    
    // Verifica se o menu fechou (botão voltou para "Abrir menu")
    expect(screen.getByRole('button', { name: /abrir menu/i })).toBeInTheDocument()
  })

  it('deve ter o link de telefone correto no menu mobile', () => {
    render(<Navbar />)
    
    // Abre o menu mobile
    fireEvent.click(screen.getByRole('button', { name: /abrir menu/i }))
    
    // Verifica o link de telefone
    const phoneLink = screen.getByRole('link', { name: /ligar agora/i })
    expect(phoneLink).toHaveAttribute('href', 'tel:+5516993896054')
  })
}) 