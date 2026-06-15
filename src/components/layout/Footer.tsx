// src/components/layout/FooterSection.tsx
"use client";

import React from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import { BsInstagram } from "react-icons/bs";
import { siteConfig } from "@/lib/site/siteConfig";

export function FooterSection() {
  const lenis = useLenis();
  const WHATSAPP_NUMBER =
    siteConfig?.features.whatsappNumber || "549XXXXXXXXXX";

  return (
    <footer className="w-full bg-white border-t border-criollo-border pt-12 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center mx-auto">
      <div className="w-full max-w-7xl flex flex-col items-center gap-8 md:gap-10">
        {/* Layout superior adaptable para escritorio */}
        <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:items-start gap-8 md:gap-4 text-center md:text-left">
          {/* Branding Minimalista */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-extrabold text-[#18181B] tracking-tight">
              {siteConfig?.brand.name || "Santa Gula"}
            </h2>
            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
              Rotisería
            </p>
          </div>

          {/* Navegación Rápida */}
          <nav className="w-full md:w-auto px-2 md:px-0">
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() =>
                      lenis?.scrollTo(`#${section.id}`, { offset: -80 })
                    }
                    className="text-xs font-semibold text-[#71717A] hover:text-[#18181B] tracking-tight transition-colors"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Acciones de Contacto Premium & Redes */}
          <div className="w-full md:w-auto max-w-xs md:max-w-none flex flex-col sm:flex-row md:flex-col items-center gap-4 px-2 md:px-0">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#18181B] text-white h-12 rounded-2xl font-semibold text-sm tracking-tight w-full md:min-w-[220px] hover:bg-[#18181B]/95 transition-all shadow-sm active:scale-[0.99]"
            >
              <MessageCircle className="size-4 fill-white/10" />
              <span>Pedir por WhatsApp</span>
            </a>

            {/* Redes Sociales */}
            <div className="flex gap-6 shrink-0">
              <a
                href={"https://www.instagram.com/example"}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-[#18181B] p-2 bg-neutral-50 rounded-xl border border-neutral-100 transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="w-full border-t border-neutral-100 pt-6 flex flex-col sm:flex-row sm:justify-between items-center gap-5">
          <button
            onClick={() => lenis?.scrollTo(0)}
            className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-[#18181B] tracking-tight transition-colors sm:order-2"
          >
            <span>Volver arriba</span>
            <ArrowUp className="size-3.5" />
          </button>

          <div className="text-[10px] font-semibold text-neutral-400 tracking-tight text-center sm:text-left leading-relaxed sm:order-1">
            <p>
              © {new Date().getFullYear()}{" "}
              {siteConfig?.brand.name || "Santa Gula Rotisería"}
            </p>
            <p className="text-[9px] text-neutral-400/80 mt-0.5">
              Chajarí, Entre Ríos
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
