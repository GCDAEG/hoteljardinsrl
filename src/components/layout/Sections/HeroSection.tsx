"use client";
import React from "react";
import Image from "next/image";
import { ShoppingBag, ChevronDown, Award } from "lucide-react";
import { useLenis } from "lenis/react";

const HeroSection = () => {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100vh] md:min-h-[85vh] flex flex-col justify-end bg-gula-bg overflow-hidden"
    >
      {/* --- CONTENEDOR DE LA IMAGEN DE FONDO INMERSIVA --- */}
      <div className="absolute inset-0 w-full h-full bg-stone-950">
        <Image
          src="https://i.postimg.cc/c1wm23H0/LVXVs.jpg"
          alt="Santa Gula Rotisería"
          fill
          className="object-cover object-center opacity-70 scale-105"
          priority
        />
        {/* Máscara de degradado hiper-elegante: se oscurece abajo para dar contraste a los textos blancos */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/20" />
      </div>

      {/* --- CONTENIDO PRINCIPAL: ESTRUCTURA VERTICAL SMARTPHONE --- */}
      {/* Todo el espacio empuja el contenido hacia abajo (`justify-end`) para que sea accesible al pulgar */}
      <div className="relative z-10 w-full max-w-xl lg:max-w-5-xl mx-auto px-6 pb-12 pt-24 md:px-12 md:pb-16 flex flex-col gap-6 text-white items-center text-center md:items-start md:text-left">
        {/* Sello de Distinción Minimalista */}
        {/* <div className="inline-flex items-center gap-2 text-gula-gold tracking-[0.2em] font-sans font-black text-[10px] uppercase bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-gula-gold/20">
          <Award className="size-3.5" strokeWidth={2.5} />
          <span>Est. 2026 • Gourmet Clásico</span>
        </div> */}

        {/* Bloque de Títulos de Alto Impacto */}
        <div className="space-y-3 w-full lg:flex lg:flex-col lg:justify-center lg:text-center">
          <div className="flex items-center justify-center md:justify-center gap-3 ">
            <img src="/icon.png" alt="Santa Gula Icon" className="size-1/2" />
          </div>
          <span className="text-gula-gold font-serif italic text-lg block tracking-wide">
            Bienvenidos a la tentación
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight font-lora">
            <span className="font-normal">Santa Gula</span> <br />
            <span className="italic text-gula-gold font-lora ">Rotisería.</span>
          </h1>

          {/* Línea divisoria centralizada en móvil, alineada a la izquierda en tablets/desktop */}
          <div className="w-full flex justify-start lg:justify-center">
            <div className="w-12 h-[1px] bg-gula-gold/50 mx-auto md:mx-0 my-4" />
          </div>

          <p className="text-stone-300 font-sans font-medium text-sm sm:text-base leading-relaxed max-w-sm md:max-w-md">
            Platos artesanales elaborados con precisión técnica, materias primas
            selectas y ese toque distinguido que redefine la cocina tradicional.
          </p>
        </div>

        {/* --- ACCIÓN PRINCIPAL (Thumb-Zone Perfect) --- */}
        <div className="w-full pt-2 flex flex-col items-center gap-4">
          <button
            onClick={() => lenis?.scrollTo("#catalog", { offset: -80 })}
            className="group relative w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3 bg-gula-primary text-white py-4 px-8 rounded-xl font-lora font-bold tracking-wider text-sm shadow-xl shadow-gula-primary/20 active:scale-[0.98] md:active:scale-100 md:hover:bg-gula-primary/95 transition-all duration-200"
          >
            <ShoppingBag className="size-4" strokeWidth={2.5} />
            <span>VER LA CARTA</span>
            {/* Detalle premium visual */}
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gula-gold transition-all duration-300 group-hover:w-full" />
          </button>

          <span className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">
            Chajarí, Entre Ríos
          </span>
        </div>

        {/* Micro-indicador táctil inferior */}
        <div className="pt-4 animate-bounce opacity-40 w-full flex justify-center">
          <ChevronDown className="size-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
