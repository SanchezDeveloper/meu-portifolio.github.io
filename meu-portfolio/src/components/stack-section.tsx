"use client";
import React from "react";
import techData from "../../public/data/tech-data.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface StackItem {
  icon: string;
  title: string;
  description: string;
}

interface TechStack {
  stack: StackItem[];
}

const StackSection: React.FC = () => {
  const data = techData as TechStack;

  return (
    <section
      id="stack"
      className="h-screen px-6py-16 flex  text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-11/12 w-full h-full overflow-y-auto scrollbar-none mx-auto pt-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 ">
          Minha Stack na Prática
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {data.stack.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-700 rounded-lg bg-gray-900/40 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left text-md font-semibold flex items-center gap-3 px-4">
                <span className="text-2xl">{item.icon}</span>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 text-center px-6 pb-4">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
};

export default StackSection;
