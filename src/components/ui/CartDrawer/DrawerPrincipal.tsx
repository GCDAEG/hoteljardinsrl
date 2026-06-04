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
  MapPin,
  FileText,
  ArrowRight,
  MotorbikeIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Definición de tipos simplificada para el rediseño
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
    <div className="fixed inset-0 z-[550] flex justify-center bg-gula-bg">
      <div className="flex flex-col h-full w-full max-w-2xl lg:border-x lg:border-gula-border bg-gula-bg">
        {/* --- HEADER --- */}
        <div className="px-6 py-6 flex items-center justify-between border-b border-gula-border bg-gula-bg">
          <div className="flex items-center gap-4">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="text-gula-muted hover:text-gula-primary"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <h2 className="text-xl font-serif text-gula-text">
              {step === 1 ? "Tu Pedido" : "Finalizar Pedido"}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gula-muted hover:text-gula-primary"
          >
            <X size={24} />
          </button>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {step === 1 ? (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-gula-text">{item.title}</h4>
                    <p className="text-sm text-gula-primary font-bold">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 bg-white border border-gula-border rounded-full px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gula-muted hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDeliveryType("pickup")}
                  className={cn(
                    "p-4 rounded-xl border transition-all flex items-center flex-col",
                    deliveryType === "pickup"
                      ? "border-gula-primary bg-white"
                      : "border-gula-border",
                  )}
                >
                  <Store
                    className={cn(
                      "mb-2",
                      deliveryType === "pickup"
                        ? "text-gula-primary"
                        : "text-gula-muted",
                    )}
                  />{" "}
                  <p
                    className={cn(
                      "text-sm",
                      deliveryType === "pickup"
                        ? "text-gula-primary"
                        : "text-gula-muted",
                    )}
                  >
                    Retiro
                  </p>
                </button>
                <button
                  onClick={() => setDeliveryType("delivery")}
                  className={cn(
                    "p-4 rounded-xl border transition-all flex items-center flex-col",
                    deliveryType === "delivery"
                      ? "border-gula-primary bg-white"
                      : "border-gula-border",
                  )}
                >
                  <Truck
                    className={cn(
                      "mb-2",
                      deliveryType === "delivery"
                        ? "text-gula-primary"
                        : "text-gula-muted",
                    )}
                  />{" "}
                  <p
                    className={cn(
                      "text-sm",
                      deliveryType === "delivery"
                        ? "text-gula-primary"
                        : "text-gula-muted",
                    )}
                  >
                    Envío
                  </p>
                </button>
              </div>
              {deliveryType === "delivery" && (
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Tu dirección..."
                  className="w-full p-4 rounded-xl border border-gula-border"
                />
              )}
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notas para la cocina..."
                className="w-full p-4 rounded-xl border border-gula-border"
                rows={3}
              />
            </div>
          )}
        </div>

        {/* --- FOOTER DEL DRAWER --- */}
        <div className="p-6 bg-white border-t border-gula-border space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gula-muted">Envío</span>
            <span className="font-bold">${DELIVERY_FEE.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gula-muted">Subtotal</span>
            <span className="font-bold">${totalPrice.toLocaleString()}</span>
          </div>
          <button
            onClick={() => (step === 1 ? setStep(2) : setShowWSModal(true))}
            className="w-full bg-gula-primary text-white py-4 rounded-xl font-lora font-bold flex items-center justify-center gap-2 hover:bg-gula-primary/90"
          >
            {step === 1 ? "Continuar" : "Confirmar Pedido"}{" "}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrawerPrincipal;
