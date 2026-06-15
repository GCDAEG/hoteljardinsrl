// src/components/menu/ProductCatalog.tsx
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
      className="bg-[#FAFAFA] pt-8 pb-20 flex flex-col items-center w-full overflow-hidden mx-auto"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {categories.map((category) => (
          <div key={category as string} className="flex flex-col">
            {/* Encabezado de Categoría */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#18181B] tracking-tight">
                  {category as string}
                </h2>
              </div>

              <button className="text-[11px] sm:text-xs font-bold text-[#71717A] uppercase tracking-tight flex items-center gap-0.5 transition-colors hover:text-[#18181B] group">
                Ver todos
                <ChevronRight
                  className="size-3.5 text-[#71717A] group-hover:translate-x-0.5 transition-transform"
                  strokeWidth={2.5}
                />
              </button>
            </div>

            {/* Grid dinámico que pasa de scroll horizontal a cuadrícula adaptativa */}
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 md:gap-4 lg:gap-5">
              {getProductsByCategory(category as string).map((product) => {
                const pId = product.id;
                const pName = product.name;
                const pPrice = product.price;

                return (
                  <div
                    key={pId}
                    className="snap-start shrink-0 w-[160px] md:w-auto flex flex-col group cursor-pointer bg-white border border-criollo-border rounded-3xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)] transition-all duration-200 hover:border-neutral-300"
                  >
                    {/* Contenedor de Imagen */}
                    <div className="relative aspect-square w-full mb-3 rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 shrink-0">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={pName}
                          fill
                          sizes="(max-w-768px) 160px, (max-w-1024px) 33vw, (max-w-1440px) 25vw, 200px"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      )}

                      {/* Botón Agregar flotante premium tipo Uber Eats */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart({
                            id: pId,
                            title: pName,
                            price: pPrice.toString(),
                            category: category as string,
                            image: product.image,
                          });
                        }}
                        className="absolute bottom-2 right-2 size-8 rounded-xl bg-white border border-criollo-border text-[#18181B] flex items-center justify-center shadow-sm transition-colors hover:bg-neutral-50 active:scale-95"
                        aria-label={`Agregar ${pName} al carrito`}
                      >
                        <Plus className="size-4" strokeWidth={2.5} />
                      </button>
                    </div>

                    {/* Textos e Info del Producto */}
                    <div className="flex flex-col flex-1 justify-between gap-1">
                      <div>
                        <h3 className="text-xs sm:text-sm font-bold text-[#18181B] tracking-tight line-clamp-1 md:line-clamp-2">
                          {pName}
                        </h3>

                        <div className="flex items-center gap-1 text-[#71717A] mt-0.5">
                          <Award className="size-3 text-amber-500 fill-amber-500" />
                          <p className="text-[9px] sm:text-[10px] font-semibold tracking-tight uppercase text-neutral-400">
                            Destacado
                          </p>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base font-extrabold text-[#18181B] tracking-tight tabular-nums mt-1">
                        ${pPrice.toLocaleString("es-AR")}
                      </p>
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
