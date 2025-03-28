import { render } from '@testing-library/react'
import RootLayout from '@/app/layout'

describe('RootLayout', () => {
  it('deve renderizar o layout corretamente', () => {
    const Wrapper = () => (
      <RootLayout>
        <div>Conteúdo de teste</div>
      </RootLayout>
    )
    
    const { container } = render(<Wrapper />)
    expect(container).toBeInTheDocument()
  })
}) 