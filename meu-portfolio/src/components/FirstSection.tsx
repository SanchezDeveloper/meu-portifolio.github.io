"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function FisrtSection() {

  const [ text ] = useTypewriter( {
    words: [ "Desenvolvedor Web", "Solucionador de problemas", "Fascinado por tecnologia" ],
    loop:  true ,
    delaySpeed: 2000,
  });

  return (
    <section className="h-dvh mt-16 flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-950 text-center text-white px-4" id="inicio">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Olá, eu sou <span className='text-purple-800'>Vinícius Caio</span></h1>
      <span className='text-3xl'>{text}<Cursor cursorStyle="|" cursorColor='purple' /></span>
      


    </section>
  )
}