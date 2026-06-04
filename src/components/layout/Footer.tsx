"use client";
import React from "react";
import { Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

export function FooterSection() {
  const lenis = useLenis();
  const WHATSAPP_NUMBER = "549XXXXXXXXXX";

  return (
    <footer className="w-full bg-white border-t border-gula-border pt-16 pb-8 px-6 flex flex-col items-center max-w-5xl">
      <div className="w-full max-w-2xl lg:max-w-5xl flex flex-col items-center text-center gap-12 lg:justify-center">
        {/* Branding Minimalista */}
        <div className="space-y-4 font-lora">
          <h2 className="font-lora text-3xl text-gula-text">Santa Gula</h2>
          <p className="text-[12px] text-gula-muted uppercase tracking-[0.3em]">
            Rotisería
          </p>
        </div>

        {/* Acciones de Contacto Premium */}
        <div className="flex  w-full gap-4 justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 bg-gula-text text-white py-4 rounded-xl font-lora font-bold text-sm tracking-wide lg:max-w-sm w-full hover:bg-gula-primary transition-colors"
          >
            <MessageCircle className="size-5" />
            PEDIR POR WHATSAPP
          </a>
        </div>

        {/* Navegación Rápida */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() =>
                    lenis?.scrollTo(`#${section.id}`, { offset: -80 })
                  }
                  className="text-xs font-bold text-gula-muted hover:text-gula-primary uppercase tracking-widest transition-colors"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes Sociales */}
        <div className="flex gap-8">
          <a
            href="https://www.instagram.com/rotiseriasantagula?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="text-gula-muted hover:text-gula-primary transition-colors"
          >
            <BsInstagram className="size-6" />
          </a>
          {/* <a
            href="#"
            className="text-gula-muted hover:text-gula-primary transition-colors"
          >
            <FaFacebook className="size-6" />
          </a> */}
        </div>

        {/* Sub Footer */}
        <div className="w-full border-t border-gula-border pt-8 flex flex-col items-center gap-6">
          <button
            onClick={() => lenis?.scrollTo(0)}
            className="flex items-center gap-2 text-xs font-bold text-gula-muted uppercase tracking-widest hover:text-gula-primary"
          >
            Volver arriba <ArrowUp className="size-4" />
          </button>

          <div className="text-[10px] text-gula-muted uppercase tracking-widest text-center">
            <p>© {new Date().getFullYear()} Santa Gula Rotisería</p>
            <p className="mt-1">Gualeguaychú, Entre Ríos</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
