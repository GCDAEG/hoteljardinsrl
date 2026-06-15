// src/components/cart/ConfirmMessage.tsx
"use client";

import React from "react";
import { Send, X } from "lucide-react";

interface ConfirmMessageProps {
  showWSModal: boolean;
  setShowWSModal: (show: boolean) => void;
  generateWSMessage: () => string;
  handleFinalSend: () => void;
}

const ConfirmMessage: React.FC<ConfirmMessageProps> = ({
  showWSModal,
  setShowWSModal,
  generateWSMessage,
  handleFinalSend,
}) => {
  if (!showWSModal) return null;

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAFAFA] w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-md border border-criollo-border animate-in zoom-in-95 duration-200">
        {/* Encabezado elegante */}
        <div className="px-6 py-4 border-b border-criollo-border flex justify-between items-center bg-white">
          <h3 className="font-extrabold text-sm sm:text-base text-[#18181B] tracking-tight">
            Confirmar Pedido
          </h3>
          <button
            onClick={() => setShowWSModal(false)}
            className="text-[#71717A] hover:text-[#18181B] p-1.5 rounded-xl hover:bg-neutral-50 transition-colors"
            aria-label="Cerrar"
          >
            <X size={18} className="sm:size-5" />
          </button>
        </div>

        {/* Resumen del pedido (Previsualización) */}
        <div className="p-5 sm:p-6">
          <div className="bg-white p-4 rounded-2xl text-[11px] sm:text-xs text-neutral-600 font-mono border border-criollo-border max-h-[180px] sm:max-h-[250px] lg:max-h-[350px] overflow-y-auto whitespace-pre-wrap leading-relaxed shadow-inner">
            {generateWSMessage()}
          </div>
          <p className="text-[10px] sm:text-[11px] text-[#71717A] font-semibold tracking-tight mt-3 text-center">
            Se abrirá WhatsApp con el mensaje listo para enviar
          </p>
        </div>

        {/* Botones de acción */}
        <div className="p-5 pt-0 sm:p-6 sm:pt-0 grid grid-cols-2 gap-2.5 sm:gap-4">
          <button
            onClick={() => setShowWSModal(false)}
            className="h-10 sm:h-11 text-xs sm:text-sm font-semibold text-[#71717A] bg-white border border-criollo-border rounded-xl hover:bg-neutral-50 transition-all active:scale-95"
          >
            Editar
          </button>

          <button
            onClick={handleFinalSend}
            className="h-10 sm:h-11 bg-primary text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 hover:bg-primary/95 transition-all shadow-sm active:scale-95"
          >
            <Send size={13} className="sm:size-3.5 fill-white/10" /> Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMessage;
