"use client";

import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    author: "María Inés",
    role: "Huésped familiar",
    rating: 5,
    text: "Excelente atención de sus dueños. Un hotel super limpio, tranquilo y familiar en pleno centro de Gualeguay. Las cocheras cerradas y el desayuno son un gran plus.",
  },
  {
    author: "Carlos Alberto",
    role: "Viajero de negocios",
    rating: 5,
    text: "Llevo años alojándome aquí cada vez que viajo por trabajo. La calidez humana de todo el personal es increíble. Muy silencioso, ideal para descansar bien de noche.",
  },
  {
    author: "Sofía & Juan",
    role: "Estadía de fin de semana",
    rating: 5,
    text: "Un lugar hermoso y muy bien cuidado. Habitaciones muy cómodas con excelente climatización. Te atienden con una amabilidad y dedicación que ya no se encuentra fácil.",
  },
  {
    author: "Elena Rossi",
    role: "Turista",
    rating: 5,
    text: "La limpieza es impecable y las camas súper confortables. El patio interno te hace olvidar que estás a un paso del centro. Muy recomendable.",
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-stone-50/70 py-24 md:py-32 flex justify-center border-b border-stone-100"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        {/* Encabezado de la Sección */}
        <div className="max-w-2xl text-center mb-16 md:mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#1c352d]/60 uppercase mb-3 block">
            Opiniones de Huéspedes
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1c352d] leading-tight">
            La experiencia de quienes nos eligen
          </h2>
        </div>

        {/* Carrusel de Alta Gama */}
        <div className="w-full relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col justify-between h-full min-h-[280px] p-8 bg-white border border-stone-100 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(28,53,45,0.03)]">
                    <div>
                      {/* Estrellas Doradas Sutiles */}
                      <div className="flex items-center gap-1 mb-5">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#D4AF37] stroke-transparent"
                          />
                        ))}
                      </div>

                      {/* Texto de la Reseña */}
                      <p className="font-sans text-stone-600 text-sm md:text-base leading-relaxed italic mb-6">
                        &quot;{item.text}&quot;
                      </p>
                    </div>

                    {/* Autor y Rol */}
                    <div className="border-t border-stone-50 pt-4 flex flex-col">
                      <span className="font-serif text-base font-medium text-[#1c352d]">
                        {item.author}
                      </span>
                      <span className="font-sans text-xs text-stone-400 mt-0.5">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles del Carrusel (Botonera refinada a los lados en pantallas grandes) */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 border border-stone-200 hover:border-[#1c352d]/30 bg-white text-[#1c352d] hover:bg-stone-50" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 border border-stone-200 hover:border-[#1c352d]/30 bg-white text-[#1c352d] hover:bg-stone-50" />
            </div>
          </Carousel>
        </div>

        {/* Enlace Sutil a Google Maps */}
        <div className="mt-14 text-center">
          <a
            href="https://maps.google.com/?q=Gualeguaychú"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold font-sans text-stone-400 hover:text-[#1c352d] transition-colors"
          >
            <span>Ver más reseñas en Google Maps</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
