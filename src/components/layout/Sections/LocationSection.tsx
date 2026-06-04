"use client";
import React from "react";
import Section from "@/components/layout/Section";
import { MapPin, Clock, Navigation, Award } from "lucide-react";

export default function LocationSection() {
  const ADDRESS = "Doctor Planas 2551";
  const CITY = "Chajarí, Entre Ríos";
  const MAPS_URL = "https://maps.app.goo.gl/xerrVr6oTSyKxDfw5"; // Reemplazar por tu enlace real

  return (
    <Section
      id="ubicacion"
      className="bg-gula-bg py-20 flex justify-center w-full"
      height="content"
    >
      <div className="w-full max-w-2xl md:px-0 flex flex-col gap-12">
        {/* --- ENCABEZADO --- */}
        <div className="text-center space-y-3">
          <span className="text-[10px] font-bold text-gula-primary uppercase tracking-[0.3em]">
            Visítanos
          </span>
          <h2 className="text-4xl font-serif text-gula-text">Nuestro Lugar</h2>
          <div className="h-[1px] w-12 bg-gula-gold mx-auto" />
        </div>

        {/* --- MAPA & UBICACIÓN --- */}
        <div className="bg-white rounded-2xl border border-gula-border shadow-sm overflow-hidden">
          {/* Mapa minimalista */}
          <div
            onClick={() => window.open(MAPS_URL, "_blank")}
            className="relative aspect-[21/9] w-full bg-stone-200 cursor-pointer group"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-stone-300">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">
                Ver en el mapa
              </span>
            </div>
            {/* Overlay sutil para el efecto de clic */}
            <div className="absolute inset-0 bg-gula-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Información de contacto */}
          <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-gula-bg p-3 rounded-full text-gula-gold border border-gula-border">
                <MapPin className="size-6" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="text-xl font-serif text-gula-text">{ADDRESS}</p>
                <p className="text-xs text-gula-muted uppercase tracking-widest mt-0.5">
                  {CITY}
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open(MAPS_URL, "_blank")}
              className="flex items-center gap-2 px-6 py-3 bg-gula-text text-white rounded-full font-bold text-sm hover:bg-gula-primary transition-colors"
            >
              CÓMO LLEGAR <Navigation className="size-4" />
            </button>
          </div>
        </div>

        {/* --- DETALLES DE SERVICIO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 border-b border-gula-border md:border-b-0">
            <Clock className="size-6 text-gula-gold mt-1" strokeWidth={1.5} />
            <div>
              <p className="font-serif text-lg text-gula-text">Horarios</p>
              <p className="text-sm text-gula-muted mt-1 leading-relaxed">
                Abierto todos los días
                <br />
                <span className="font-bold text-gula-text">
                  11:30-14:30 | 19:30-23:30
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6">
            <Award className="size-6 text-gula-gold mt-1" strokeWidth={1.5} />
            <div>
              <p className="font-serif text-lg text-gula-text">La Promesa</p>
              <p className="text-sm text-gula-muted mt-1 leading-relaxed">
                Cocina artesanal de autor.
                <br />
                <span className="font-bold text-gula-text">
                  Frescura y calidad garantizada.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
