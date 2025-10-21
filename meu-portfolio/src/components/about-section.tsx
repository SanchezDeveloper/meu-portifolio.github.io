"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ElectricBorder from './ui/ElectricBorder'

interface AboutData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  goals: string;
}

export default function AboutSection() {
  const [data, setData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch('../data/about-me.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Error fetching about-me data:', err));
  }, []);

  if(!data) return <p>Em manutenção...</p>

  return (
    <section id="about-me" className="text-white min-h-[calc(100dvh-64px)] max-w-[calc(90dvw)] flex items-center text-center justify-center py-20 px-4 mx-auto md:text-start">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 cursor-default">
        
        <ElectricBorder
          color="#8a34d1"
          speed={1}
          chaos={0.5}
          thickness={2}
          style={{ borderRadius: 16 }}
          className={""}
        >
          <img
            src="/assets/images/profile-photo.png"
            alt={`Foto de ${data.name}`}
            width={250}
            height={250}
          >
          </img>
        </ElectricBorder>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }} 
          className="flex-1"
        >
          <h2 className="text-3xl font-bold">{data.name}</h2>
          <h3 className="text-xl text-purple-800">{data.title}</h3>
          <p className="mt-2 italic text-purple-600"></p>
          <p className="mt-4">{data.description}</p>
          <p className="mt-6 text-white">{data.goals}</p>
          <h4 className="mt-6 font-semibold text-lg">Principais habilidades:</h4>
          <ul className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
          
            {data.skills.map((skill, index) => (
              <li 
                key={index}
                className="px-3 py-1 bg-purple-700 text-purple-100 rounded-md text-sm font-medium hover:bg-purple-800 transition-colors duration-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}