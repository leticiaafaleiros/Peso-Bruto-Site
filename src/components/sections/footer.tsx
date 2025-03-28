'use client'

import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      data-testid="footer"
      className="bg-black text-white py-12"
    >
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Coluna 1 - Contato */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <Link href="tel:+5516993896054" className="hover:text-white transition-colors">
                (16) 99389-6054
                </Link>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-red-500 flex-shrink-0" 
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <Link href="https://wa.me/5516993896054" className="hover:text-white transition-colors">
                  (16) 99389-6054
                </Link>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <Link href="mailto:pesobruto01@gmail.com" className="hover:text-white transition-colors">
                  pesobruto01@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                <address className="not-italic text-center sm:text-left">
                  R. Prof. Lourdes Zenker Leite Vaz, 741<br />
                  Parque Res. Nova Franca<br />
                  Franca - SP<br />
                  CEP: 14409-217
                </address>
              </li>
            </ul>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#servicos" className="hover:text-white transition-colors">
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link href="/#sobre" className="hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/#contato" className="hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Redes Sociais */}
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-semibold mb-4 text-white">Redes Sociais</h3>
            <div className="flex gap-4 justify-center sm:justify-start">
              {/* Facebook */}
              <Link
                href="https://www.facebook.com/share/1BNomiuR8D/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/pesobrutoguinchos?igsh=Y2Y4OG00YjNxN242"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              {/* WhatsApp */}
              <Link
                href="https://wa.me/5516993896054"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
            <div className="mt-6 text-center sm:text-left">
              <h4 className="text-lg font-semibold mb-2 text-white">Horário de Atendimento</h4>
              <p>24 horas por dia</p>
              <p>7 dias por semana</p>
            </div>
          </div>
        </div>

        {/* Direitos Reservados */}
        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-sm md:text-base">
            © {currentYear} Peso Bruto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 