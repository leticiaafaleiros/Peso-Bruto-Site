import { render, screen } from '@testing-library/react'
import PoliticaPrivacidadePage from '@/app/politica-de-privacidade/page'
import RootLayout from '@/app/layout'

describe('PoliticaPrivacidadePage', () => {
  it('deve renderizar o título da página', () => {
    const Wrapper = () => (
      <RootLayout>
        <PoliticaPrivacidadePage />
      </RootLayout>
    )
    
    render(<Wrapper />)
    expect(screen.getByRole('heading', { name: /política de privacidade/i })).toBeInTheDocument()
  })

  it('deve renderizar o conteúdo da política', () => {
    render(<PoliticaPrivacidadePage />)
    
    // Verifica seções importantes da política
    expect(screen.getByText(/Última atualização/i)).toBeInTheDocument()
    expect(screen.getByText('1. Informações Gerais')).toBeInTheDocument()
    expect(screen.getByText('2. Coleta de Informações')).toBeInTheDocument()
    expect(screen.getByText('3. Uso das Informações')).toBeInTheDocument()
  })

  it('deve renderizar o navbar', () => {
    render(
      <RootLayout>
        <PoliticaPrivacidadePage />
      </RootLayout>
    )
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('deve renderizar o footer', () => {
    render(
      <RootLayout>
        <PoliticaPrivacidadePage />
      </RootLayout>
    )
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
}) 