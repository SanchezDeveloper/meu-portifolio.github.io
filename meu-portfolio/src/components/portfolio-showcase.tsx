"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function PortfolioShowcase() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('../data/projects.json')
      .then((res) => res.json())
      .then((json) => setProjects(json))
      .catch((err) => console.error('Error fetching portfolio projects:', err));
  }, []);

  return (
    <section id="projects" className="py-24 text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }} 
        className="container mx-auto px-6">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-16">
          Meus Projetos
        </h2>

        {/* Grid responsiva */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {/* Imagem do projeto */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                {/* Overlay com botão para desktop */}
                <div className="absolute inset-0 bg-black/60 opacity-0 sm:group-hover:opacity-100 flex items-center justify-center transition">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full flex items-center gap-2 text-white"
                  >
                    <ExternalLink size={18} />
                    Ver mais
                  </a>
                </div>

                {/* Botão sempre visível em mobile */}
                <div className="sm:hidden absolute bottom-3 left-1/2 -translate-x-1/2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full flex items-center gap-1 text-white text-sm"
                  >
                    <ExternalLink size={16} />
                    Ver Projeto
                  </a>
                </div>
              </div>

              {/* Texto */}
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
