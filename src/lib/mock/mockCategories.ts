import { mockProducts } from "./mockData";

export interface MockCategory {
  id: string;
  name: string;
  image: string;
  totalProducts: number;
  inStockProducts: number;
}

const CATEGORY_DEFINITIONS = [
  {
    id: "featured",
    name: "Destacados",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "engine",
    name: "Motor",
    image:
      "https://i.postimg.cc/CxM3Yq90/00f933ac-3064-4df5-aea3-d4ab7e2af00e.webp",
  },
  {
    id: "brakes",
    name: "Frenos",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "suspension",
    name: "Suspensión",
    image:
      "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "lighting",
    name: "Iluminación",
    image:
      "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "tires",
    name: "Neumáticos",
    image:
      "https://images.unsplash.com/photo-1601500697537-dd8a73c46e78?q=80&w=500&auto=format&fit=crop",
  },
  {
    id: "accessories",
    name: "Accesorios",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=500&auto=format&fit=crop",
  },
];

export const mockCategories: MockCategory[] = CATEGORY_DEFINITIONS.map(
  (category) => {
    const products = mockProducts.filter(
      (product) => product.categoryId === category.id
    );

    return {
      ...category,
      totalProducts: products.length,
      inStockProducts: products.filter((product) => product.inStock).length,
    };
  }
);

export default mockCategories;