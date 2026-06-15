// src/components/layout/MobileMenu.tsx
"use client";

import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import { X, Menu, ChevronRight } from "lucide-react";
import { useLenis } from "lenis/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site/siteConfig";

interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ sections, activeSection }) => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -80, duration: 0.6 });
    }, 150);
  };

  return (
    <div className="flex w-full justify-center relative z-[100] mx-auto">
      {/* --- NAVBAR MÓVIL --- */}
      <nav
        className={cn(
          "fixed top-0 w-full h-16 z-[100] flex items-center px-4 sm:px-6 lg:px-8 transition-all duration-300 border-b",
          isScrolled
            ? "bg-[#FAFAFA]/90 backdrop-blur-md border-criollo-border shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
            : "bg-transparent border-transparent",
        )}
      >
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo fluido premium */}
          <div
            className={cn(
              "flex items-center gap-2 transition-all duration-300",
              isScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none",
            )}
          >
            {siteConfig?.brand.logo && (
              <img
                src={siteConfig.brand.logo}
                alt={siteConfig?.brand.name || "Logo"}
                className="size-9 rounded-xl object-cover border border-criollo-border shadow-sm"
              />
            )}
            <span className="font-extrabold text-xs sm:text-sm text-[#18181B] tracking-tight">
              {siteConfig?.brand.name || "Menú"}
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className={cn(
              "size-10 rounded-xl transition-all duration-200 ml-auto active:scale-95 border",
              isScrolled
                ? "bg-white text-[#18181B] border-criollo-border shadow-sm hover:bg-neutral-50"
                : "bg-black/20 text-white backdrop-blur-md border-white/10 hover:bg-black/30",
            )}
            aria-label="Abrir navegación"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </nav>

      {/* --- BACKDROP --- */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[110] bg-black/30 backdrop-blur-xs transition-opacity duration-300 pointer-events-none",
          open ? "opacity-100 pointer-events-auto" : "opacity-0",
        )}
      />

      {/* --- SIDE DRAWER --- */}
      <div
        className={cn(
          "fixed top-0 right-0 h-dvh w-[80%] max-w-[320px] md:max-w-[360px] z-[120] bg-[#FAFAFA] flex flex-col shadow-xl border-l border-criollo-border transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-criollo-border bg-white">
          <span className="font-extrabold text-sm md:text-base text-[#18181B] tracking-tight">
            Navegación
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-[#71717A] hover:text-[#18181B] p-1.5 rounded-xl hover:bg-neutral-50 transition-colors"
            aria-label="Cerrar navegación"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1.5">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <li key={sec.id}>
                  <button
                    onClick={() => handleAction(sec.id)}
                    className={cn(
                      "w-full flex items-center justify-between p-3.5 rounded-2xl font-bold text-xs sm:text-sm tracking-tight transition-all border text-left",
                      isActive
                        ? "bg-white border-[#18181B] text-[#18181B] shadow-sm"
                        : "bg-transparent border-transparent text-[#71717A] hover:text-[#18181B] hover:bg-neutral-50",
                    )}
                  >
                    <span>{sec.label}</span>
                    <ChevronRight
                      className={cn(
                        "size-4 transition-transform",
                        isActive
                          ? "text-[#18181B] translate-x-0.5"
                          : "text-neutral-300",
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
