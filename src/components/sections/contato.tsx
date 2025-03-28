import { Button } from '../Button/Button'

export function Contato() {
  return (
    <section id="contato" className="bg-zinc-100 py-16 px-4" data-testid="contato-section">
      <div className="container mx-auto max-w-md">
        <h1 className='flex justify-center mb-4 text-3xl font-semibold text-zinc-900 mb-2'>Entre em contato</h1>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold text-zinc-900 mb-2">
            Precisa de ajuda agora?
          </h3>
          <p className="text-zinc-600 mb-8">
            Entre em contato pelo WhatsApp ou ligue agora mesmo
          </p>

          <div className="space-y-3">
            <Button asChild variant="primary" className="w-full">
              <a href="tel:5516993896054">Ligar Agora</a>
            </Button>

            <Button asChild variant="primary" className="w-full bg-green-600 hover:bg-green-700">
              <a
                href="https://wa.me/5516993896054"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-8">
            <h4 className="text-lg font-medium text-zinc-900 mb-2">Área de Atendimento</h4>
            <p className="text-zinc-600">Atendemos Franca e região</p>
          </div>
        </div>
      </div>
    </section>
  )
} 