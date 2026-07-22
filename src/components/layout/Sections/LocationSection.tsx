"use client";

import React from "react";
import { MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site/siteConfig";

const LocationSection = () => {
  // Reemplazar por la dirección física exacta del Hotel Ejemplo en Gualeguay
  const address = siteConfig.brand.address;
  const googleMapsUrl = `https://maps.app.goo.gl/qjxE2Ajz9TzzPBMq5`;

  return (
    <section
      id="location"
      className="w-full bg-white py-24 md:py-32 flex justify-center border-b border-stone-50"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        {/* Encabezado de la Sección */}
        <div className="max-w-2xl text-center mb-16 md:mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#1c352d]/60 uppercase mb-3 block">
            Ubicación
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1c352d] leading-tight">
            En el corazón de Gualeguay
          </h2>
          <p className="font-sans text-stone-500 text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Ubicado en una zona residencial y tranquila, con accesibilidad
            directa a los puntos de interés de la ciudad, ideal tanto para
            viajes de descanso como de trabajo.
          </p>
        </div>

        {/* Grilla: 1 columna en móvil, 2 en desktop para mantener el balance visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 w-full items-center">
          {/* Columna Izquierda: Mapa elegante enmarcado (No gigante) */}
          <div className="lg:col-span-7 w-full">
            <div className="relative aspect-video lg:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-stone-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] bg-stone-50">
              {/* iframe del mapa interactivo de Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107066.69283230645!2d-58.63100766646931!3d-33.00814771676478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95baa828f3333543%3A0xa95f93d6a79497c1!2zR3VhbGVndWF5Y2jDuiwgRW50cmUgUsOtb3M!5e0!3m2!1ses-419!2sar!4v1784751167099!5m2!1ses-419!2sar"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de información y botones */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center p-2 md:p-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-stone-50 text-[#1c352d] rounded-2xl border border-stone-100">
                <MapPin className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-[#1c352d] mb-1">
                  Dirección
                </h3>
                <p className="font-sans text-stone-500 text-sm md:text-base leading-relaxed">
                  {address}
                </p>
              </div>
            </div>

            {/* Botón Principal Premium "Cómo llegar" (Altura 56px, rounded-full, sombra suave) */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-center justify-center gap-3
                h-[56px] px-8 w-full sm:w-auto
                bg-[#1c352d] hover:bg-[#152822] 
                text-white font-sans font-semibold text-base
                rounded-[9999px] shadow-[0_4px_18px_rgba(28,53,45,0.08)] hover:shadow-[0_6px_22px_rgba(28,53,45,0.12)]
                transition-all duration-250 ease-in-out
                active:scale-[0.99]
              "
            >
              <Navigation className="w-5 h-5 text-stone-200 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span className="font-medium tracking-normal">Cómo llegar</span>
            </a>

            {/* Llamado discreto a WhatsApp abajo */}
            <div className="mt-8 flex items-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <a
                href="https://wa.me/549123456789?text=Hola!%20Estoy%20viajando%20al%20hotel%20y%20quería%20consultar%20indicaciones%20para%20ingresar."
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs font-semibold text-stone-500 hover:text-[#1c352d] transition-colors"
              >
                ¿Necesitás indicaciones? Consultanos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
