"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Clock, ShoppingBag, Flame, Sparkles } from "lucide-react";
import { useLenis } from "lenis/react";

const HeroSection = () => {
  const lenis = useLenis();

  return (
    <section id="hero" className="relative w-full bg-criollo-bg pb-12 flex flex-col items-center">
      
      {/* --- IMAGEN SUPERIOR FLUIDA --- */}
      {/* Ocupa el ancho total y se funde hacia abajo con el color del fondo de la web */}
      <div className="relative w-full h-[45vh] min-h-[350px] max-h-[450px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="La estrella de la casa"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Este gradiente es el truco mágico para que la foto no corte de golpe */}
        <div className="absolute inset-0 bg-gradient-to-t from-criollo-bg via-criollo-bg/20 to-black/30" />
      </div>

      {/* --- TARJETA FLOTANTE (App-like layout) --- */}
      {/* Sube un poco (-mt-32) para pisar la imagen y crear profundidad 3D */}
      <div className="relative -mt-32 w-[92%] max-w-md bg-white rounded-[2rem] p-6 sm:p-8 shadow-2xl shadow-criollo-text/5 border-2 border-criollo-border flex flex-col gap-6 z-10">
        
        {/* Cabecera de la tarjeta */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-criollo-atardecer/15 px-3 py-1 rounded-full border border-criollo-atardecer/30">
            <Sparkles className="size-3.5 text-criollo-atardecer" strokeWidth={2.5} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-criollo-ocre">
              Nuestra Estrella
            </span>
          </div>
          
          {/* Pregunta Gancho en vez de título aburrido */}
          <h1 className="text-4xl font-serif font-black text-criollo-text leading-none tracking-tight">
            ¿Se te antojó <br/> algo nuestro?
          </h1>
          <p className="text-criollo-muted font-sans font-medium text-sm">
            Pan artesanal, medallón casero y ese sabor a fuego que no se olvida.
          </p>
        </div>

        {/* Separador sutil */}
        <hr className="border-criollo-border/50" />

        {/* Info rápida en Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1 bg-criollo-bg/50 p-3 rounded-xl border border-criollo-border/50">
            <div className="flex items-center gap-1.5 text-criollo-primary">
              <Flame className="size-4" strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-wider">Cocina</span>
            </div>
            <span className="text-sm font-bold text-criollo-text">Saliendo ya</span>
          </div>
          
          <div className="flex flex-col gap-1 bg-criollo-bg/50 p-3 rounded-xl border border-criollo-border/50">
            <div className="flex items-center gap-1.5 text-criollo-atardecer">
              <MapPin className="size-4" strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-wider">Retiro</span>
            </div>
            <span className="text-sm font-bold text-criollo-text truncate">
              Chajarí, Entre Ríos
            </span>
          </div>
        </div>

        {/* Botón de Acción Principal */}
        <button
          onClick={() => lenis?.scrollTo("#catalog", { offset: -80 })}
          className="group relative w-full flex items-center justify-center gap-2 bg-criollo-primary text-white py-4 px-6 rounded-xl font-sans font-bold tracking-wide overflow-hidden shadow-md active:scale-[0.98] transition-all duration-200"
        >
          {/* Efecto de brillo al pasar el mouse por el botón */}
          <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />
          <ShoppingBag className="size-5 relative z-10" strokeWidth={2.5} />
          <span className="relative z-10">QUIERO PEDIR</span>
        </button>

      </div>
    </section>
  );
};

export default HeroSection;