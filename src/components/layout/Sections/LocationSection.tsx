"use client";
import React from "react";
import Section from "@/components/layout/Section";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Navigation,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function LocationSection() {
  // Datos locales para Alma Criolla
  const ADDRESS = "Alberdi 2921"; 
  const CITY = "Chajarí, Entre Ríos";
  const MAPS_URL = "https://www.google.com/maps";

  return (
    <Section
      id="ubicacion"
      className="bg-criollo-bg py-16 flex justify-center w-full"
      height="content"
    >
      <div className="w-full max-w-2xl lg:max-w-3xl flex flex-col gap-8 sm:px-0">
        
        {/* --- HEADER CAMPERO --- */}
        <div className="flex items-end justify-between px-1 border-b-2 border-criollo-border pb-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-criollo-primary uppercase tracking-[0.25em] mb-1.5">
              Punto de Encuentro
            </span>
            <h2 className="text-3xl font-serif font-black text-criollo-text tracking-tight">
              Nuestro Fogón
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border-2 border-criollo-border shadow-sm">
            <div className="size-2.5 bg-criollo-primary rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-criollo-text font-sans uppercase tracking-wide">
              Fuego Prendido
            </span>
          </div>
        </div>

        {/* --- MAPA CARD ESTILO PORTARRETRATO --- */}
        <div className="bg-white rounded-[2rem] border-2 border-criollo-border overflow-hidden shadow-sm group">
          
          {/* Contenedor del Mapa (Interactivo nativo) */}
          <div
            onClick={() => window.open(MAPS_URL, "_blank")}
            className="relative aspect-video bg-criollo-border/20 cursor-pointer overflow-hidden"
          >
            {/* Imagen del mapa */}
            <Image
              src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?q=80&w=1000"
              alt="Ubicación Alma Criolla"
              fill
              className="object-cover opacity-80 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Marcador Estilo Fuego (CSS Puro) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative flex items-center justify-center">
                {/* Ping de fondo (Ondas) */}
                <div className="absolute size-20 bg-criollo-primary/30 rounded-full animate-ping" />
                {/* Círculo central estático */}
                <div className="bg-criollo-primary p-4 rounded-full shadow-lg text-white relative z-10 border-2 border-white">
                  <Flame className="size-8" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Datos de Dirección */}
          <div className="p-6 md:p-8 flex flex-col gap-6 bg-white relative z-20">
            <div className="flex items-center gap-5">
              <div className="bg-criollo-bg p-4 rounded-2xl border-2 border-criollo-border text-criollo-atardecer">
                <MapPin className="size-7" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-serif font-bold text-criollo-text leading-none">
                  {ADDRESS}
                </p>
                <p className="text-sm font-sans font-bold text-criollo-muted mt-1.5 tracking-wide">
                  {CITY}
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open(MAPS_URL, "_blank")}
              className="w-full flex items-center justify-center bg-criollo-primary text-white py-4 px-6 rounded-xl font-sans font-bold tracking-wide transition-all duration-200 active:scale-[0.98] shadow-md border border-white/10 hover:bg-orange-800"
            >
              CÓMO LLEGAR AL FOGÓN
              <Navigation className="size-5 fill-white ml-2" />
            </button>
          </div>
        </div>

        {/* --- INFO DE SERVICIO --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Horarios */}
          <div className="bg-white rounded-[1.5rem] border-2 border-criollo-border p-6 flex items-center gap-4 shadow-sm hover:border-criollo-atardecer/50 transition-colors">
            <div className="size-14 bg-criollo-bg rounded-2xl flex items-center justify-center shrink-0 border border-criollo-border text-criollo-atardecer">
              <Clock className="size-7" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-criollo-muted uppercase tracking-widest mb-1">
                Horarios
              </span>
              <span className="text-sm font-bold text-criollo-text leading-tight font-sans">
                Mediodía y Noche <br />
                <span className="text-criollo-primary font-semibold">
                  11:30 - 14:30 | 19:30 - 23:30
                </span>
              </span>
            </div>
          </div>

          {/* Servicio */}
          <div className="bg-white rounded-[1.5rem] border-2 border-criollo-border p-6 flex items-center gap-4 shadow-sm hover:border-criollo-primary/30 transition-colors">
            <div className="size-14 bg-criollo-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-criollo-primary/20 text-criollo-primary">
              <Flame className="size-7" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-criollo-muted uppercase tracking-widest mb-1">
                El Servicio
              </span>
              <span className="text-sm font-bold text-criollo-text leading-tight font-sans">
                Porciones abundantes y sabor a leña 100% casero.
              </span>
            </div>
          </div>
        </div>

        {/* --- SELLO DE LA CASA --- */}
        <div className="mt-4 flex flex-col items-center gap-3 mb-4">
          <div className="flex items-center gap-2 text-criollo-text font-serif font-bold">
            <CheckCircle2 className="size-5 text-criollo-primary" strokeWidth={2.5} />
            <span>Tradición de Familia</span>
          </div>
          <p className="text-[10px] text-criollo-muted font-bold text-center px-6 uppercase tracking-[0.25em] leading-relaxed max-w-sm">
            Cocinamos cada plato con el mismo fuego que entibia nuestra propia casa.
          </p>
        </div>
      </div>
    </Section>
  );
}