"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      {/* Logo / Perfil */}
      <div className="flex items-center gap-2">
        <Image
          src="/assets/images/profile-img.png"
          width={50}
          height={50}
          alt="Foto de perfil"
          className="rounded-full"
        />
        <h1 className="text-lg font-semibold">Vinícius</h1>
      </div>

      {/* Menu - Desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-6">
          <li><a href="#inicio" className="hover:text-gray-400">Início</a></li>
          <li><a href="#sobre-mim" className="hover:text-gray-400">Sobre mim</a></li>
          <li><a href="#projetos" className="hover:text-gray-400">Projetos</a></li>
          <li><a href="#contato" className="hover:text-gray-400">Contato</a></li>
        </ul>
      </nav>

      {/* Botão do Menu Mobile */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 md:hidden shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <a
                href="#inicio"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre-mim"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-gray-400"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
