"use client";

import React from "react";
import { useLenis } from "lenis/react";
import { HeroCTAButton } from "@/components/ui/CTAButton";
import { siteConfig } from "@/lib/site/siteConfig";

const HeroSection = () => {
  const lenis = useLenis();

  const handleScroll = (id: string) => {
    lenis?.scrollTo(`#${id}`, { offset: -80, duration: 1.0 });
  };

  return (
    <section
      id="hero"
      className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Imagen de fondo grande con overlay oscuro sutil */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://i.postimg.cc/SR6gb8Vb/Gemini-Generated-Image-hoehm3hoehm3hoeh.png"
          alt="hero ejemplo"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay oscuro sutil para la perfecta legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido Centrado */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <div className="max-w-3xl flex flex-col items-center gap-5 md:gap-7">
          {/* Subtítulo superior de trayectoria (30 años) */}
          <span className="font-sans text-xs sm:text-sm tracking-[0.25em] font-medium text-stone-200/90 uppercase">
            Más de 50 años recibiendo huéspedes en {siteConfig.brand.city}
          </span>

          {/* Título Principal */}
          <h1 className="text-white text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight leading-none mt-2">
            <span className="font-cursive block sm:inline text-6xl sm:text-8xl lg:text-9xl text-[#f7f8f6] antialiased">
              {siteConfig.brand.name}
            </span>
          </h1>

          {/* Subtítulo Corto */}
          <p className="text-stone-100/90 text-base sm:text-lg lg:text-xl font-light font-sans max-w-xl leading-relaxed text-balance">
            {siteConfig.brand.suffix}
          </p>

          {/* Botón de Conversión Destacado de WhatsApp */}
          <HeroCTAButton></HeroCTAButton>
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full sm:w-auto">
            <a
              href="https://wa.me/5493444XXXXXX?text=Hola!%20Me%20gustaría%20consultar%20disponibilidad."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm tracking-wider uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-center flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.294 1.489 5.34 1.491 5.482 0 9.94-4.46 9.943-9.94.001-2.654-1.02-5.152-2.877-7.01C17.19 1.83 14.695.808 12.01.808c-5.486 0-9.945 4.46-9.949 9.943-.001 2.014.501 3.66 1.498 5.32l-.991 3.616 3.71-.977z" />
              </svg>
              <span>Consultar disponibilidad</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
