"use client"
import React from 'react'
import Image from 'next/image'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function FisrtSection() {

  const [ text ] = useTypewriter( {
    words: [ "Desenvolvedor Web", "Solucionador de problemas", "Fascinado por tecnologia" ],
    loop:  true ,
    delaySpeed: 2000,
  });

  return (
    <section className="h-[calc(100dvh-64px)] mt-16 flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-950 text-center text-white px-4" id="inicio">
      <Image
        src="/assets/images/profile-photo.png"
        width={200}
        height={200}
        alt="Foto de perfil"
        className="rounded-full mt-6 border-4 border-purple-800"
      >
      </Image>
      <div className='ml-0 md:ml-10 text-left'>
        <div className='mb-6'>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Olá, eu sou <span className='text-purple-800'>Vinícius Caio</span></h1>
          <span className='text-3xl'>{text}<Cursor cursorStyle="|" cursorColor='purple' /></span>
        </div>

        <a href="#saiba-mais" className='p-3 rounded-md bg-purple-800 font-bold transform transition-colors duration-300 hover:bg-gray-800'>Saiba mais</a>

      </div>
      


    </section>
  )
}