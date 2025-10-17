"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Espera o evento real de carregamento completo da página
      setTimeout(() => {
        setFadeOut(true); // inicia o fade-out
        setTimeout(() => setIsLoaded(true), 600); // remove o loader após o fade
      }, 100);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="relative">
      {/* conteúdo com fade-in */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {/* loader sobreposto — desaparece suavemente */}
      {!isLoaded && <Loader fadeOut={fadeOut} />}
    </div>
  );
}
