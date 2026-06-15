// src/components/layout/LocationSection.tsx
"use client";
import React from "react";
import Section from "@/components/layout/Section";
import { MapPin, Clock, Navigation, Award } from "lucide-react";
import { siteConfig } from "@/lib/site/siteConfig";

export default function LocationSection() {
  const ADDRESS = siteConfig?.brand.address || "Doctor Planas 2551";
  const CITY = "Chajarí, Entre Ríos";
  const MAPS_URL = siteConfig?.features?.whatsappNumber
    ? `https://wa.me/${siteConfig.features.whatsappNumber}`
    : "https://maps.app.goo.gl/xerrVr6oTSyKxDfw5";

  return (
    <Section
      id="ubicacion"
      className="bg-[#FAFAFA] pt-8 pb-20 flex flex-col items-center w-full overflow-hidden mx-auto"
      height="content"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        {/* --- ENCABEZADO --- */}
        <div className="text-left px-1">
          <span className="text-[10px] sm:text-xs font-bold text-[#71717A] uppercase tracking-wider">
            Visítanos
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#18181B] tracking-tight mt-0.5">
            Nuestro Lugar
          </h2>
        </div>

        {/* --- Layout de dos columnas para pantallas grandes --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* --- MAPA & UBICACIÓN --- */}
          <div className="bg-white rounded-3xl border border-criollo-border shadow-[0_2px_8px_rgba(0,0,0,0.01)] overflow-hidden h-full flex flex-col justify-between">
            {/* Mapa minimalista */}
            <div
              onClick={() => window.open(MAPS_URL, "_blank")}
              className="relative aspect-[21/10] md:aspect-[16/8] w-full bg-neutral-100 cursor-pointer group border-b border-criollo-border"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-50">
                <span className="text-[11px] uppercase tracking-tight text-[#71717A] font-bold bg-white px-3 py-1.5 rounded-xl border border-criollo-border shadow-sm group-hover:bg-neutral-50 transition-colors">
                  Ver en el mapa
                </span>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="p-4 flex flex-col gap-4 flex-1 justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-neutral-50 p-2.5 rounded-2xl text-[#18181B] border border-criollo-border shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-[#18181B] tracking-tight truncate">
                    {ADDRESS}
                  </p>
                  <p className="text-[11px] text-[#71717A] font-medium tracking-tight mt-0.5">
                    {CITY}
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.open(MAPS_URL, "_blank")}
                className="flex items-center justify-center gap-2 h-11 w-full bg-[#18181B] text-white rounded-2xl font-semibold text-xs tracking-tight shadow-sm hover:bg-[#18181B]/95 transition-all active:scale-[0.99]"
              >
                CÓMO LLEGAR <Navigation className="size-3.5 fill-white" />
              </button>
            </div>
          </div>

          {/* --- DETALLES DE SERVICIO --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3 h-full">
            <div className="flex items-start gap-3 p-4 bg-white border border-criollo-border rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-full">
              <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-100 shrink-0 text-[#18181B]">
                <Clock className="size-4" />
              </div>
              <div>
                <p className="font-bold text-xs sm:text-sm text-[#18181B] tracking-tight">
                  Horarios de atención
                </p>
                <p className="text-[11px] sm:text-xs text-[#71717A] mt-1 leading-relaxed font-medium">
                  Abierto todos los días
                  <br />
                  <span className="font-bold text-[#18181B]">
                    {siteConfig?.features?.openingHours ||
                      "11:30 - 14:30 | 19:30 - 23:30"}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-criollo-border rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] h-full">
              <div className="bg-neutral-50 p-2 rounded-xl border border-neutral-100 shrink-0 text-[#18181B]">
                <Award className="size-4" />
              </div>
              <div>
                <p className="font-bold text-xs sm:text-sm text-[#18181B] tracking-tight">
                  La Promesa
                </p>
                <p className="text-[11px] sm:text-xs text-[#71717A] mt-1 leading-relaxed font-medium">
                  Cocina artesanal de autor.
                  <br />
                  <span className="font-bold text-[#18181B]">
                    Frescura y calidad garantizada.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
