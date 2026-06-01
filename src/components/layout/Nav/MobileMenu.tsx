"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import {
  X,
  Menu,
  ChevronRight,
  ChefHat,
  Clock,
  MapPin,
} from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    // Un retraso mínimo para permitir que el menú comience a cerrarse de inmediato antes del scroll
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -80, duration: 0.8 });
    }, 150);
  };

  return (
    <div className="flex w-full justify-center relative z-[100] max-w-2xl lg:max-w-3xl">
      {/* --- NAVBAR MÓVIL --- */}
      <nav className="relative w-full h-20 z-[100] flex items-center px-4 bg-criollo-bg/90 backdrop-blur-md border-b-2 border-criollo-border shadow-sm">
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-3 active:scale-95 transition-transform"
            onClick={() => setOpen(false)}
          >
            <div className="overflow-hidden h-full w-20">
              <img src="/icon.png" alt="Alma Criolla" className="size-full object-contain" />
            </div>
            {/* <div className="flex flex-col">
              <span className="text-2xl font-serif font-black tracking-tight leading-none text-criollo-text">
                Alma Criolla
                <span className="text-criollo-primary block text-[10px] font-sans font-bold tracking-[0.25em] mt-1.5 uppercase">
                  Tradición Campera
                </span>
              </span>
            </div> */}
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="size-12 rounded-xl bg-white text-criollo-suela border-2 border-criollo-border shadow-sm hover:border-criollo-primary/40 active:translate-y-0.5 transition-all"
          >
            <Menu className="size-7" strokeWidth={2.5} />
          </Button>
        </div>
      </nav>

      {/* --- MENÚ LATERAL (SIDE DRAWER FLUIDO CON CSS NATIVO) --- */}
      {/* Backdrop de fondo */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[110] bg-criollo-text/30 backdrop-blur-sm min-h-screen transition-opacity duration-300 pointer-events-none opacity-0",
          open && "opacity-100 pointer-events-auto"
        )}
      />

      {/* Panel del Contenedor */}
      <div
  className={cn(
    "fixed top-0 right-0 h-dvh w-[85%] max-w-xs z-[120] bg-criollo-bg flex flex-col rounded-l-[2rem] shadow-[-10px_0_40px_rgba(0,0,0,0.1)] border-l-4 border-criollo-primary/20 transition-transform duration-300 ease-out translate-x-full",
    open && "translate-x-0"
  )}
>
  {/* --- HEADER MENÚ CON BACKGROUND COMPLETO --- */}
  {/* Agregamos rounded-tl-[2rem] para que la imagen respete la curvatura del panel */}
  <div className="relative h-32 w-full flex items-center justify-end px-6 border-b-2 border-criollo-border overflow-hidden rounded-tl-[2rem]">
    
    {/* Imagen de fondo absoluta */}
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <img 
        src="https://i.postimg.cc/h41c45fc/almacriolla.jpg" 
        alt="Alma Criolla Fondo" 
        className="w-full h-full object-cover object-center" 
      />
      {/* Overlay mínimo para control de contraste */}
      <div className="absolute inset-0 bg-black/5" />
    </div>

    {/* Botón de cierre flotante */}
    <button
      onClick={() => setOpen(false)}
      className="relative z-10 size-11 flex items-center justify-center bg-white text-criollo-muted rounded-xl border-2 border-criollo-border shadow-sm active:scale-90 transition-transform hover:text-criollo-primary"
    >
      <X className="size-6" strokeWidth={2.5} />
    </button>
  </div>

  {/* --- LISTADO DE CATEGORÍAS (NATIVO Y FLUIDO) --- */}
  <nav className="flex-1 px-4 py-6 overflow-y-auto no-scrollbar">
    <ul className="space-y-3">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id && pathname === "/";
        return (
          <li key={sec.id}>
            <button
              onClick={() => handleAction(sec.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 rounded-xl transition-all duration-200 border-2 font-sans text-base font-bold",
                isActive
                  ? "bg-criollo-primary text-white border-criollo-primary shadow-lg shadow-criollo-primary/20 translate-x-2"
                  : "bg-white text-criollo-text border-criollo-border shadow-sm hover:border-criollo-atardecer hover:text-criollo-primary",
              )}
            >
              <span className={cn(isActive ? "font-serif text-lg tracking-tight" : "font-sans")}>
                {sec.label}
              </span>
              {isActive ? (
                <ChefHat className="size-5 text-white" strokeWidth={2.5} />
              ) : (
                <ChevronRight
                  className="size-5 text-criollo-border transition-colors group-hover:text-criollo-atardecer"
                  strokeWidth={3}
                />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  </nav>

  {/* --- INFO Y DATOS ÚTILES (ESTILO TARJETA INFERIOR) --- */}
  <div className="p-6 bg-white border-t-2 border-criollo-border space-y-5 rounded-bl-[2rem]">
    {/* Horarios */}
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-xl bg-criollo-bg flex items-center justify-center shrink-0 border-2 border-criollo-border">
        <Clock className="size-6 text-criollo-atardecer" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] text-criollo-muted font-black uppercase tracking-widest leading-none mb-1">
          Cocina Activa
        </p>
        <p className="text-sm font-bold text-criollo-text font-sans">
          11:30-14:30 | 19:30-23:30
        </p>
      </div>
    </div>

    {/* Ubicación */}
    <div className="flex items-center gap-4">
      <div className="size-12 rounded-xl bg-criollo-primary/10 flex items-center justify-center shrink-0 border-2 border-criollo-primary/20">
        <MapPin className="size-6 text-criollo-primary" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col">
        <p className="text-[10px] text-criollo-muted font-black uppercase tracking-widest leading-none mb-1">
          Punto de Encuentro
        </p>
        <p className="text-sm font-bold text-criollo-text font-sans truncate max-w-[180px]">
          Alberdi 2921, Chajarí 3228
        </p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default MobileMenu;