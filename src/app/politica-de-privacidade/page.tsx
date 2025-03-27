export default function PoliticaDePrivacidade() {
  // Função para formatar a data em português
  function formatarData() {
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 
      'Maio', 'Junho', 'Julho', 'Agosto', 
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]
    
    const data = new Date()
    const mes = meses[data.getMonth()]
    const ano = data.getFullYear()
    
    return `${mes} de ${ano}`
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Política de Privacidade
        </h1>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Informações Gerais</h2>
            <p className="text-gray-600 mb-4">
              Esta Política de Privacidade descreve como a Peso Bruto Guincho 24h coleta, usa e protege as informações pessoais que você fornece ao utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Coleta de Informações</h2>
            <p className="text-gray-600 mb-4">
              Coletamos as seguintes informações quando você utiliza nossos serviços:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Nome completo</li>
              <li>Número de telefone</li>
              <li>Localização do veículo</li>
              <li>Informações do veículo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Uso das Informações</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Prestar serviços de guincho e assistência</li>
              <li>Entrar em contato em caso de emergência</li>
              <li>Melhorar nossos serviços</li>
              <li>Enviar atualizações sobre o serviço solicitado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Proteção de Dados</h2>
            <p className="text-gray-600 mb-4">
              Mantemos suas informações seguras usando medidas técnicas e organizacionais apropriadas para evitar perda, uso indevido ou alteração não autorizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Compartilhamento de Informações</h2>
            <p className="text-gray-600 mb-4">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para a prestação dos serviços ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
            <p className="text-gray-600 mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Solicitar correção de informações incorretas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Contato</h2>
            <p className="text-gray-600 mb-4">
              Para questões sobre esta política de privacidade ou suas informações pessoais, entre em contato conosco através do telefone ou email disponíveis em nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Atualizações da Política</h2>
            <p className="text-gray-600 mb-4">
              Esta política pode ser atualizada ocasionalmente. Recomendamos que você revise periodicamente para se manter informado sobre como protegemos suas informações.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm text-center">
              Última atualização: {formatarData()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 