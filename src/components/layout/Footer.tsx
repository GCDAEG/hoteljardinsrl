"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export function FooterSection() {
  const lenis = useLenis();

  const handleScrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.2 });
  };

  return (
    <footer className="w-full bg-[#F7F8F6] border-t border-stone-100 py-16 md:py-20 flex justify-center font-sans">
      <div className="w-full max-w-[1200px] px-6 flex flex-col">
        {/* Bloque Principal del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-stone-200/60 items-start">
          {/* Columna 1: Logo e Identidad */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 active:opacity-90 transition-opacity"
            >
              <img
                src="/icon.png"
                alt="Hotel Jardín Icono"
                className="size-14 object-contain"
              />
              <div className="flex flex-col items-start justify-center -space-y-2.5  select-none">
                <span className="font-cursive text-4xl text-[#1c352d] leading-none antialiased">
                  Hotel Jardín
                </span>
                <span className="text-[8px] tracking-[0.3em] font-sans font-bold text-stone-400 uppercase pl-0.5">
                  Gualeguay
                </span>
              </div>
            </div>

            <p className="text-stone-500 text-sm max-w-sm leading-relaxed font-light mt-2">
              Un remanso de descanso y hospitalidad en el corazón de Entre Ríos.
              Diseñado para brindarte una estadía silenciosa, impecable y
              reconfortante.
            </p>
          </div>

          {/* Columna 2: Información de Contacto */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="font-sans text-[11px] tracking-[0.25em] font-bold text-stone-400 uppercase">
              Contacto
            </h4>

            <div className="flex flex-col gap-3 text-sm text-stone-600">
              <a
                href="https://maps.google.com/?q=Hotel+Jardin+Gualeguay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#1c352d] transition-colors group"
              >
                <div className="p-2 bg-white rounded-xl border border-stone-100 shadow-xs group-hover:bg-[#1c352d]/5 transition-colors">
                  <MapPin className="w-4 h-4 text-[#1c352d]" />
                </div>
                <span>Gualeguay, Entre Ríos, Argentina</span>
              </a>

              <a
                href="https://wa.me/5493444443617?text=Hola!%20Me%20gustaría%20consultar%20disponibilidad."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#1c352d] transition-colors group"
              >
                <div className="p-2 bg-white rounded-xl border border-stone-100 shadow-xs group-hover:bg-[#1c352d]/5 transition-colors">
                  <Phone className="w-4 h-4 text-[#1c352d]" />
                </div>
                <span>+54 9 3444 44-3617</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
            <h4 className="font-sans text-[11px] tracking-[0.25em] font-bold text-stone-400 uppercase">
              Seguinos
            </h4>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/hoteljardingualeguay"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-[#1c352d] text-stone-600 hover:text-white rounded-full border border-stone-100 shadow-xs transition-all duration-300"
                aria-label="Instagram"
              >
                <BsInstagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.facebook.com/hoteljardinsrlgualeguay"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-[#1c352d] text-stone-600 hover:text-white rounded-full border border-stone-100 shadow-xs transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bloque de Créditos e Info Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-xs text-stone-400 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} Hotel Jardín. Todos los derechos
              reservados.
            </span>
            <span className="hidden sm:inline text-stone-200">|</span>
            <a
              href="https://hoteljardinsrl.com.ar"
              className="hover:text-[#1c352d] transition-colors font-medium"
            >
              hoteljardinsrl.com.ar
            </a>
          </div>

          {/* Botón sutil de volver arriba */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-[#1c352d] text-xs tracking-wider uppercase font-semibold transition-colors py-2 focus:outline-none"
            aria-label="Volver arriba"
          >
            <span>Subir</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
