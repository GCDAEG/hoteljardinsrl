"use client";
import React, { useState, useEffect } from "react";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { X, Menu, ChevronRight, ChefHat, Clock, MapPin } from "lucide-react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const handleAction = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      lenis?.scrollTo(`#${id}`, { offset: -80, duration: 0.8 });
    }, 150);
  };

  return (
    <div className="flex w-full justify-center relative z-[100]">
      {/* --- NAVBAR MÓVIL (Transiciones CSS para mayor fluidez) --- */}
      <nav
        className={cn(
          "fixed top-0 w-full h-20 z-[100] flex items-center px-4 transition-all max-w-5xl duration-300 border-b",
          isScrolled
            ? "bg-gula-bg border-gula-border"
            : "bg-transparent border-transparent",
        )}
      >
        <div className="w-full flex justify-between items-center max-w-2xl lg:max-w-4xl mx-auto">
          {/* Logo con opacidad CSS simple */}
          <div
            className={cn(
              "flex items-center gap-2 transition-opacity duration-300",
              isScrolled ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <img
              src="/icon.png"
              alt="Santa Gula"
              className="size-20 rounded-full object-cover"
            />
            {/* <span className="font-serif font-bold text-gula-text">
              Santa Gula
            </span> */}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className={cn(
              "size-12 rounded-full transition-colors ml-auto",
              isScrolled
                ? "bg-gula-text text-white"
                : "bg-black/20 text-white backdrop-blur-sm",
            )}
          >
            <Menu className="size-6" strokeWidth={2} />
          </Button>
        </div>
      </nav>

      {/* --- SIDE DRAWER (Transición CSS nativa) --- */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-none",
          open ? "opacity-100 pointer-events-auto" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "fixed top-0 right-0 h-dvh w-[90%] lg:w-[30%] z-[120] bg-gula-bg flex flex-col shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="h-24 flex items-center justify-between px-6 border-b border-gula-border">
          <span className="font-lora text-xl text-gula-text italic">
            Menú Digital
          </span>
          <button onClick={() => setOpen(false)} className="text-gula-text p-2">
            <X className="size-8" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className="space-y-4">
            {sections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => handleAction(sec.id)}
                  className="w-full flex items-center justify-between py-4 border-b border-gula-border/50 font-lora text-xl text-gula-text active:text-gula-primary transition-colors"
                >
                  {sec.label}
                  <ChevronRight className="size-5 opacity-30" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
