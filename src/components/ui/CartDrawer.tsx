"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import BotonFlotante from "./CartDrawer/BotonFlotante";
import DrawerPrincipal from "./CartDrawer/DrawerPrincipal";
import ConfirmMessage from "./CartDrawer/ConfirmMessage";

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [showWSModal, setShowWSModal] = useState(false);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "pickup",
  );
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  // Configuración para Alma Criolla Bodegón
  const WHATSAPP_NUMBER = "5493446648013"; // ← Reemplaza con el número real
  const DELIVERY_FEE = 1500;

  const finalTotal =
    deliveryType === "delivery" ? totalPrice + DELIVERY_FEE : totalPrice;
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

    const header = `🛍️ *NUEVO PEDIDO - Santa Gula*`;
    const deliveryInfo =
      deliveryType === "delivery"
        ? `🚚 *ENVÍO A DOMICILIO*\n📍 *DIRECCIÓN:* ${address}`
        : `🏠 *RETIRO EN EL LOCAL*`;

    const notesInfo = notes ? `\n\n📝 *NOTAS:* ${notes}` : "";

    return `${header}\n\n${deliveryInfo}${notesInfo}\n\n*DETALLE DEL PEDIDO:*\n${productList}\n\n*SUBTOTAL:* $${totalPrice.toLocaleString("es-AR")}\n${deliveryType === "delivery" ? `*ENVÍO:* $${DELIVERY_FEE.toLocaleString("es-AR")}\n` : ""}*TOTAL FINAL: $${finalTotal.toLocaleString("es-AR")}*\n`;
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
      <BotonFlotante
        totalItems={totalItems}
        finalTotal={finalTotal}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />

      {/* --- DRAWER PRINCIPAL --- */}
      <DrawerPrincipal
        address={address}
        setAddress={setAddress}
        notes={notes}
        setNotes={setNotes}
        DELIVERY_FEE={DELIVERY_FEE}
        cart={cart}
        deliveryType={deliveryType}
        finalTotal={finalTotal}
        isOpen={isOpen}
        removeFromCart={removeFromCart}
        setDeliveryType={setDeliveryType}
        setIsOpen={setIsOpen}
        setShowWSModal={setShowWSModal}
        setStep={setStep}
        step={step}
        totalPrice={totalPrice}
        updateQuantity={updateQuantity}
      />

      {/* Modal de Confirmación WhatsApp */}
      <ConfirmMessage
        showWSModal={showWSModal}
        setShowWSModal={setShowWSModal}
        generateWSMessage={generateWSMessage}
        handleFinalSend={handleFinalSend}
      />
    </>
  );
};
