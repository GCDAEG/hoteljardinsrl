// src/components/cart/DrawerPrincipal.tsx
"use client";

import React from "react";
import {
  ChevronLeft,
  X,
  Trash2,
  Minus,
  Plus,
  Store,
  Truck,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  step: 1 | 2;
  setStep: (step: 1 | 2) => void;
  cart: any[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  setDeliveryType: (type: "delivery" | "pickup") => void;
  deliveryType: "delivery" | "pickup";
  address: string;
  setAddress: (address: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  totalPrice: number;
  finalTotal: number;
  setShowWSModal: (show: boolean) => void;
  DELIVERY_FEE: number;
}

const DrawerPrincipal: React.FC<DrawerProps> = ({
  isOpen,
  setIsOpen,
  step,
  setStep,
  cart,
  removeFromCart,
  updateQuantity,
  setDeliveryType,
  deliveryType,
  address,
  setAddress,
  notes,
  setNotes,
  totalPrice,
  finalTotal,
  setShowWSModal,
  DELIVERY_FEE,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[550] flex justify-center bg-[#FAFAFA] md:bg-black/40 md:backdrop-blur-sm md:items-center p-0 md:p-4 animate-in fade-in duration-200">
      <div className="flex flex-col h-full md:h-[85vh] w-full max-w-md md:max-w-xl bg-[#FAFAFA] md:rounded-3xl md:overflow-hidden md:border md:border-criollo-border md:shadow-xl md:animate-in md:zoom-in-95 duration-200">
        {/* --- HEADER --- */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-criollo-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.01)] shrink-0">
          <div className="flex items-center gap-3">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="text-[#71717A] hover:text-[#18181B] p-1 rounded-xl hover:bg-neutral-50 transition-colors"
                aria-label="Volver"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <h2 className="text-base sm:text-lg font-extrabold text-[#18181B] tracking-tight">
              {step === 1 ? "Tu Pedido" : "Finalizar Pedido"}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#71717A] hover:text-[#18181B] p-1 rounded-xl hover:bg-neutral-50 transition-colors"
            aria-label="Cerrar"
          >
            <X size={20} />
          </button>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {step === 1 ? (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center bg-white border border-criollo-border p-3.5 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all hover:border-neutral-300"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="size-14 sm:size-16 object-cover rounded-xl border border-neutral-100 bg-neutral-50 shrink-0"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-xs sm:text-sm text-[#18181B] tracking-tight truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#71717A] mt-0.5 tabular-nums">
                      ${item.price}
                    </p>
                  </div>

                  {/* Controles de Cantidad Premium */}
                  <div className="flex items-center border border-criollo-border rounded-xl h-8 sm:h-9 bg-neutral-50/50 overflow-hidden shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-full px-2 sm:px-2.5 hover:bg-neutral-100 transition-colors text-neutral-600"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs sm:text-sm font-bold w-6 sm:w-8 text-center text-[#18181B] tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-full px-2 sm:px-2.5 hover:bg-neutral-100 transition-colors text-neutral-600"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-neutral-400 hover:text-red-500 p-1 rounded-lg hover:bg-red-50/50 transition-colors shrink-0"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              {/* Opciones de Entrega */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDeliveryType("pickup")}
                  className={cn(
                    "p-4 rounded-3xl border transition-all flex items-center flex-col justify-center gap-1 bg-white active:scale-[0.99] shadow-[0_2px_8px_rgba(0,0,0,0.01)] md:h-24",
                    deliveryType === "pickup"
                      ? "border-[#18181B] ring-1 ring-[#18181B]"
                      : "border-criollo-border hover:border-neutral-300",
                  )}
                >
                  <Store
                    className={cn(
                      "size-5 sm:size-6 transition-colors",
                      deliveryType === "pickup"
                        ? "text-[#18181B]"
                        : "text-[#71717A]",
                    )}
                  />
                  <p
                    className={cn(
                      "text-xs sm:text-sm font-bold tracking-tight transition-colors",
                      deliveryType === "pickup"
                        ? "text-[#18181B]"
                        : "text-[#71717A]",
                    )}
                  >
                    Retiro
                  </p>
                </button>

                <button
                  onClick={() => setDeliveryType("delivery")}
                  className={cn(
                    "p-4 rounded-3xl border transition-all flex items-center flex-col justify-center gap-1 bg-white active:scale-[0.99] shadow-[0_2px_8px_rgba(0,0,0,0.01)] md:h-24",
                    deliveryType === "delivery"
                      ? "border-[#18181B] ring-1 ring-[#18181B]"
                      : "border-criollo-border hover:border-neutral-300",
                  )}
                >
                  <Truck
                    className={cn(
                      "size-5 sm:size-6 transition-colors",
                      deliveryType === "delivery"
                        ? "text-[#18181B]"
                        : "text-[#71717A]",
                    )}
                  />
                  <p
                    className={cn(
                      "text-xs sm:text-sm font-bold tracking-tight transition-colors",
                      deliveryType === "delivery"
                        ? "text-[#18181B]"
                        : "text-[#71717A]",
                    )}
                  >
                    Envío
                  </p>
                </button>
              </div>

              {/* Formulario Inputs Estilo Premium */}
              <div className="space-y-4">
                {deliveryType === "delivery" && (
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-[#18181B] tracking-tight px-1">
                      Dirección de entrega
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Calle, número, departamento..."
                      className="w-full h-11 sm:h-12 px-3.5 bg-white border border-criollo-border rounded-2xl text-xs sm:text-sm text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#18181B] focus:ring-0 transition-colors shadow-sm"
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-[#18181B] tracking-tight px-1">
                    Notas para el pedido
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Aclaraciones de entrega, condimentos, notas de cocina..."
                    className="w-full p-3.5 bg-white border border-criollo-border rounded-2xl text-xs sm:text-sm text-[#18181B] placeholder-[#71717A] focus:outline-none focus:border-[#18181B] focus:ring-0 resize-none transition-colors shadow-sm"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* --- FOOTER DEL DRAWER --- */}
        <div className="p-5 sm:p-6 bg-white border-t border-criollo-border space-y-4 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] shrink-0">
          <div className="space-y-2 px-1">
            {deliveryType === "delivery" && (
              <div className="flex justify-between items-center text-xs sm:text-sm tracking-tight text-[#71717A] font-medium">
                <span>Costo de envío</span>
                <span className="font-semibold text-[#18181B] tabular-nums">
                  ${DELIVERY_FEE.toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between items-center text-xs sm:text-sm tracking-tight text-[#71717A] font-medium">
              <span>Subtotal</span>
              <span className="font-semibold text-[#18181B] tabular-nums">
                ${totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-neutral-100">
              <span className="text-sm sm:text-base font-bold text-[#18181B] tracking-tight">
                Total general
              </span>
              <span className="text-lg sm:text-xl font-extrabold text-[#18181B] tracking-tight tabular-nums">
                ${finalTotal.toLocaleString()}
              </span>
            </div>
          </div>

          <button
            onClick={() => (step === 1 ? setStep(2) : setShowWSModal(true))}
            disabled={cart.length === 0}
            className="w-full h-12 sm:h-14 bg-black hover:bg-primary/95 text-white rounded-2xl font-semibold text-sm sm:text-base tracking-tight flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-[0.99] disabled:bg-neutral-200 disabled:text-neutral-400 disabled:border-neutral-200"
          >
            <span>{step === 1 ? "Continuar" : "Confirmar Pedido"}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerPrincipal;
