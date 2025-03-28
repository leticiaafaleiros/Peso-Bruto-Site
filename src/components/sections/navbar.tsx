'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Controla o bloqueio de rolagem
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav 
      className="bg-white text-gray-600 fixed w-full z-50 top-0 shadow-sm"
      data-testid="navbar"
    >
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/pesoBruto.jpeg"
              alt="Logo Peso Bruto"
              width={100}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/#galeria" 
              className="hover:text-red-500 transition-colors"
            >
              Galeria
            </Link>
            <Link 
              href="/#servicos" 
              className="hover:text-red-500 transition-colors"
            >
              Serviços
            </Link>
            <Link 
              href="/#sobre" 
              className="hover:text-red-500 transition-colors"
            >
              Sobre
            </Link>
            <Link 
              href="/#contato" 
              className="hover:text-red-500 transition-colors"
            >
              Contato
            </Link>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white fixed inset-0 top-20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/#galeria"
                className="block px-3 py-2 text-base hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Galeria
              </Link>
              <Link
                href="/#servicos"
                className="block px-3 py-2 text-base hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link
                href="/#sobre"
                className="block px-3 py-2 text-base hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Sobre
              </Link>
              <Link
                href="/#contato"
                className="block px-3 py-2 text-base hover:text-red-500 transition-colors"
                onClick={toggleMenu}
              >
                Contato
              </Link>
              
              <a
                href="tel:+5516993896054"
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-600 transition-colors"
                onClick={toggleMenu}
              >
                <Phone className="h-5 w-5" />
                Ligar Agora
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 