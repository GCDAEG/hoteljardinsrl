import { useCart } from "@/context/CartContext";
import { getCategoryById } from "@/lib/mock/functions";
import { MockProduct } from "@/lib/mock/mockData";
import { cn } from "@/lib/utils";
import { AlertTriangle, Settings, ShoppingCart } from "lucide-react";
import { useState } from "react";

const CatalogProductCard: React.FC<{ product: MockProduct }> = ({
  product,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(val);
  };
  // id: string;
  // title: string;
  // price: string;
  // category: string;
  // quantity: number;
  // image: string;
  const addProductToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.name,
      price: product.price.toString(),
      category: product.categoryId,
      image: product.image,
      quantity: quantity,
    };
    // addToCart expects the product item without a quantity property
    // Quantity should be handled by the cart context when adding
    addToCart(productToAdd);
  };
  return (
    <div
      className={cn(
        "bg-white border-2 rounded-[4px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row overflow-hidden group transition-all w-full mx-auto",
        product.inStock ? "border-black" : "border-neutral-300 opacity-75",
      )}
    >
      {/* Columna Izquierda: Imagen y Control de Lote */}
      <div className="w-full sm:w-44 md:w-48 bg-[#111] relative flex flex-row sm:flex-col justify-between shrink-0 border-b-2 sm:border-b-0 sm:border-r-2 border-black h-28 sm:h-auto">
        <div className="relative w-1/3 sm:w-full h-full sm:h-44 md:h-48 min-h-[112px] sm:min-h-[160px] shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          {/* Identificador SKU Duro */}
          <span className="absolute top-1.5 left-1.5 font-mono text-[8px] sm:text-[9px] font-bold bg-black text-white px-1.5 py-0.5 rounded-[2px] border border-[#333]">
            {product.code}
          </span>
        </div>

        {/* Control Numérico Rígido - Adaptado para touch cómodo en móviles */}
        {product.inStock && (
          <div className="flex flex-col sm:flex-row items-center justify-center flex-1 sm:w-full h-full sm:h-11 bg-[#f5f5f5] sm:border-t-2 border-l-2 sm:border-l-0 border-black font-mono text-xs">
            <div className="flex items-center w-full h-full">
              <button
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                className="w-1/3 h-full font-bold text-center hover:bg-neutral-200 transition-colors border-b sm:border-b-0 sm:border-r border-neutral-300 flex items-center justify-center min-h-[44px] sm:min-h-0 text-sm"
              >
                -
              </button>
              <span className="w-1/3 text-center bg-white h-full flex items-center justify-center font-bold text-xs">
                {quantity}U
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-1/3 h-full font-bold text-center hover:bg-neutral-200 transition-colors border-t sm:border-t-0 sm:border-l border-neutral-300 flex items-center justify-center min-h-[44px] sm:min-h-0 text-sm"
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Columna Derecha: Especificaciones Técnicas y Liquidación */}
      <div className="flex-1 p-4 flex flex-col justify-between bg-white min-w-0">
        <div>
          {/* Encabezado de Ficha */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-[9px] sm:text-[10px] font-black text-[#e63946] uppercase tracking-wider truncate">
              {product.brand} {getCategoryById(product.categoryId)?.name}
            </span>
            {!product.inStock && (
              <span className="flex items-center gap-1 font-mono text-[8px] sm:text-[9px] font-bold text-amber-600 bg-amber-50 border border-amber-300 px-1.5 py-0.5 rounded-[2px] shrink-0">
                <AlertTriangle className="size-3" /> SIN STOCK
              </span>
            )}
          </div>

          <h3 className="font-sans font-black text-base sm:text-lg text-black uppercase tracking-tight leading-tight mb-1.5">
            {product.name}
          </h3>

          {product.description && (
            <p className="text-neutral-500 font-sans text-[11px] sm:text-xs mb-3 leading-normal">
              {product.description}
            </p>
          )}

          {/* --- FICHA DE ESPECIFICACIONES DINÁMICAS (spec) --- */}
          <div className="bg-[#f5f5f5] border border-neutral-200 rounded-[2px] p-2.5 font-mono text-[9px] sm:text-[10px] space-y-1 w-full overflow-hidden">
            <div className="text-neutral-400 border-b border-neutral-200 pb-1 uppercase font-bold tracking-wider flex items-center gap-1">
              <Settings className="size-3 text-[#e63946]" /> ESPECIFICACIONES
              TÉCNICAS:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-neutral-600 pt-0.5">
              {Object.entries(product.spec).map(([key, value]) => (
                <div key={key} className="truncate">
                  <span className="text-neutral-400">{key}:</span> {value}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloque de Cierre y Despacho */}
        <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-dashed border-neutral-200 w-full">
          <div className="flex flex-col shrink-0">
            {product.oldPrice && (
              <span className="font-mono text-[9px] sm:text-[10px] text-neutral-400 line-through leading-none mb-0.5">
                {formatCurrency(product.oldPrice)}
              </span>
            )}
            <span className="font-mono font-black text-sm sm:text-base md:text-lg text-black tracking-tight leading-none">
              {formatCurrency(product.price)}
            </span>
          </div>

          <button
            disabled={!product.inStock}
            className={cn(
              "h-10 sm:h-11 px-4 sm:px-5 flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border-2 rounded-[4px] transition-all shrink-0 min-h-[40px]",
              product.inStock
                ? "bg-[#1a1a1a] border-black text-white hover:bg-[#e63946] active:translate-x-0.5 active:translate-y-0.5"
                : "bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed",
            )}
            onClick={addProductToCart}
          >
            <ShoppingCart className="size-3.5 stroke-[2.5]" />
            <span>AGREGAR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProductCard;
