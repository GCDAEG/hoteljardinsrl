// ====================== FUNCIONES DE AYUDA ======================

import mockCategories, { MockCategory } from "./mockCategories";
import { MockProduct, mockProducts } from "./mockData";

export const getProductById = (id: string): MockProduct | undefined => {
  return mockProducts.find(product => product.id === id);
};

export const getProductByCode = (code: string): MockProduct | undefined => {
  return mockProducts.find(product => product.code === code);
};

export const getFeaturedProducts = (): MockProduct[] => {
  return getProductsByCategoryName("Destacados");
};

// ====================== FUNCIONES DE AYUDA CATEGORIES ======================

/**
 * Obtiene todas las categorías
 */
export const getCategories = (): MockCategory[] => {
  return mockCategories;
};

/**
 * Obtiene una categoría por su ID
 */
export const getCategoryById = (id: string): MockCategory | undefined => {
  return mockCategories.find((cat) => cat.id === id);
};

/**
 * Obtiene una categoría por su nombre
 */
export const getCategoryByName = (name: string): MockCategory | undefined => {
  return mockCategories.find(
    (cat) => cat.name.toLowerCase() === name.toLowerCase()
  );
};

/**
 * Obtiene productos de una categoría por ID
 */
export const getProductsByCategoryId = (categoryId: string) => {
  const category = getCategoryById(categoryId);
  if (!category) return [];
  return mockProducts.filter((p) => getCategoryById(p.categoryId)?.name === category.name);
};

/**
 * Obtiene productos de una categoría por nombre
 */
export const getProductsByCategoryName = (categoryName: string) => {
  return mockProducts.filter(
    (p) => getCategoryById(p.categoryId)?.name.toLowerCase() === categoryName.toLowerCase()
  );
};

/**
 * Obtiene solo categorías que tienen productos en stock
 */
export const getCategoriesWithStock = (): MockCategory[] => {
  return mockCategories.filter((cat) => cat.inStockProducts > 0);
};

/**
 * Obtiene categorías con al menos X productos
 */
export const getCategoriesWithMinProducts = (min: number): MockCategory[] => {
  return mockCategories.filter((cat) => cat.totalProducts >= min);
};

/**
 * Obtiene categorías ordenadas por cantidad de productos
 */
export const getCategoriesSortedByProducts = (
  order: "asc" | "desc" = "desc"
): MockCategory[] => {
  return [...mockCategories].sort((a, b) => {
    if (order === "desc") {
      return b.totalProducts - a.totalProducts;
    }
    return a.totalProducts - b.totalProducts;
  });
};

/**
 * Busca categorías por nombre o descripción
 */
export const searchCategories = (query: string): MockCategory[] => {
  const lowerQuery = query.toLowerCase();
  return mockCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(lowerQuery)
  );
};

// FUNCIONES DE AYUDA MOCKDATA

export const getBrands = (): string[] => {
  const brands = new Set(mockProducts.map(product => product.brand));
  return Array.from(brands);
};

export const getProductsByBrand = (brand: string): MockProduct[] => {
  return mockProducts.filter(product => 
    product.brand.toLowerCase() === brand.toLowerCase()
  );
};

export const getProductsByPriceRange = (min: number, max: number): MockProduct[] => {
  return mockProducts.filter(product => product.price >= min && product.price <= max);
};

export const getInStockProducts = (): MockProduct[] => {
  return mockProducts.filter(product => product.inStock);
};

export const getProductsOnSale = (): MockProduct[] => {
  return mockProducts.filter(product => product.oldPrice !== undefined);
};

export const searchProducts = (query: string): MockProduct[] => {
  const lowerQuery = query.toLowerCase();
  return mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.brand.toLowerCase().includes(lowerQuery) ||
    product.code.toLowerCase().includes(lowerQuery) ||
    getCategoryById(product.categoryId)?.name.toLowerCase().includes(lowerQuery) ||
    product.description?.toLowerCase().includes(lowerQuery) ||
    Object.values(product.spec).some(value => 
      String(value).toLowerCase().includes(lowerQuery)
    )
  );
};

export const getProductsBySpec = (key: string, value: string | number): MockProduct[] => {
  return mockProducts.filter(product => 
    product.spec[key] && String(product.spec[key]).toLowerCase() === String(value).toLowerCase()
  );
};

export const getDiscountPercentage = (product: MockProduct): number | null => {
  if (!product.oldPrice || product.oldPrice <= product.price) return null;
  return Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
};

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('es-AR')}`;
};

export const getSpecsArray = (product: MockProduct): { key: string; value: string | number }[] => {
  return Object.entries(product.spec).map(([key, value]) => ({ key, value }));
};