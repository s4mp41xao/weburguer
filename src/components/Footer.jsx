import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { TiSocialPinterest } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-black text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6
       border-b-2 border-gray-600 py-8 p-4'>
    
        <div>
          <h6 className='font-bold text-orange-600 uppercase pt-2'>Empresa</h6>
          <ul>
            <li className='py-1'>Sobre Nós</li>
            <li className='py-1'>Fale conosco</li>
            <li className='py-1'>Carreiras</li>
            <li className='py-1'>Parceiros</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-orange-600 uppercase pt-2'>Informações</h6>
          <ul>
            <li className='py-1'>Privacidade</li>
            <li className='py-1'>Termos</li>
            <li className='py-1'>Políticas</li>
            <li className='py-1'>Condições</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold text-orange-600 uppercase'>Receba Promoções </p>
          <p className='py-4'>Inscreva seu Email e garanta o desconto dos melhores produtos em sua caixa de entrada. </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-10 rounded-md mb-4' type="email" placeholder="Inscreva o Email.." />
            <button className='font-bold bg-black
             text-orange-600 border-white mb-4 rounded-md'>Enviar</button>
          </form>
        </div>
      </div>
      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Samuel Paixão, Desenvolvedor Front-End. Todos os direitos reservados.</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <TiSocialPinterest size={30} />
        </div>
      </div>
    </div >
  )
}

export default Footer