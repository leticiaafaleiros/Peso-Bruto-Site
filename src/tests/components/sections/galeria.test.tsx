import { render, screen } from '@testing-library/react'
import { Galeria } from '@/components/sections/galeria'

describe('Galeria', () => {
  it('should render correctly', () => {
    render(<Galeria />)
    
    const section = screen.getByTestId('galeria-section')
    expect(section).toBeInTheDocument()
  })
}) 