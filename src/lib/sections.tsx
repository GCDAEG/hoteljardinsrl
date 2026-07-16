// /src/lib/sections.ts

export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  {
    id: "hero",
    label: "Inicio",
  },
  {
    id: "services", // Coincide con el id del componente HowItWorks
    label: "Servicios",
  },
  {
    id: "rooms",
    label: "Habitaciones",
  },
  {
    id: "gallery",
    label: "Galería",
  },
  {
    id: "about",
    label: "Nuestra Historia",
  },
  {
    id: "location",
    label: "Ubicación",
  },
  {
    id: "testimonials",
    label: "Opiniones",
  },
];
