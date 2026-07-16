import { Inter, Playfair_Display, Sacramento } from "next/font/google";

// Fuente elegante para títulos de secciones y elementos de diseño refinados
export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// Fuente principal para textos de lectura y botones (muy limpia y legible)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Fuente caligráfica sutil para detalles de marca o firmas del hotel
export const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-cursive",
});