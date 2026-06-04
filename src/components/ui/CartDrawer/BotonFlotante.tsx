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
  // Transición nativa basada en estado (CSS puro)
  const isVisible = totalItems > 0 && !isOpen;

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-sm z-[500] transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-24 opacity-0 pointer-events-none",
      )}
    >
      <button
        onClick={() => setIsOpen(true)}
        className="w-full h-16 bg-gula-text text-white rounded-full px-6 flex items-center justify-between shadow-2xl border border-white/10 active:scale-[0.98] transition-transform duration-200"
      >
        <div className="flex items-center gap-3">
          {/* Ícono con indicador */}
          <div className="relative">
            <ShoppingBag className="size-6 text-gula-gold" />
            <span className="absolute -top-1 -right-2 size-5 bg-gula-primary text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-gula-text">
              {totalItems}
            </span>
          </div>

          <div className="text-left leading-none">
            <p className="text-[9px] uppercase tracking-[0.2em] text-gula-gold">
              Pedido
            </p>
            <p className="font-serif text-sm font-bold">Ver carrito</p>
          </div>
        </div>

        <span className="font-bold text-lg tracking-tight">
          ${finalTotal.toLocaleString("es-AR")}
        </span>
      </button>
    </div>
  );
};

export default BotonFlotante;
