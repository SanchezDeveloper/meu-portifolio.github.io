"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 w-full bg-gray-900 text-white h-16 flex items-center justify-between p-4 z-50 shadow-md">
        {/* Logo / Perfil */}
        <h1 className="text-lg font-semibold"> <code className="text-purple-800">&lt;</code>Sanchez Dev <code className="text-purple-800">/&gt;</code> </h1>

        {/* Menu - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            <li><a href="#inicio" className="hover:text-purple-600">Início</a></li>
            <li><a href="#sobre-mim" className="hover:text-purple-600">Sobre mim</a></li>
            <li><a href="#projetos" className="hover:text-purple-600">Projetos</a></li>
            <li><a href="#contato" className="hover:text-purple-600">Contato</a></li>
          </ul>
        </nav>

        {/* Botão do Menu Mobile */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Overlay + Menu Mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backdropFilter: menuOpen ? "blur(6px)" : "blur(0px)", backgroundColor: "rgba(0,0,0,0.5)" }}
        onClick={() => setMenuOpen(false)}
      />

      <nav
        className={`
          md:hidden fixed top-16 right-0 w-2/5 max-w-xs h-full bg-purple-800 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col items-start gap-6 p-6 text-white">
          <li>
            <a
              href="#inicio"
              className="hover:text-gray-400 transform transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#sobre-mim"
              className="hover:text-gray-400 transform transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Sobre mim
            </a>
          </li>
          <li>
            <a
              href="#projetos"
              className="hover:text-gray-400 transform transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="hover:text-gray-400 transform transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
