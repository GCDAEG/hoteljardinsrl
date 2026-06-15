// src/components/menu/HeroSection.tsx
"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";
import { siteConfig } from "@/lib/site/siteConfig";

const HeroSection = () => {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="relative w-full h-[55vh] min-h-[420px] md:min-h-[500px] lg:h-[65vh] xl:h-[70vh] max-h-[750px] flex flex-col justify-end bg-neutral-900 overflow-hidden border-b border-criollo-border mx-auto"
    >
      {/* Fondo inmersivo Premium */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={
            siteConfig?.hero?.bgImage ||
            "https://i.postimg.cc/c1wm23H0/LVXVs.jpg"
          }
          alt={siteConfig?.brand.name || "Restaurante"}
          fill
          className="object-cover object-center opacity-85 transition-transform duration-700 hover:scale-[1.02]"
          priority
        />
        {/* Degradado premium sofisticado para blanco/neutro mobile first */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/95 via-[#18181B]/50 to-transparent md:bg-gradient-to-r md:from-[#18181B]/95 md:via-[#18181B]/70 md:to-transparent" />
      </div>

      {/* Contenedor principal estructurado */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-6 md:pb-12 lg:pb-16 xl:pb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 lg:gap-12">
        <div className="flex-1">
          {/* Badge de Horario / Dirección */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 mb-2 md:mb-4">
            <Sparkles className="size-3 text-white fill-white/20" />
            <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider">
              Abierto ahora • {siteConfig?.brand.address || "Delivery App"}
            </span>
          </div>

          {/* Nombre y Título Comercial */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <span className="block text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-neutral-300 mb-0.5 md:mb-1">
              {siteConfig?.brand.name || "Premium Delivery"}
            </span>
            La cocina que deseas, <br className="hidden md:inline" /> directo a
            tu mesa.
          </h1>

          {/* Descripción Corta */}
          <p className="text-neutral-300 text-xs sm:text-sm mt-1.5 md:mt-3 max-w-[280px] sm:max-w-sm md:max-w-md leading-relaxed font-medium">
            Elige tus favoritos y arma tu pedido ideal en simples pasos. Premium
            y directo.
          </p>
        </div>

        {/* Acción Principal */}
        <div className="w-full md:w-auto md:min-w-[320px] lg:min-w-[360px] flex flex-col gap-2.5 pt-1 md:pt-0">
          <button
            onClick={() => lenis?.scrollTo("#catalog", { offset: -80 })}
            className="group w-full h-12 flex items-center justify-between bg-white text-[#18181B] px-5 rounded-2xl font-bold tracking-tight text-sm shadow-sm transition-all active:scale-[0.99]"
          >
            <span>COMENZAR PEDIDO</span>
            <div className="bg-neutral-100 p-1.5 rounded-xl text-[#18181B] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4" />
            </div>
          </button>

          {/* Opciones de Entrega Disponibles */}
          <div className="flex gap-4 px-1 text-neutral-400 md:justify-start">
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-white">
              <span className="size-1 bg-emerald-500 rounded-full" /> Retiro
            </span>
            <span className="text-[9px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-white">
              <span className="size-1 bg-emerald-500 rounded-full" /> Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
