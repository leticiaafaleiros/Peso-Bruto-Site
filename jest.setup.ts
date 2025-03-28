import '@testing-library/jest-dom'

// Mock do matchMedia para testes
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock do IntersectionObserver para testes
const mockIntersectionObserver = jest.fn()
mockIntersectionObserver.mockImplementation(callback => {
  return {
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  }
})
window.IntersectionObserver = mockIntersectionObserver 