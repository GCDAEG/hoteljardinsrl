import type { Metadata } from "next";

import "./globals.css";
import { FooterSection } from "../components/layout/Footer";
import ExampleMessage from "@/components/layout/Sections/Example";
import { Navbar } from "@/components/layout/Nav";
// Importamos las nuevas fuentes específicas para el Hotel Jardín
import { inter, playfair, sacramento } from "@/lib/fonts";
import ReactLenis from "lenis/react";
import PageLoader from "./PageLoader";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "Hotel Anturio | Gualeguaychú, Entre Ríos",
    template: "%s | Hotel Anturio",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  openGraph: {
    title: "Hotel Anturio - Gualeguaychú",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    images: [
      {
        url: "/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Hotel Anturio Gualeguaychú",
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
      className={cn(
        inter.variable,
        playfair.variable,
        sacramento.variable,
        "font-sans scroll-smooth",
      )}
      suppressHydrationWarning
    >
      <body
        className="
          min-h-screen antialiased 
          text-stone-800 bg-white
          overflow-x-hidden
          w-full
          flex flex-col items-center
        "
      >
        <ReactLenis root>
          {/* Se remueve CartProvider y SearchProvider ya que toda la conversión es directa a WhatsApp */}
          <PageLoader />
          <Navbar />
          <main className="w-full flex-1 flex flex-col items-center">
            {children}
          </main>
          <FooterSection />
          <ExampleMessage />
        </ReactLenis>
      </body>
    </html>
  );
}
