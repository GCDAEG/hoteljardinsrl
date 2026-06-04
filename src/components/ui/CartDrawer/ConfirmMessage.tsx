"use client";

import React from "react";
import { Check, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-gula-text/20 backdrop-blur-sm">
      <div className="bg-gula-bg w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-gula-border animate-in fade-in zoom-in duration-200">
        {/* Encabezado elegante */}
        <div className="px-6 py-6 border-b border-gula-border flex justify-between items-center">
          <h3 className="font-serif text-lg text-gula-text italic">
            Confirmar Pedido
          </h3>
          <button
            onClick={() => setShowWSModal(false)}
            className="text-gula-muted hover:text-gula-primary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Resumen del pedido (Previsualización) */}
        <div className="p-6">
          <div className="bg-white p-4 rounded-xl text-xs text-gula-muted font-sans border border-gula-border max-h-[200px] overflow-y-auto whitespace-pre-wrap leading-relaxed">
            {generateWSMessage()}
          </div>
          <p className="text-[10px] text-gula-muted uppercase tracking-widest mt-4 text-center">
            Se enviará un WhatsApp directo a cocina
          </p>
        </div>

        {/* Botones de acción */}
        <div className="p-6 pt-0 grid grid-cols-2 gap-3">
          <button
            onClick={() => setShowWSModal(false)}
            className="py-3 text-xs font-bold uppercase tracking-widest text-gula-muted border border-gula-border rounded-xl hover:bg-white transition-all"
          >
            Editar
          </button>

          <button
            onClick={handleFinalSend}
            className="py-3 bg-gula-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-gula-primary/90 transition-all shadow-md"
          >
            <Send size={14} /> Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmMessage;
