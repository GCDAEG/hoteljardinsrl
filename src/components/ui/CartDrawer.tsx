"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import {
  ShoppingBag,
  X,
  Trash2,
  MessageCircle,
  Plus,
  Minus,
  Check,
  Truck,
  Store,
  ChevronLeft,
  ArrowRight,
  MapPin,
  FileText,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [showWSModal, setShowWSModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">("pickup");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Configuración para Alma Criolla Bodegón
  const WHATSAPP_NUMBER = "5493446648013"; // ← Reemplaza con el número real
  const DELIVERY_FEE = 1500;

  const finalTotal = deliveryType === "delivery" ? totalPrice + DELIVERY_FEE : totalPrice;
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    if (cart.length === 0 && isOpen) {
      // Avoid synchronous setState inside effect to prevent cascading renders
      const t = setTimeout(() => setIsOpen(false), 0);
      return () => clearTimeout(t);
    }
  }, [cart.length, isOpen]);

  const generateWSMessage = (): string => {
    const productList = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.title.toUpperCase()} ($${(Number(item.price) * item.quantity).toLocaleString("es-AR")})`,
      )
      .join("\n");

    const header = `🛍️ *NUEVO PEDIDO - ALMA CRIOLLA BODEGÓN*`;
    const deliveryInfo =
      deliveryType === "delivery"
        ? `🚚 *ENVÍO A DOMICILIO*\n📍 *DIRECCIÓN:* ${address}`
        : `🏠 *RETIRO EN EL BODEGÓN*`;

    const notesInfo = notes ? `\n\n📝 *NOTAS:* ${notes}` : "";

    return `${header}\n\n${deliveryInfo}${notesInfo}\n\n*DETALLE DEL PEDIDO:*\n${productList}\n\n*SUBTOTAL:* $${totalPrice.toLocaleString("es-AR")}\n${deliveryType === "delivery" ? `*ENVÍO:* $${DELIVERY_FEE.toLocaleString("es-AR")}\n` : ""}*TOTAL FINAL: $${finalTotal.toLocaleString("es-AR")}*\n\n_Gracias por elegir Alma Criolla ❤️_`;
  };

  const handleFinalSend = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(generateWSMessage())}`,
      "_blank",
    );
    setShowWSModal(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* --- BOTÓN FLOTANTE --- */}
      <AnimatePresence>
        {totalItems > 0 && !isOpen && (
          <motion.div
            initial={{ y: 100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            exit={{ y: 100, x: "-50%" }}
            className="fixed bottom-6 left-1/2 w-[92%] max-w-md z-[500]"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="w-full h-20 bg-[#0f0c08] hover:bg-amber-950 text-white rounded-3xl px-6 flex items-center justify-between shadow-2xl shadow-amber-950/50 border border-amber-900/50 active:scale-[0.97] transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <ShoppingBag className="size-7 text-amber-400" />
                  <span className="absolute -top-2 -right-2 size-6 bg-amber-600 text-white text-xs font-black rounded-full flex items-center justify-center border-2 border-[#0f0c08]">
                    {totalItems}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.5px] text-amber-500">Mi Pedido</p>
                  <p className="font-serif text-lg font-bold tracking-tight">Ver carrito</p>
                </div>
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-amber-100">
                ${finalTotal.toLocaleString("es-AR")}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DRAWER PRINCIPAL --- */}
      <AnimatePresence>
        {isOpen && (
          <div
  className={cn(
    "fixed inset-0 z-[550] flex justify-center bg-criollo-bg transition-transform duration-300 ease-out translate-y-full",
    isOpen && "translate-y-0"
  )}
>
  <div className="flex flex-col h-full w-full max-w-2xl lg:max-w-3xl bg-criollo-bg">
    
    {/* --- ENCABEZADO (HEADER) --- */}
    <div className="px-6 py-5 flex items-center justify-between border-b-2 border-criollo-border bg-white shadow-sm">
      <div className="flex items-center gap-2">
        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="p-1 -ml-1 text-criollo-muted hover:text-criollo-primary transition-colors active:scale-90"
            aria-label="Volver al paso anterior"
          >
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>
        )}
        <h2 className="text-2xl font-serif font-black tracking-tight text-criollo-text">
          {step === 1 ? "Tu Pedido" : "Finalizar Pedido"}
        </h2>
      </div>

      <button
        onClick={() => setIsOpen(false)}
        className="size-11 bg-criollo-bg rounded-xl flex items-center justify-center border-2 border-criollo-border text-criollo-muted hover:text-criollo-primary active:scale-90 transition-all"
        aria-label="Cerrar ventana"
      >
        <X size={22} strokeWidth={2.5} />
      </button>
    </div>

    {/* --- CONTENIDO PRINCIPAL (SCROLL ASISTIDO) --- */}
    <div className="flex-1 overflow-y-auto p-5 space-y-5 no-scrollbar">
      {step === 1 ? (
        /* VISTA 1: Lista de Productos seleccionados */
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-2xl border-2 border-criollo-border flex gap-4 relative shadow-sm"
            >
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute top-3 right-3 text-criollo-muted hover:text-criollo-primary transition-colors p-1"
                aria-label={`Eliminar ${item.title}`}
              >
                <Trash2 size={18} strokeWidth={2.5} />
              </button>

              <div className="relative size-20 rounded-xl overflow-hidden shrink-0 border-2 border-criollo-border bg-criollo-bg">
                <img
                  src={item.image || ""}
                  alt={item.title}
                  className="object-cover object-center w-full h-full"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between pt-0.5">
                <h4 className="font-serif font-bold text-base text-criollo-text leading-tight pr-6 line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between mt-3 gap-2">
                  <p className="text-criollo-primary font-sans font-black text-xl tracking-tight">
                    ${(Number(item.price) * item.quantity).toLocaleString("es-AR")}
                  </p>

                  <div className="flex items-center gap-1.5 bg-criollo-bg border-2 border-criollo-border rounded-xl p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="size-7 flex items-center justify-center text-criollo-muted disabled:opacity-20 active:scale-90"
                    >
                      <Minus size={14} strokeWidth={3} />
                    </button>
                    <span className="font-sans font-bold text-sm w-5 text-center text-criollo-text">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="size-7 flex items-center justify-center bg-criollo-primary text-white rounded-lg active:scale-90"
                    >
                      <Plus size={14} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* VISTA 2: Datos de Envío y Notas */
        <div className="space-y-5 w-full">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setDeliveryType("pickup")}
              className={cn(
                "flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-2xl border-2 transition-all duration-200 active:scale-[0.98]",
                deliveryType === "pickup"
                  ? "border-criollo-atardecer bg-white text-criollo-primary shadow-sm"
                  : "border-criollo-border bg-white text-criollo-muted hover:text-criollo-text"
              )}
            >
              <Store size={26} strokeWidth={2.5} />
              <span className="font-serif font-bold text-sm tracking-tight">Retiro en Local</span>
            </button>

            <button
              onClick={() => setDeliveryType("delivery")}
              className={cn(
                "flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-2xl border-2 transition-all duration-200 active:scale-[0.98]",
                deliveryType === "delivery"
                  ? "border-criollo-atardecer bg-white text-criollo-primary shadow-sm"
                  : "border-criollo-border bg-white text-criollo-muted hover:text-criollo-text"
              )}
            >
              <Truck size={26} strokeWidth={2.5} />
              <span className="font-serif font-bold text-sm tracking-tight">Envío a Domicilio</span>
            </button>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border-2 border-criollo-border space-y-5 shadow-sm">
            {deliveryType === "delivery" && (
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-criollo-primary">
                  <MapPin size={14} strokeWidth={2.5} /> Dirección de entrega
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ej: Av. Rocamora 123, Gualeguaychú"
                  className="w-full p-4 bg-criollo-bg border-2 border-criollo-border rounded-xl outline-none text-criollo-text font-sans text-sm focus:border-criollo-atardecer transition-colors"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-criollo-primary">
                <FileText size={14} strokeWidth={2.5} /> Notas para la cocina
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Sin cebolla, pan bien tostado, por favor..."
                className="w-full p-4 bg-criollo-bg border-2 border-criollo-border rounded-xl outline-none text-criollo-text font-sans text-sm resize-none focus:border-criollo-atardecer transition-colors"
              />
            </div>
          </div>
        </div>
      )}
    </div>

    {/* --- PIE DE PANEL (TOTALES Y ACCIÓN) --- */}
    <div className="p-6 bg-white border-t-2 border-criollo-border shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      <div className="space-y-2.5 mb-5 font-sans text-sm font-semibold text-criollo-muted">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-criollo-text">${totalPrice.toLocaleString("es-AR")}</span>
        </div>
        
        {deliveryType === "delivery" && (
          <div className="flex justify-between">
            <span>Costo de envío</span>
            <span className="text-criollo-text">${DELIVERY_FEE.toLocaleString("es-AR")}</span>
          </div>
        )}
        
        <div className="flex items-baseline justify-between border-t-2 border-criollo-border pt-4 mt-2">
          <span className="text-lg font-serif font-bold text-criollo-text">Total</span>
          <span className="text-4xl font-serif font-black tracking-tight text-criollo-primary">
            ${finalTotal.toLocaleString("es-AR")}
          </span>
        </div>
      </div>

      <button
        onClick={() => (step === 1 ? setStep(2) : setShowWSModal(true))}
        disabled={deliveryType === "delivery" && !address.trim()}
        className="w-full h-14 bg-criollo-primary hover:bg-orange-800 disabled:bg-criollo-border disabled:text-criollo-muted transition-colors text-white text-base font-sans font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99]"
      >
        <span>{step === 1 ? "Continuar Pedido" : "Confirmar por WhatsApp"}</span>
        <ArrowRight size={20} strokeWidth={2.5} />
      </button>
    </div>
  </div>
</div>
        )}
      </AnimatePresence>

      {/* Modal de Confirmación WhatsApp */}
<div
  className={cn(
    "fixed inset-0 z-[600] bg-criollo-text/40 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-200 pointer-events-none opacity-0 invisible",
    showWSModal && "opacity-100 visible pointer-events-auto"
  )}
>
  <div
    className={cn(
      "bg-white w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border border-criollo-border transform transition-all duration-200 scale-95 translate-y-4",
      showWSModal && "scale-100 translate-y-0"
    )}
  >
    {/* Encabezado del Modal */}
    <div className="bg-criollo-bg p-5 border-b-2 border-criollo-border flex items-center gap-4">
      <div className="size-12 bg-criollo-primary/10 rounded-xl flex items-center justify-center border border-criollo-primary/20 shrink-0">
        <Clock size={24} className="text-criollo-primary" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col text-left">
        <p className="font-serif font-black text-lg text-criollo-text leading-tight">Alma Criolla</p>
        <p className="text-[10px] font-sans font-black text-criollo-primary uppercase tracking-wider mt-0.5">Tu pedido está listo</p>
      </div>
    </div>

    {/* Bloque Central de Previsualización de Texto */}
    <div className="bg-criollo-bg p-5 flex items-center justify-center min-h-[260px]">
      <div className="w-full bg-white p-4 rounded-xl text-xs md:text-sm leading-relaxed text-criollo-muted font-sans font-medium border-2 border-criollo-border whitespace-pre-wrap shadow-inner max-h-[220px] overflow-y-auto no-scrollbar">
        {generateWSMessage()}
      </div>
    </div>

    {/* Botones de Acción Final */}
    <div className="p-4 flex gap-3 bg-white border-t border-criollo-border">
      <button
        onClick={() => setShowWSModal(false)}
        className="flex-1 py-3.5 text-xs font-sans font-bold uppercase tracking-wider rounded-xl border-2 border-criollo-border text-criollo-muted hover:bg-criollo-bg hover:text-criollo-text transition-colors active:scale-95"
      >
        Atrás
      </button>
      
      <button
        onClick={handleFinalSend}
        className="flex-[2] py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-sans font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 shadow-md shadow-green-900/10 transition-all active:scale-95"
      >
        <Check size={18} strokeWidth={3} /> Enviar pedido
      </button>
    </div>
  </div>
</div>
    </>
  );
};