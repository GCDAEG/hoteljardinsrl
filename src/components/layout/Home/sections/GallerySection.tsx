"use client";

import React from "react";

const galleryImages = [
  {
    url: "https://i.postimg.cc/QCpXk1Bp/Gemini-Generated-Image-dgm969dgm969dgm9.png",
    alt: "Parque interior y senderos del hotel",
  },
  {
    url: "https://instagram.fros9-2.fna.fbcdn.net/v/t51.82787-15/654227798_18105750028856345_8301513828462470211_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MjY3NDQ4MDQ3ODg3NzI4MjMyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQxNS5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=BQpIN80a39oQ7kNvwGlaIlD&_nc_oc=AdqyvxMeWPzxFyZEG7Fzo8PEF7sI0KTu5Yo2xsqZgXwM4UfPLi6N1-EDG3hL--9itlY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fros9-2.fna&_nc_gid=txR3TPmpz563F7u-mWj7sA&_nc_ss=7a22e&oh=00_AQBhaL1dHIOEgeWfeGUxDd6ExY8tRRA5BTjOqE2YEgybjw&oe=6A5EF6DD",
    alt: "Parking del Hotel Jardín.",
  },
  {
    url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/87/cf/fa/hotel-jardin.jpg?w=1100&h=-1&s=1",
    alt: "Frente o espacio común de Hotel Jardín",
  },
  {
    url: "https://i.postimg.cc/hj1yLGDh/instagram-1784228741378.jpg",
    alt: "Vista aérea del Hotel Jardín y sus alrededores con abundante naturaleza",
  },
  {
    url: "https://instagram.fros9-2.fna.fbcdn.net/v/t51.82787-15/619829970_18069892109626303_9172318867673879539_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=105&ig_cache_key=MjkyODE3MzY0OTQ2NzgwOTg5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=uL6WRFqpMTcQ7kNvwEvLHUN&_nc_oc=AdruS0O3sppUhM_6iYzYncRKFdNPmHrmlFJdgBjj4ZWkrYqwrWROabkgYpePay37Tjs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fros9-2.fna&_nc_gid=EcV4dvrsAChx4eQxIoTvrQ&_nc_ss=7a22e&oh=00_AQDHjVdqBHZmmC9wmmK7xDw196ggEUMWWCCrn2vpETzfEQ&oe=6A5EFD34",
    alt: "Vista aérea del Hotel Jardín y sus alrededores con abundante naturaleza",
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
            href="https://www.instagram.com/hoteljardingualeguay"
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
