// src/components/cart/BotonFlotante.tsx
"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

interface BotonFlotanteProps {
  totalItems: number;
  finalTotal: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const BotonFlotante: React.FC<BotonFlotanteProps> = ({
  totalItems,
  finalTotal,
  isOpen,
  setIsOpen,
}) => {
  const isVisible = totalItems > 0 && !isOpen;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[85%] md:w-[70%] lg:w-[50%] max-w-md md:max-w-lg z-[500] transition-all duration-300 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-24 opacity-0 pointer-events-none",
      )}
    >
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-12 md:h-14 bg-[#18181B] text-white rounded-2xl px-4 sm:px-6 flex items-center justify-between shadow-md border border-white/10 active:scale-[0.99] transition-all duration-200"
      >
        <div className="flex items-center gap-2.5 md:gap-3">
          {/* Ícono con indicador premium */}
          <div className="relative flex items-center justify-center">
            <ShoppingBag className="size-4 md:size-5 text-white" />
            <span className="absolute -top-2.5 -right-2.5 px-1.5 min-w-[16px] md:min-w-[18px] h-4 md:h-4.5 bg-[#18181B] text-[9px] md:text-[10px] font-bold rounded-full flex items-center justify-center border border-[#FAFAFA] shadow-sm tabular-nums">
              {totalItems}
            </span>
          </div>

          <div className="text-left">
            <p className="text-xs sm:text-sm font-bold tracking-tight">
              Ver pedido
            </p>
          </div>
        </div>

        <span className="font-bold text-sm sm:text-base tracking-tight tabular-nums">
          ${finalTotal.toLocaleString("es-AR")}
        </span>
      </button>
    </div>
  );
};

export default BotonFlotante;
