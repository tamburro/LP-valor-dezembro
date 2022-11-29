import React from 'react'
import Mensal from '../assets/mensal.png'
import Anual from '../assets/anual.png'
import Completo from '../assets/completo.png'



const Cards = () => {
  return (
    <section className='w-full py-[10rem] px-4 bg-gray-200 mt-[-5rem]'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='bg-white rounded-lg w-full shadow-xl flex flex-col my-4 pb-10'>
            
              
              <h1 className='mx-auto px-5 py-1 text-xl mt-[-2rem] bg-[#00e500] rounded-sm z-10'>MELHOR OFERTA</h1>
              <div className='bg-[#0e3d4d] w-full flex flex-col p-4 my-4 mt-[-1.2rem] rounded-t-lg'>
              <p className='text-center text-xl text-white font-bold py-3'>VALOR DIGITAL ANUAL</p>
              </div>
              <p className='text-sm pl-20'>De: <span className='line-through'>R$710,00</span></p>
              <p className='text-sm pl-20'>Por</p>
              <div class="columns-3xs flex justify-center">
              <p className='font-bold text-2xl leading-tight pt-2'>até<br />12x R$</p>
              <p className='text-7xl font-bold'>41</p>
              <p className='text-3xl font-bold'>,66<br /><span className='text-xl font-normal'>/mês</span></p>
              </div>
              
              <p className='text-center font-bold text-[12px] pt-1 pb-4'>Total de R$ 499,90 no primeiro ano</p>
              <button className='bg-[#00e500] rounded-lg my-1 mx-auto px-6 py-1 text-[#002f3b] shadow-sm hover:shadow-lg hover:scale-105 duration-300'><a href="https://assinaturaglobo.globo.com/valor/oferta/valor-digital-anual-em-ate-12x-1668784809961/"><p className='font-bold uppercase'>Assine agora</p></a></button>
                <p className='text-center text-[12px] pt-1 font-bold'>Economize R$ 210,10 em 1 ano</p>
                <img className='w-64 h-auto mx-auto' src={Anual} alt="/" />
              <div className='text-left font-medium'>
                <p className='border-b border-b-gray-300 mx-8 mt-4 text-sm'>Brinde: Smartwatch Mormaii Life.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>Acesso ilimitado ao Valor e O GLOBO pelo app Globo Mais.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>Acesso ilimitado a Época Negócios, Globo Rural, PEGN e mais 9 revistas.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>Edições impressas digitalizadas para ler no site, app ou offline.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>As melhores coberturas sobre economia e finanças do país.</p>
                <p className='border-b mx-8 text-sm'>Clube O GLOBO com descontos em mais de 100 parceiros.</p>
              </div>
              
          </div>
          <div className='bg-white rounded-lg w-full shadow-xl flex flex-col my-4 pb-10'>
            
              
             
              <div className='bg-[#0e3d4d] w-full flex flex-col p-4 my-4 mt-[-1rem] rounded-t-lg'>
              <p className='text-center text-xl text-white font-bold py-3'>VALOR DIGITAL MENSAL</p>
              </div>
              <p className='text-sm pl-20'>De: <span className='line-through'>R$60,90</span></p>
              <p className='text-sm pl-20'>Por</p>
              <div class="columns-2xs flex justify-center">
              
              <p className='text-7xl font-bold'>19</p>
              <p className='text-3xl font-bold'>,90<br /><span className='text-xl font-normal'>/mês</span></p>
              </div>
              
              <p className='text-center font-bold text-[12px] pt-1 pb-4'>por 6 meses</p>
              <button className='bg-[#00e500] rounded-lg my-1 mx-auto px-6 py-1 md:mb-7 text-[#002f3b] shadow-sm hover:shadow-lg hover:scale-105 duration-300'><a href="https://assinaturaglobo.globo.com/valor/pagamento?oferta=valor-digital-DD-FREE-RMKT/"><p className='font-bold uppercase'>Assine agora</p></a></button>
                
                <img className='w-64 h-auto mx-auto' src={Mensal} alt="/" />
              <div className='text-left font-medium'>
                <p className='border-b border-b-gray-300 mx-8 mt-4 text-sm'>Acesso ilimitado ao site e app Valor e O GLOBO.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>Edição impressa digitalizada para ler no site, app ou offline.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>As melhores coberturas sobre economia e finanças do país.</p>
                <p className='border-b border-b-gray-300 mx-8 text-sm'>Mais de 20 revistas setoriais, anuários e suplementos.</p>
                <p className='border-b mx-8 text-sm'>Clube O GLOBO com descontos em mais de 100 parceiros.</p>
              </div>
              
          </div>
          <div className='bg-white rounded-lg w-full shadow-xl flex flex-col my-4 pb-10'>
            
              
           
            <div className='bg-[#0e3d4d] w-full flex flex-col p-4 my-4 mt-[-1rem] rounded-t-lg'>
            <p className='text-center text-xl text-white font-bold py-3'>VALOR DIGITAL COMPLETO</p>
            </div>
            <p className='text-sm pl-20'>De: <span className='line-through'>R$134,90</span></p>
            <p className='text-sm pl-20'>Por</p>
            <div class="columns-3xs flex justify-center">
            <p className='font-bold text-2xl leading-tight pt-2'>até<br />12x R$</p>
            <p className='text-7xl font-bold'>69</p>
            <p className='text-3xl font-bold'>,90<br /><span className='text-xl font-normal'>/mês</span></p>
            </div>
            
            <p className='text-center font-bold text-[12px] pt-1 pb-4'>por 3 meses</p>
            <button className='bg-[#00e500] rounded-lg my-1 mx-auto px-6 py-1 md:mb-7 text-[#002f3b] shadow-sm hover:shadow-lg hover:scale-105 duration-300'><a href="https://assinaturaglobo.globo.com/valor/oferta/valor-digital-anual-em-ate-12x-1668784809961/"><p className='font-bold uppercase'>Assine agora</p></a></button>
              
              <img className='w-64 h-auto mx-auto' src={Completo} alt="/" />
            <div className='text-left font-medium'>
              <p className='border-b border-b-gray-300 mx-8 mt-4 text-sm'>Jornal impresso de 2° a 6° feira.</p>
              <p className='border-b border-b-gray-300 mx-8 text-sm'>Acesso ilimitado ao site e app Valor.</p>
              <p className='border-b border-b-gray-300 mx-8 text-sm'>As melhores coberturas sobre economia e finanças do país.</p>
              
              <p className='border-b mx-8 text-sm'>Mais de 20 revistas setoriais, anuários e suplementos.</p>
            </div>
            
        </div>
      </div>
    </section>
  );
};

export default Cards;
