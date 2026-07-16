"use client";

import React from "react";
import {
  Wifi,
  Car,
  Wind,
  Tv,
  Coffee,
  Bed,
  Thermometer,
  Lock,
  HeartPulse,
} from "lucide-react";

// Estructura de los 9 servicios con descripciones y sus respectivos íconos
const services = [
  {
    icon: Bed,
    name: "Habitaciones con baño privado",
    description:
      "Espacios amplios y confortables diseñados para garantizar un descanso pleno.",
  },
  {
    icon: Tv,
    name: "TV por cable",
    description:
      "Variedad de canales a tu disposición para tu entretenimiento.",
  },
  {
    icon: Wind,
    name: "Aire acondicionado",
    description:
      "Climatización individual para adaptar la temperatura a tu gusto.",
  },
  {
    icon: Thermometer,
    name: "Calefacción central",
    description: "Ambientes perfectamente templados durante toda tu estadía.",
  },
  {
    icon: Coffee,
    name: "Desayuno y Bar",
    description:
      "Comenzá el día con un exquisito y nutritivo desayuno en nuestro salón.",
  },
  {
    icon: Wifi,
    name: "Internet WiFi gratuito",
    description:
      "Conexión estable y sin costo en todas las instalaciones del hotel.",
  },
  {
    icon: Lock,
    name: "Cajas de seguridad",
    description:
      "Tranquilidad y resguardo absoluto para tus pertenencias más valiosas.",
  },
  {
    icon: HeartPulse,
    name: "Cobertura médica 24 hs",
    description:
      "Asistencia médica inmediata ante cualquier eventualidad, todo el día.",
  },
  {
    icon: Car,
    name: "Cocheras",
    description: "Espacio de estacionamiento cómodo y seguro para tu vehículo.",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full bg-white py-24 md:py-32 flex justify-center border-b border-stone-100"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        {/* Encabezado de la Sección */}
        <div className="max-w-2xl text-center mb-16 md:mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#1c352d]/60 uppercase mb-3 block">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1c352d] leading-tight">
            Todo lo que necesitás para una estadía cómoda
          </h2>
        </div>

        {/* Grid de Servicios: 2 columnas en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-start p-5 md:p-8 bg-white border border-stone-100/80 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.015)] transition-all duration-250 hover:shadow-[0_8px_30px_rgba(28,53,45,0.035)]"
              >
                {/* Ícono contenedor sutil */}
                <div className="p-2.5 md:p-3 bg-stone-50 text-[#1c352d] rounded-xl mb-4 md:mb-5 group-hover:bg-[#1c352d]/5 transition-colors duration-250">
                  <IconComponent className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" />
                </div>

                {/* Nombre */}
                <h3 className="font-serif text-base md:text-xl font-medium text-[#1c352d] mb-1.5 md:mb-2 leading-snug">
                  {service.name}
                </h3>

                {/* Descripción Corta */}
                <p className="font-sans text-stone-500 text-[11px] md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Llamado a la acción sutil y elegante hacia WhatsApp */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5493444443617?text=Hola!%20Me%20gustaría%20saber%20más%20sobre%20los%20servicios%20y%20tarifas."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-[#1c352d] font-sans font-medium text-xs md:text-sm transition-colors group"
          >
            <span>
              ¿Tenés alguna consulta especial sobre nuestros servicios?
              Escribinos
            </span>
            <span className="text-[#1c352d] group-hover:translate-x-1 transition-transform duration-250">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
