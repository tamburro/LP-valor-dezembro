import React from 'react';
import Logo from'../assets/valor-economico.png'


const Footer = () => {
  return (
    <footer className='max-w-[1240px] bg-[#0e3d4d] mx-auto py-4 px-4 grid text-gray-300'>
      <div>
        <div className='flex justify-between'>
          <h1 className='w-full pt-0 justify text-sm lg:text-xl font-bold text-white'>Ou ligue para assinar: 0800 701 8888</h1>
          <img className='w-[10%] h-[10%] md:w-[7%] lg:w-[7%]' src={Logo} alt="/" />
        </div>
        <div className='py-4 text-[8px] lg:text-[10px] text-justify leading-snug'>
          <p>1- Valor Digital Anual: será cobrado R$ 499,90 pelo primeiro ano de assinatura, podendo ser dividido em: 3 parcelas de R$ 166,63, 6 parcelas de R$ 83,32 ou 12 parcelas de R$ 41,66. Após o primeiro ano, preço padrão vigente. Esta oferta libera o acesso ilimitado ao Valor Econômico e O GLOBO Digital pelo site e app Globo Mais. Pagamento apenas com cartão de crédito (American Express, MasterCard, Elo e Visa). Ao optar pelo plano anual, em qualquer modalidade de parcelamento, não há reembolso pelo período restante da vigência, caso o cancelamento ocorra em prazo inferior aos 12 meses contratados. 2- Valor Digital Mensal: será cobrado R$ 19,90/mês nos seis primeiros meses de assinatura. Depois, R$ 60,90/mês, preço padrão vigente. Esta oferta libera o acesso ilimitado ao site e aplicativo do Valor Econômico e do O GLOBO Digital. Pagamento apenas com cartão de crédito (American Express, MasterCard, Elo e Visa) e conta corrente. 3- Valor Completo (Digital + Impresso): será cobrado R$ 59,90/mês nos três primeiros meses, depois R$ 89,90 por três meses e após valor padrão vigente de R$ 134,90 (preço dos estados: ES, MG, RJ, SP). Pagamento apenas com cartão de crédito (American Express, MasterCard, Elo e Visa) e conta corrente. Os produtos especiais do Valor Econômico são gratuitos para os assinantes ativos na época da circulação de cada produto. A assinatura do jornal impresso está sujeita a confirmação da entrega no local escolhido pelo interessado. Caso o assinante não se manifeste de forma contrária, para sua maior comodidade, a assinatura será renovada automaticamente ao término do período contratado, aos preços então vigentes. O Valor PRO e o Valor Internacional não fazem parte deste pacote de assinaturas. Jornal digital disponível para smartphones e tablets compatíveis com os sistemas iOS (a partir da versão 11.0) e Android (a partir da versão 5), e para computadores. Informamos que os descontos são em relação ao preço padrão vigente à época da campanha. O plano Valor Digital Anual desta campanha dá direito a um Smartwatch Mormaii Life, com pulseira na cor azul, que será entregue no endereço cadastrado no ato da adesão da assinatura, sem custos adicionais. O assinante receberá o brinde em até 20 dias úteis. Para mais detalhes da promoção, consulte o regulamento. Oferta válida somente para novos assinantes/pessoa física.​</p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
