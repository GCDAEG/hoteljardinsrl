import type { Metadata } from "next";

import "./globals.css";
import { FooterSection } from "../components/layout/Footer";
import ExampleMessage from "@/components/layout/Sections/Example";
import { Navbar } from "@/components/layout/Nav";
// Lora aportará el toque clásico/gourmet a los títulos, Inter la legibilidad general
import { lora, inter } from "@/lib/fonts";
import ReactLenis from "lenis/react";
import PageLoader from "./PageLoader";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: {
    default: "Santa Gula | Menú Digital",
    template: "%s | Tu Web Hoy",
  },
  description:
    "Menú digital de Santa Gula Rotisería. Descubrí nuestras especialidades.",
  openGraph: {
    title: "Santa Gula Rotisería",
    description: "Explorá nuestro menú y hacé tu pedido fácilmente.",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Santa Gula Rotisería",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(inter.variable, lora.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen antialiased text-gula-text bg-gula-bg
          overflow-x-hidden
          min-w-screen
          flex flex-col items-center
        "
      >
        <ReactLenis root>
          <CartProvider>
            <PageLoader />
            <Navbar />
            {children}
            <FooterSection />
            <ExampleMessage />
          </CartProvider>
        </ReactLenis>
      </body>
    </html>
  );
}
