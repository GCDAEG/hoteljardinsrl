"use client";

import React from "react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1655516433028-9e0e1599cf8b?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagen de ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1585418694458-dc80a5c20294?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior del hotel",
  },
  {
    url: "https://images.unsplash.com/photo-1677129667171-92abd8740fa3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagen de ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1731336478850-6bce7235e320?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagen de ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1743592889729-d8a92388412e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagen de ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1775866914882-9f0d58aa3372?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagen de ejemplo",
  },
  {
    url: "https://images.unsplash.com/photo-1571930884060-d8f6b9cb05f2?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagen de ejemplo",
  },
];

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="w-full bg-white py-24 md:py-32 flex justify-center border-b border-stone-50"
    >
      <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
        {/* Encabezado de la Sección */}
        <div className="max-w-2xl text-center mb-16 md:mb-20">
          <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-[#1c352d]/60 uppercase mb-3 block">
            El Hotel por Dentro
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#1c352d] leading-tight">
            Nuestros Rincones
          </h2>
          <p className="font-sans text-stone-500 text-sm md:text-base mt-4 max-w-lg mx-auto leading-relaxed">
            Un recorrido visual por nuestras instalaciones, habitaciones
            preparadas al detalle y espacios verdes pensados para tu relax.
          </p>
        </div>

        {/* Masonry Layout (Pinterest Style) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 w-full space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl bg-stone-100 border border-stone-100/50 shadow-[0_4px_25px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(28,53,45,0.05)]"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.025]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA Sutil de Galería hacia WhatsApp */}
        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/tuwebhoysi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 hover:border-[#1c352d]/30 bg-stone-50/50 hover:bg-[#1c352d]/5 text-stone-600 hover:text-[#1c352d] font-sans font-medium text-xs tracking-wider uppercase transition-all duration-300"
          >
            <span>¿Querés ver más fotos? Seguinos en Instagram</span>
            <span className="text-[#1c352d]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
