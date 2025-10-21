"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export default function ContactSection() {
  const [downloading, setDownloading] = useState(false);

  async function handleDownloadCv() {
    try {
      setDownloading(true);
      setDownloading(true);
      const res = await fetch("/cv-att-101025.pdf", { cache: "no-store" });
      if (!res.ok) throw new Error("Falha ao buscar o arquivo");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      // Nome do arquivo que será salvo
      a.download = "Vinicius-Caio-Curriculo.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();

      // liberar memória
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Erro ao baixar currículo:", err);
      // opcional: toast ou alert
      alert("Não foi possível baixar o currículo. Tente novamente.");
    } finally {
      setDownloading(false);
    }
    
  }

  return (
    <section
      id="contacts"
      className="relative flex flex-col justify-center items-center mx-auto py-24 px-6 text-white overflow-hidden min-h-[calc(100dvh-64px)] max-w-[90dvw] "
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" mx-auto text-center"
      >
        {/* Título */}
        <h2 className="text-3xl md:text-3xl font-bold mb-6 drop-shadow-lg">
          Vamos conversar?
        </h2>

        {/* Descrição */}
        <p className="text-gray-300 text-lg mb-10">
          Estou sempre aberto a novas oportunidades, colaborações e desafios
          interessantes. Se quiser conversar sobre um projeto, vaga ou ideia —
          entre em contato comigo! 🚀
        </p>

        {/* Botão de contato principal */}
        <a
          href="https://wa.me/5561992762392"
          target="_"
          className="inline-block bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
        >
          Enviar mensagem
        </a>

        {/* Ícones sociais */}
        <div className="flex justify-center flex-wrap gap-6 mt-12">
          <a
            href="mailto:vinicsanchez@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-700 transition-all duration-300"
            aria-label="E-mail"
          >
            <Mail size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/vin%C3%ADcius-caio-marques-sanchez-a84786190/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-700 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://github.com/SanchezDeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-purple-700 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          <button
            onClick={handleDownloadCv}
            disabled={downloading}
            className="inline-flex items-center justify-center bg-transparent border border-purple-500 hover:bg-purple-700 hover:border-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            <FileDown className="mr-2" size={20} />
            {downloading ? "Baixando..." : "Baixar currículo"}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
