"use client";

import React from "react";
import { Play } from "lucide-react";

const INSTAGRAM_REEL = "https://www.instagram.com/reel/DGzUiyssIGJ/";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full bg-stone-50/70 py-24 md:py-32 flex justify-center border-b border-stone-100"
    >
      <div className="w-full max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Imagen */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-stone-200 shadow-sm group">
              <img
                src="https://i.postimg.cc/xd0t02yd/Gemini-Generated-Image-rns8kfrns8kfrns8.png"
                alt="Hotel Jardín"
                className="w-full aspect-[4/3] lg:aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Botón Play */}
              <a
                href={INSTAGRAM_REEL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110">
                  <Play className="w-8 h-8 text-[#1c352d] fill-[#1c352d] ml-1" />
                </div>
              </a>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7">
            <span className="uppercase tracking-[0.35em] text-[11px] font-bold text-[#1c352d]/60">
              Nuestra historia
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-[#1c352d] leading-tight">
              Más de 30 años
              <br />
              recibiendo huéspedes
              <br />
              en Gualeguay
            </h2>

            <div className="mt-8 space-y-6 text-stone-600 leading-8 max-w-xl">
              <p>
                Desde hace más de tres décadas, Hotel Jardín recibe a turistas,
                familias y viajeros que buscan una estadía cómoda, una atención
                cercana y una excelente ubicación dentro de la ciudad.
              </p>

              <p>
                Con el paso de los años seguimos creciendo, manteniendo el mismo
                compromiso de brindar un lugar cálido donde cada huésped se
                sienta como en casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
