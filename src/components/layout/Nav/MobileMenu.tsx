"use client";

import React, { useState, useEffect } from "react";
import { X, Menu, ArrowRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface NavSection {
  id: string;
  label: string;
}

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      if (pathname !== "/") {
        router.push(`/#${id}`);
      } else if (id === "hero") {
        lenis?.scrollTo(`#${id}`, {
          offset: -80, // Altura exacta de la barra (80px)
          duration: 1.0,
        });
      } else {
        lenis?.scrollTo(`#${id}`, {
          // offset: -10, // Altura exacta de la barra (80px)
          duration: 1.0,
        });
      }
    }, 250);
  };

  return (
    <div className="flex lg:hidden w-full justify-center relative z-50 font-sans">
      {/* --- NAVBAR MÓVIL (80px / h-20) --- */}
      <nav
        className={cn(
          "fixed top-0 w-full h-20 z-50 flex items-center px-6 transition-all duration-300",
          isScrolled
            ? "bg-white border-b border-stone-100 shadow-sm"
            : "bg-white border-b border-stone-100/40",
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo con icon.png y Sacramento */}
          <button
            onClick={() => handleAction("hero")}
            className="flex items-center gap-2.5 text-left focus:outline-none"
          >
            <img
              src="/icon.png"
              alt="Hotel Ejemplo Icon"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col items-start justify-center -space-y-2.5">
              <span className="font-cursive text-4xl text-[#1c352d] leading-none antialiased">
                Hotel Ejemplo
              </span>
              <span className="text-[8px] tracking-[0.3em] font-sans font-bold text-stone-400 uppercase pl-0.5">
                Gualeguay
              </span>
            </div>
          </button>

          {/* Botón de Menú con Bordes Suaves */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="h-11 w-11 rounded-xl bg-stone-50 hover:bg-stone-100 text-[#1c352d] border border-stone-100 transition-all"
            aria-label="Abrir menú"
          >
            <Menu className="size-5 stroke-[1.75]" />
          </Button>
        </div>
      </nav>

      {/* --- BACKDROP LUMINOSO --- */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[110] bg-[#1c352d]/10 backdrop-blur-sm transition-opacity duration-300 pointer-events-none",
          open ? "opacity-100 pointer-events-auto" : "opacity-0",
        )}
      />

      {/* --- DRAWER LATERAL --- */}
      <div
        className={cn(
          "fixed top-0 right-0 h-dvh w-[85%] max-w-[340px] z-[120] bg-white flex flex-col border-l border-stone-100 transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Encabezado del Panel */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-stone-100 bg-stone-50/50">
          <div className="flex items-center gap-2">
            <img
              src="/icon.png"
              alt="Hotel Ejemplo Icon"
              className="w-8 h-8 object-contain"
            />
            <span className="font-cursive text-3xl text-[#1c352d] pt-1 leading-none">
              Navegación
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-stone-400 hover:text-[#1c352d] p-2 rounded-xl border border-stone-100 hover:bg-stone-50 transition-all"
            aria-label="Cerrar panel"
          >
            <X className="size-5 stroke-[1.75]" />
          </button>
        </div>

        {/* --- MENU SIMPLE DE SECCIONES --- */}
        <nav className="flex-1 px-6 py-8 overflow-y-auto bg-white">
          <ul className="space-y-2">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <li key={sec.id}>
                  <button
                    onClick={() => handleAction(sec.id)}
                    className={cn(
                      "w-full flex items-center justify-between py-3.5 px-2 rounded-xl text-left transition-all",
                      isActive
                        ? "text-[#1c352d] bg-stone-50 font-semibold font-serif text-lg"
                        : "text-stone-600 hover:text-[#1c352d] hover:bg-stone-50/50 font-sans text-base",
                    )}
                  >
                    <span>{sec.label}</span>
                    <ArrowRight
                      className={cn(
                        "size-4 transition-transform",
                        isActive
                          ? "text-[#1c352d] translate-x-0"
                          : "text-stone-300 opacity-0",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* --- PIE DE DRAWER CON CTA BOTÓN WHATSAPP VERDE --- */}
        <div className="p-6 bg-stone-50 border-t border-stone-100 flex flex-col gap-4">
          <div className="text-center px-2">
            <p className="text-stone-400 text-xs font-sans">
              Comodidad y tranquilidad en Gualeguay.
            </p>
          </div>

          <a
            href="https://wa.me/549123456789?text=Hola!%20Me%20gustaría%20consultar%20disponibilidad."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-semibold text-sm active:scale-[0.98] transition-all duration-300 shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.294 1.489 5.34 1.491 5.482 0 9.94-4.46 9.943-9.94.001-2.654-1.02-5.152-2.877-7.01C17.19 1.83 14.695.808 12.01.808c-5.486 0-9.945 4.46-9.949 9.943-.001 2.014.501 3.66 1.498 5.32l-.991 3.616 3.71-.977z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
