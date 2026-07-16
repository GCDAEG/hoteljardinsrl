"use client";

import React from "react";

interface CTAButtonBaseProps {
  ctaRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  href?: string;
}

/**
 * Botón Principal de Altísima Elegancia para el Hero o Secciones Clave
 */
export function HeroCTAButton({
  ctaRef,
  className = "",
  href = "https://wa.me/5493444443617?text=Hola!%20Me%20gustaría%20consultar%20disponibilidad%20en%20Hotel%20Jardín.",
}: CTAButtonBaseProps) {
  return (
    <div
      ref={ctaRef}
      className={`relative flex flex-col items-center gap-3 w-full sm:w-auto ${className}`}
    >
      {/* Botón Principal (56px de alto, esquinas infinitas, sombra sutil) */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-3
          h-[56px] px-8 w-full sm:w-auto
          bg-[#1c352d] hover:bg-[#152822] 
          text-white font-sans font-semibold text-base
          rounded-[9999px] shadow-[0_4px_18px_rgba(28,53,45,0.08)] hover:shadow-[0_6px_22px_rgba(28,53,45,0.12)]
          transition-all duration-250 ease-in-out
          active:scale-[0.99]"
      >
        {/* Isotipo ligeramente más grande que el texto */}
        <svg
          className="w-5.5 h-5.5 fill-current text-[#25D366] transition-transform duration-250 group-hover:scale-105"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.294 1.489 5.34 1.491 5.482 0 9.94-4.46 9.943-9.94.001-2.654-1.02-5.152-2.877-7.01C17.19 1.83 14.695.808 12.01.808c-5.486 0-9.945 4.46-9.949 9.943-.001 2.014.501 3.66 1.498 5.32l-.991 3.616 3.71-.977z" />
        </svg>
        <span className="font-medium tracking-normal select-none">
          Consultar disponibilidad
        </span>
      </a>

      {/* Línea divisoria elegante hacia WhatsApp */}
      <div className="flex items-center justify-center w-full max-w-[280px] gap-3 px-2 select-none pointer-events-none">
        <span className="h-px bg-stone-200/60 flex-1" />
        <span className="text-[11px] font-medium tracking-[0.1em] text-stone-400 uppercase">
          WhatsApp
        </span>
        <span className="h-px bg-stone-200/60 flex-1" />
      </div>
    </div>
  );
}

/**
 * Variante Simple de Alta Gama (Para habitaciones y tarjetas)
 */
export function SimpleCTAButton({
  className = "",
  href = "https://wa.me/5493444443617?text=Hola!%20Me%20gustaría%20consultar%20tarifas%20para%20una%20habitación.",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3
        h-[52px] px-6 w-full
        bg-white hover:bg-[#1c352d] 
        border border-stone-200 hover:border-transparent
        text-stone-700 hover:text-white font-sans font-medium text-sm
        rounded-[9999px] shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(28,53,45,0.06)]
        transition-all duration-250 ease-in-out
        active:scale-[0.99]
        ${className}`}
    >
      <svg
        className="w-4.5 h-4.5 fill-current text-[#25D366] group-hover:text-white transition-colors duration-250"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.294 1.489 5.34 1.491 5.482 0 9.94-4.46 9.943-9.94.001-2.654-1.02-5.152-2.877-7.01C17.19 1.83 14.695.808 12.01.808c-5.486 0-9.945 4.46-9.949 9.943-.001 2.014.501 3.66 1.498 5.32l-.991 3.616 3.71-.977z" />
      </svg>
      <span className="tracking-normal">Consultar disponibilidad</span>
    </a>
  );
}
