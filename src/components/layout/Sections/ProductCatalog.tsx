"use client";

import React from "react";
import Image from "next/image";
import { Plus, ChevronRight, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Section from "../Section";
import { SanityDocument } from "next-sanity";
import { MockProduct, mockProducts } from "@/lib/mockData";

interface ProductCatalogProps {
  posts: SanityDocument[];
}

const ProductCatalog: React.FC<ProductCatalogProps> = ({ posts }) => {
  const { addToCart } = useCart();

  // Utilizando mockData por el momento, preparado para Sanity
  const mockData: MockProduct[] = mockProducts;

  const categories = Array.from(
    new Set(mockData.map((p) => p.category).filter(Boolean)),
  );

  const getProductsByCategory = (cat: string) => {
    return mockData.filter((p) => p.category === cat);
  };

  return (
    <Section
      height="content"
      id="catalog"
      className="bg-gula-bg pt-12 pb-24 flex justify-center w-full overflow-hidden flex flex-col"
    >
      <div className="w-full max-w-2xl lg:max-w-5xl">
        {categories.map((category) => (
          <div key={category as string} className="mb-16 last:mb-0">
            {/* --- ENCABEZADO DE CATEGORÍA ESTILO CARTA GOURMET --- */}
            <div className="flex items-end justify-between mb-8 sm:px-0">
              <div className="flex flex-col">
                <h2 className="text-3xl md:text-4xl font-serif font-normal text-gula-text tracking-tight">
                  {category as string}
                </h2>
                {/* Línea dorada de acento minimalista */}
                <div className="h-[1px] w-12 bg-gula-gold mt-3" />
              </div>

              <button className="text-[10px] font-bold text-gula-muted uppercase tracking-[0.2em] flex items-center gap-1 transition-colors hover:text-gula-primary group">
                Ver todos
                <ChevronRight
                  className="size-4 text-gula-gold group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* --- SCROLL HORIZONTAL NATIVO (Mobile-First y Fluido) --- */}
            {/* El padding horizontal (px-6) asegura que en móviles la primera tarjeta no pegue contra el borde */}
            <div className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 px-6 sm:px-0">
              {getProductsByCategory(category as string).map((product) => {
                const pId = product.id;
                const pName = product.name;
                const pPrice = product.price;

                return (
                  <div
                    key={pId}
                    className="snap-start shrink-0 w-[220px] sm:w-[260px] flex flex-col group cursor-pointer"
                  >
                    {/* CONTENEDOR DE IMAGEN (Estilo Editorial Vertical) */}
                    <div className="relative aspect-[4/5] w-full mb-4 rounded-xl overflow-hidden bg-stone-100 border border-gula-border shadow-sm">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={pName}
                          fill
                          sizes="(max-width: 640px) 220px, 260px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}

                      {/* Overlay sutil para destacar el botón inferior */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* BOTÓN AGREGAR (Minimalista y Funcional) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Evita que se disparen otros eventos si la tarjeta fuera clickeable
                          addToCart({
                            id: pId,
                            title: pName,
                            price: pPrice.toString(),
                            category: category as string,
                            image: product.image,
                          });
                        }}
                        className="absolute bottom-3 right-3 size-10 rounded-full bg-white/95 backdrop-blur-sm text-gula-text flex items-center justify-center shadow-lg border border-white/50 transition-all duration-200 active:scale-90 hover:bg-gula-primary hover:text-white hover:border-gula-primary"
                        aria-label={`Agregar ${pName} al carrito`}
                      >
                        <Plus className="size-5" strokeWidth={2} />
                      </button>
                    </div>

                    {/* TEXTOS DEL PRODUCTO (Arquitectura Limpia) */}
                    <div className="flex flex-col gap-1.5 px-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-lg font-serif text-gula-text leading-tight group-hover:text-gula-primary transition-colors line-clamp-2">
                          {pName}
                        </h3>
                        <p className="text-base font-sans font-bold text-gula-primary shrink-0 pt-0.5">
                          ${pPrice.toLocaleString("es-AR")}
                        </p>
                      </div>

                      {/* Tag de Especialidad opcional */}
                      <div className="flex items-center gap-1.5 text-gula-muted mt-1">
                        <Award
                          className="size-3.5 text-gula-gold"
                          strokeWidth={2}
                        />
                        <p className="text-[10px] font-sans uppercase tracking-widest">
                          Selección Gourmet
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProductCatalog;
