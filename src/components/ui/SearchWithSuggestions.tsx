// src/components/Search/SearchWithSuggestions.tsx
import React, { useState, useRef, useEffect } from "react";
import { useSearch } from "@/context/SearchContext";
import { Box, CornerDownLeft, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { redirect, useRouter } from "next/navigation";
import { MockProduct } from "@/lib/mock/mockData";
import { getCategoryById, searchProducts } from "@/lib/mock/functions";

interface SearchWithSuggestionsProps {
  placeholder?: string;
  maxSuggestions?: number;
}

export const SearchWithSuggestions: React.FC<SearchWithSuggestionsProps> = ({
  placeholder = "Buscar productos...",
  maxSuggestions = 8,
}) => {
  const { setSearchQuery } = useSearch();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<MockProduct[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [allowAutoOpen, setAllowAutoOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  // Cerrar sugerencias al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Actualizar sugerencias
  useEffect(() => {
    const handleSetSuggestions = (results: any) => {
      setSuggestions(results.slice(0, maxSuggestions));
    };
    const open = (e: boolean) => {
      setIsOpen(e);
    };
    const handleSelectedIndex = (e: number) => {
      setSelectedIndex(e);
    };
    if (query.trim().length >= 2) {
      const results = searchProducts(query);
      handleSetSuggestions(results);

      if (allowAutoOpen) {
        open(true);
      }
    } else {
      handleSetSuggestions([]);
      open(false);
    }
    handleSelectedIndex(-1);
  }, [query, maxSuggestions, allowAutoOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setAllowAutoOpen(true);
    setQuery(value);
  };

  const handleSelect = (product: MockProduct) => {
    setQuery(product.name);
    setAllowAutoOpen(false);
    setIsOpen(false);
    setSearchQuery(product.name);
    router.push("/catalog");
    // Aquí podrías navegar al producto o ejecutar la búsqueda
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || suggestions.length === 0) {
      if (e.key === "Enter" && query.trim()) {
        setSearchQuery(query);
        setAllowAutoOpen(false);
        setIsOpen(false);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelect(suggestions[selectedIndex]);
        } else if (query.trim()) {
          setSearchQuery(query);
          setAllowAutoOpen(false);
          setIsOpen(false);
        }
        break;
      case "Escape":
        setAllowAutoOpen(false);
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <strong key={i} className="highlight">
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };

  return (
    <div className="relative w-full font-sans text-[#1a1a1a]" ref={wrapperRef}>
      {/* Contenedor de Entrada Principal */}
      <div className="relative flex items-center">
        <span className="absolute left-3.5 text-neutral-400 group-focus-within:text-[#e63946] transition-colors pointer-events-none">
          <Search className="size-4 stroke-[2.5]" />
        </span>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim().length >= 2) setIsOpen(true);
          }}
          placeholder={placeholder}
          className="w-full bg-white border-2 border-neutral-300 focus:border-black text-xs font-mono font-bold p-3 pl-10 pr-10 rounded-[4px] outline-none tracking-tight uppercase transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,0.05)] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          autoComplete="off"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setAllowAutoOpen(false);
              setIsOpen(false);
              inputRef.current?.focus();
            }}
            className="absolute right-3 text-neutral-400 hover:text-black p-1 rounded-[2px] hover:bg-neutral-100 transition-all"
            aria-label="Limpiar entrada"
          >
            <X className="size-4 stroke-[2.5]" />
          </button>
        )}
      </div>

      {/* --- MENU DESPLEGABLE TIPO TERMINAL DE STOCK --- */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute left-0 mt-2 w-full bg-white border-2 border-black rounded-[4px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-[150] overflow-hidden">
          {/* Encabezado del Desplegable */}
          <div className="bg-[#1a1a1a] px-4 py-2 border-b-2 border-black flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-[#f5f5f5] tracking-widest uppercase flex items-center gap-1.5">
              <span className="size-1.5 bg-[#e63946] inline-block" />
              CONCORDANCIAS DE INVENTARIO
            </span>
            <span className="font-mono text-[9px] text-neutral-500 uppercase">
              SELECCIÓN POR FLECHAS
            </span>
          </div>

          {/* Lista de Items */}
          <ul className="divide-y-2 divide-neutral-100 max-h-[340px] overflow-y-auto bg-white">
            {suggestions.map((product, index) => {
              const isSelected = index === selectedIndex;
              return (
                <li
                  key={product.id}
                  className={cn(
                    "p-3 transition-colors cursor-pointer group flex items-center justify-between gap-4",
                    isSelected
                      ? "bg-[#1a1a1a] text-white"
                      : "hover:bg-neutral-50 text-[#1a1a1a]",
                  )}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(product)}
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div
                      className={cn(
                        "p-1.5 rounded-[2px] border mt-0.5 shrink-0 hidden sm:block",
                        isSelected
                          ? "bg-[#2a2a2a] border-[#e63946] text-[#e63946]"
                          : "bg-[#f5f5f5] border-neutral-200 text-neutral-400",
                      )}
                    >
                      <Box className="size-3.5 stroke-[2.5]" />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span
                        className={cn(
                          "font-sans font-black text-xs uppercase tracking-tight truncate",
                          isSelected ? "text-white" : "text-black",
                        )}
                      >
                        {highlightText(product.name, query)}
                      </span>
                      <span
                        className={cn(
                          "font-mono text-[9px] uppercase tracking-wider mt-0.5",
                          isSelected ? "text-neutral-400" : "text-neutral-500",
                        )}
                      >
                        CAT: {getCategoryById(product.categoryId)?.name}
                      </span>
                    </div>
                  </div>

                  {/* Bloque de Precio Neto e Indicador de Selección */}
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono font-black text-xs tracking-tight">
                      ${product.price.toLocaleString("es-AR")}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="size-3.5 text-[#e63946] animate-pulse hidden sm:block stroke-[2.5]" />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Pie de Control General */}
          <div className="p-2 bg-[#f5f5f5] border-t-2 border-black">
            <button
              onClick={() => {
                setSearchQuery(query);
                setIsOpen(false);
              }}
              className="w-full bg-white hover:bg-[#1a1a1a] text-[#1a1a1a] hover:text-white font-mono text-[10px] font-bold p-2 rounded-[2px] border-2 border-neutral-300 hover:border-black uppercase tracking-wider transition-all block text-center"
            >
              EJECUTAR CONSULTA COMPLETA ({suggestions.length} ARTÍCULOS)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
