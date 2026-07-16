// src/components/menu/CategoryCard.tsx
"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MockCategory } from "@/lib/mock/mockCategories";

interface CategoryCardProps {
  category: MockCategory;
  isActive?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isActive = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const count = category.totalProducts;
  const label = category.name;

  const handleOnClick = () => {
    if (pathname !== "/catalog") {
      router.push(`/catalog?category=${encodeURIComponent(category.name)}`);
    }
  };

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "w-full flex flex-col justify-between p-3.5 xs:p-4 sm:p-5 rounded-[4px] border-2 text-left transition-all relative overflow-hidden group min-h-[140px] xs:min-h-[150px] sm:min-h-[160px] select-none",
        isActive
          ? "bg-[#1a1a1a] border-black text-white shadow-[4px_4px_0px_0px_#e63946] translate-x-[-2px] translate-y-[-2px]"
          : "bg-white border-neutral-300 text-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:border-[#1a1a1a] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
      )}
    >
      {/* Contenedor principal */}
      <div className="relative z-20 flex flex-col justify-between h-full w-full">
        {/* Contenedor del Ícono Técnico / Contador */}
        <div className="flex items-start justify-between w-full gap-2 mb-4">
          <span
            className={cn(
              "font-mono text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2 py-0.5 rounded-[2px] border shrink-0 tracking-tight whitespace-nowrap",
              isActive
                ? "bg-neutral-800 border-neutral-700 text-neutral-400"
                : "bg-neutral-100 border-neutral-200 text-neutral-600",
            )}
          >
            {count} {count === 1 ? "REP" : "REPS"}
          </span>
        </div>

        {/* Título de la Categoría */}
        <div className="mt-auto w-full">
          <h3
            className={cn(
              "font-mono font-black text-[11px] sm:text-xs md:text-sm tracking-wide uppercase leading-tight sm:leading-snug break-words transition-colors",
              isActive ? "text-white" : "text-[#1a1a1a]",
            )}
          >
            {label}
          </h3>

          {/* Línea decorativa */}
          <div
            className={cn(
              "h-1 w-6 sm:w-8 mt-2.5 sm:mt-3 transition-all",
              isActive
                ? "bg-[#e63946] w-10 sm:w-12"
                : "bg-neutral-300 group-hover:bg-[#1a1a1a]",
            )}
          />
        </div>

        {/* Letra grande sutil de fondo */}
        <div
          className={cn(
            "absolute right-0 bottom-0 opacity-10 pointer-events-none text-[64px] sm:text-[72px] font-mono font-black select-none leading-none -mb-5 -mr-3 z-10 transition-colors",
            isActive ? "text-white" : "text-black",
          )}
        >
          {category.name.charAt(0)}
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;
