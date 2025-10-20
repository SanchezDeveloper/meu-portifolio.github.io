"use client";
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import GradientText from './ui/GradientText'
import { motion } from 'framer-motion';

export default function FirstSection() {
  const [text] = useTypewriter({
    words: ["Desenvolvedor Web", "Solucionador de problemas", "Fascinado por tecnologia"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      className="relative h-[calc(100dvh+64px)] flex items-center justify-center text-center text-white px-4 overflow-hidden"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} 
       className="ml-0 md:ml-10 md:text-left z-10">
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg flex flex-col min-[379px]:flex-row">
            Olá, eu sou <code>&nbsp;</code>
            <GradientText
              colors={["#5B21B6, #6D28D9, #7C3AED, #8B5CF6, #9333EA"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-3xl md:text-5xl"
            >
              Vinícius Caio
            </GradientText>
          </h1>
          <span className="text-2xl md:text-3xl drop-shadow-md">
            {text}
            <Cursor cursorStyle="|" cursorColor="purple" />
          </span>
        </div>

        <a
          href="#about-me"
          className="p-3 bg-purple-700 hover:bg-purple-600 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
        >
          Saiba mais...
        </a>
      </motion.div>
    </section>
  );
}
