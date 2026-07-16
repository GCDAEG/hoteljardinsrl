"use client";

import React from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface NavSection {
  id: string;
  label: string;
}

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
}) => {
  const lenis = useLenis();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (id: string) => {
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
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-20 hidden lg:flex items-center bg-white border-b border-stone-100 shadow-[0_2px_15px_-3px_rgba(28,53,45,0.03)] font-sans">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center h-full">
        {/* LOGO - icon.png + Sacramento para "Hotel Jardín" */}
        <Link
          href="/"
          className="flex items-center gap-2.5 active:opacity-90 transition-opacity"
        >
          <img
            src="/icon.png"
            alt="Hotel Jardín Icono"
            className="w-11 h-11 object-contain"
          />
          <div className="flex flex-col items-start justify-center -space-y-2.5">
            <span className="font-cursive text-4xl text-[#1c352d] antialiased">
              Hotel Jardín
            </span>
            <span className="text-[8px] tracking-[0.3em] font-sans font-bold text-stone-400 uppercase pl-0.5">
              Gualeguay
            </span>
          </div>
        </Link>

        {/* NAVEGACIÓN - Secciones solicitadas */}
        <div className="flex items-center gap-5 xl:gap-8">
          {sections.map((s) => {
            const isActive = activeSection === s.id && pathname === "/";
            return (
              <button
                key={s.id}
                onClick={() => handleNavigation(s.id)}
                className={cn(
                  "text-[8px] lg:text-[13px] font-medium tracking-wide transition-all duration-300 relative py-2",
                  isActive
                    ? "text-[#1c352d] font-semibold"
                    : "text-stone-500 hover:text-[#1c352d]",
                )}
              >
                {s.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1c352d] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* ACCIONES - Botón verde "WhatsApp" */}
        <div className="flex items-center">
          <a
            href="https://wa.me/5493444443617?text=Hola!%20Me%20gustaría%20consultar%20disponibilidad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm transition-all duration-300 active:scale-[0.98]"
          >
            <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.66.986 3.294 1.489 5.34 1.491 5.482 0 9.94-4.46 9.943-9.94.001-2.654-1.02-5.152-2.877-7.01C17.19 1.83 14.695.808 12.01.808c-5.486 0-9.945 4.46-9.949 9.943-.001 2.014.501 3.66 1.498 5.32l-.991 3.616 3.71-.977z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default DesktopMenu;
