'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fecha o menu mobile quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Impede o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="relative w-[90px] h-[38px]">
            <Image 
              src="/images/pesoBruto.jpeg"
              alt="Guincho Peso Bruto"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="#servicos" className="text-gray-700 hover:text-red-600 text-sm lg:text-base">
              Serviços
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-red-600 text-sm lg:text-base">
              Sobre
            </Link>
            <Link
              href="#avaliacoes"
              className="text-gray-700 hover:text-red-600 text-sm lg:text-base"
            >
              Avaliações
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-red-600 text-sm lg:text-base">
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-red-600" />
            ) : (
              <Menu className="h-5 w-5 text-red-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              href="#servicos"
              className="block text-gray-600 hover:text-red-600 transition-colors"
              onClick={handleLinkClick}
            >
              Serviços
            </Link>
            <Link
              href="#sobre"
              className="block text-gray-600 hover:text-red-600 transition-colors"
              onClick={handleLinkClick}
            >
              Sobre
            </Link>
            <Link
              href="#avaliacoes"
              className="block text-gray-600 hover:text-red-600 transition-colors"
              onClick={handleLinkClick}
            >
              Avaliações
            </Link>
            <Link
              href="#contato"
              className="block text-gray-600 hover:text-red-600 transition-colors"
              onClick={handleLinkClick}
            >
              Contato
            </Link>
            <Link
              href="tel:+5516993896054"
              className="block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-center"
              onClick={handleLinkClick}
            >
              (16) 99389-6054
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 