"use client";

import React from "react";
import Image from "next/image";
import { Plus, ChevronRight, Utensils, Flame } from "lucide-react";
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
      className="bg-criollo-bg pt-12 pb-24 flex justify-center w-full"
    >
      <div className="w-full max-w-2xl lg:max-w-3xl sm:px-0">
        {categories.map((category) => (
          <div key={category as string} className="mb-14 last:mb-0">
            
            {/* --- ENCABEZADO DE CATEGORÍA TRADICIONAL --- */}
            <div className="flex items-end justify-between mb-8 pb-3 border-b-2 border-criollo-border">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-criollo-primary uppercase tracking-[0.25em] mb-1.5">
                  Especialidades del Día
                </span>
                <h2 className="text-3xl font-serif font-black text-criollo-text leading-none tracking-tight">
                  {category as string}
                </h2>
              </div>
              
              <button className="text-[11px] font-bold text-criollo-muted uppercase tracking-widest flex items-center gap-1 transition-colors hover:text-criollo-primary active:scale-95">
                Ver todo{" "}
                <ChevronRight
                  className="size-4 text-criollo-atardecer"
                  strokeWidth={3}
                />
              </button>
            </div>

            {/* --- SCROLL HORIZONTAL NATIVO (Rápido y fluido) --- */}
            <div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 px-1">
              {getProductsByCategory(category as string).map((product) => {
                const pId = product.id;
                const pName = product.name;
                const pPrice = product.price;

                return (
                  <div
                    key={pId}
                    className="snap-start shrink-0 w-[185px] sm:w-[215px] flex flex-col group"
                  >
                    {/* CONTENEDOR DE IMAGEN (Estilo Portarretrato de Campo) */}
                    <div className="relative aspect-square w-full mb-4 rounded-[2.2rem] overflow-hidden bg-white border-4 border-white shadow-md transition-shadow duration-300 group-hover:shadow-lg">
                      {product.image && (
                        <Image
                          src={product.image}
                          alt={pName}
                          fill
                          sizes="(max-width: 640px) 185px, 215px"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      )}

                      {/* ETIQUETA DE PRECIO (El sol del Atardecer) */}
                      <div className="absolute top-3 left-3 bg-criollo-atardecer text-criollo-text px-3 py-1.5 rounded-xl shadow-md border border-white/20 transform -rotate-3">
                        <p className="text-sm font-sans font-black tracking-tight">
                          ${pPrice.toLocaleString("es-AR")}
                        </p>
                      </div>

                      {/* BOTÓN AGREGAR (Acción directa e instantánea) */}
                      <button
                        onClick={() =>
                          addToCart({
                            id: pId,
                            title: pName,
                            price: pPrice.toString(),
                            category: category as string,
                            image: product.image,
                          })
                        }
                        className="absolute bottom-3 right-3 size-12 rounded-xl bg-criollo-primary hover:bg-orange-800 text-white flex items-center justify-center shadow-md border border-white/10 transition-all duration-150 active:scale-90"
                        aria-label={`Agregar ${pName} al carrito`}
                      >
                        <Plus className="size-6 text-white" strokeWidth={3} />
                      </button>
                    </div>

                    {/* TEXTOS DEL PRODUCTO (Alineación Limpia) */}
                    <div className="px-1 flex flex-col gap-1">
                      <h3 className="text-lg font-serif font-bold text-criollo-text leading-tight tracking-tight group-hover:text-criollo-primary transition-colors">
                        {pName}
                      </h3>
                      <div className="flex items-center gap-1.5 text-criollo-muted">
                        <Flame className="size-3.5 text-criollo-atardecer" strokeWidth={2.5} />
                        <p className="text-[11px] font-sans font-bold uppercase tracking-tight">
                          Sabor de Fogón
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