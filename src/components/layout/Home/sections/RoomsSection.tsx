"use client";

import React from "react";
import { Check } from "lucide-react";

const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    name: "Habitación Standard",
    description:
      "Una opción cálida y acogedora ideal para estadías de descanso individual o en pareja, combinando confort y sencillez.",
    amenities: [
      "Cama Matrimonial",
      "Aire acondicionado",
      "WiFi Libre",
      'Smart TV 32"',
    ],
    whatsappText:
      "Hola! Me gustaría consultar disponibilidad para la Habitación Standard.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    name: "Habitación Superior",
    description:
      "Espaciosa, con detalles refinados y vistas tranquilas para quienes buscan un plus de confort durante su estadía en Gualeguay.",
    amenities: [
      "Cama Queen Size",
      "Aire acondicionado F/C",
      "Frigobar",
      'Smart TV 43"',
    ],
    whatsappText:
      "Hola! Me gustaría consultar disponibilidad para la Habitación Superior.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    name: "Habitación Familiar",
    description:
      "Diseñada especialmente para albergar familias de manera cómoda y holgada, garantizando la privacidad y el descanso de todos.",
    amenities: [
      "Cama Matrimonial + 2 Twin",
      "Espacio Amplio",
      "Aire acondicionado",
      "Cofre de seguridad",
    ],
    whatsappText:
      "Hola! Me gustaría consultar disponibilidad para la Habitación Familiar.",
  },
];

const RoomsSection = () => {
  return (
    <section
      id="rooms"
      className="w-full bg-stone-50/70 py-24 md:py-32 flex justify-center border-b border-stone-100"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        {/* Título de la Sección */}
        <div className="max-w-2xl text-center mb-16 md:mb-24">
          <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#1c352d]/60 uppercase mb-3 block">
            Nuestros Espacios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1c352d] leading-tight">
            Estadías de confort y descanso
          </h2>
          <p className="font-sans text-stone-500 text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Elegí la habitación que mejor se adapte a tu visita. Cada una cuenta
            con luz natural y el silencio necesario para tu tranquilidad.
          </p>
        </div>

        {/* Tarjetas de Habitaciones: Formato estático con amplio espacio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 w-full">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-stone-100/80 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(28,53,45,0.05)]"
            >
              {/* Imagen Grande de Proporciones Naturales */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-xl md:text-2xl font-medium text-[#1c352d] mb-3">
                  {room.name}
                </h3>

                <p className="font-sans text-stone-500 text-sm leading-relaxed mb-6 flex-1">
                  {room.description}
                </p>

                {/* Comodidades de la Habitación */}
                <div className="border-t border-stone-100 pt-5 mb-8">
                  <h4 className="font-sans text-[10px] tracking-wider font-bold text-stone-400 uppercase mb-3.5">
                    Servicios en habitación:
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-2.5 gap-x-2">
                    {room.amenities.map((amenity, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-stone-600 text-xs font-medium"
                      >
                        <Check className="w-3.5 h-3.5 text-[#1c352d]" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Conversión Directo */}
                <a
                  href={`https://wa.me/549123456789?text=${encodeURIComponent(room.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 bg-white hover:bg-[#1c352d] text-[#1c352d] hover:text-white border border-[#1c352d] hover:border-transparent font-sans font-semibold text-xs tracking-wider uppercase rounded-full shadow-sm text-center transition-all duration-300 active:scale-[0.98]"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
