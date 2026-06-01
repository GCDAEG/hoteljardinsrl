"use client";
import React from "react";
import {
  Instagram,
  Facebook,
  MapPin,
  Heart,
  ArrowUpCircle,
  MessageCircle,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { sections } from "@/lib/sections";
import Link from "next/link";
import { siteConfig } from "@/lib/site/siteConfig";

export function FooterSection() {
  const lenis = useLenis();

  // Datos de Alma Criolla Bodegón
  const WHATSAPP_NUMBER = "549XXXXXXXXXX"; // ← Reemplaza con el número real

  return (
    <footer className="bg-[#0f0c08] text-white pt-20 pb-12 px-6 flex flex-col items-center relative overflow-hidden max-w-2xl lg:max-w-3xl w-full mx-auto">
      {/* Detalle rústico superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[3px] bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />

      <div className="z-10 flex flex-col items-center max-w-xl w-full">
        {/* Branding */}
        <div className="flex flex-col items-center gap-4 mb-14">
          <div className="size-32 rounded-2xl flex items-center justify-center border border-amber-900/30 bg-black/30">
            <img 
              src={siteConfig.brand.logo} 
              alt="Alma Criolla Bodegón" 
              className="drop-shadow-md"
            />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold tracking-tighter italic text-amber-100">
              Alma Criolla
            </h2>
            <p className="text-amber-600 text-sm tracking-[0.25em] font-medium mt-1">
              BODEGÓN ARGENTINO
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-4 w-full mb-14">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-5 bg-white/[0.04] hover:bg-white/[0.08] p-6 rounded-2xl border border-amber-900/30 hover:border-amber-600/40 transition-all active:scale-[0.98]"
          >
            <div className="size-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/30">
              <MessageCircle
                size={26}
                className="text-[#25D366]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-serif font-semibold text-white">
                Pedir por WhatsApp
              </span>
              <span className="text-sm text-emerald-400 font-medium">
                Respuesta rápida
              </span>
            </div>
          </a>

          {/* Ubicación */}
          <div className="flex items-center gap-5 bg-white/[0.04] p-6 rounded-2xl border border-amber-900/30">
            <div className="size-14 rounded-2xl bg-amber-600/10 flex items-center justify-center shrink-0 border border-amber-600/30">
              <MapPin size={26} className="text-amber-600" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-serif font-semibold text-white">
                Visítanos
              </span>
              <span className="text-sm text-amber-500/80">
                Alberdi 2921, Chajarí 3228 • Entre Ríos
              </span>
            </div>
          </div>
        </div>

        {/* Navegación Rápida */}
        <nav className="mb-14 w-full">
          <ul className="flex flex-wrap justify-center gap-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() =>
                    lenis?.scrollTo(`#${section.id}`, { offset: -100 })
                  }
                  className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-amber-400/80 hover:text-amber-100 transition-all border border-amber-900/40 hover:border-amber-600/40 rounded-xl bg-white/[0.02] hover:bg-white/[0.04]"
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Redes Sociales */}
        <div className="flex gap-6 mb-20">
          <Link
            href="https://www.instagram.com/almacriolla.bodegon/"
            target="_blank"
            className="size-16 rounded-2xl bg-white/[0.04] hover:bg-gradient-to-br hover:from-pink-500 hover:to-amber-500 text-slate-400 hover:text-white flex items-center justify-center transition-all border border-amber-900/30 hover:border-transparent group"
          >
            <Instagram className="size-7 group-hover:scale-110 transition-transform" />
          </Link>

          <Link
            href="#"
            className="size-16 rounded-2xl bg-white/[0.04] hover:bg-blue-600/90 text-slate-400 hover:text-white flex items-center justify-center transition-all border border-amber-900/30 hover:border-transparent group"
          >
            <Facebook className="size-7 group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="w-full max-w-2xl border-t border-amber-900/30 pt-12 flex flex-col items-center gap-8">
        <button
          onClick={() => lenis?.scrollTo(0)}
          className="flex flex-col items-center gap-3 text-amber-700 hover:text-amber-400 transition-all group"
        >
          <ArrowUpCircle
            size={36}
            strokeWidth={1.5}
            className="group-hover:-translate-y-2 transition-transform duration-500"
          />
          <span className="text-xs font-bold uppercase tracking-widest">
            Volver al Inicio
          </span>
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm font-light text-amber-500/70 flex items-center gap-2">
            Hecho con{" "}
            <Heart
              size={14}
              className="text-red-500 fill-red-500 animate-pulse"
            />{" "}
            en Entre Ríos
          </p>
          
          <div className="space-y-1">
            <p className="text-[10px] font-medium text-amber-900/70 tracking-widest">
              © {new Date().getFullYear()} ALMA CRIOLLA BODEGÓN
            </p>
            <p className="text-[10px] text-amber-950/60">
              Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}