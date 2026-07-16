// src/lib/mockProducts.ts

export interface MockProduct {
  id: string;
  code: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  inStock: boolean;
  image: string;
  spec: {
    [key: string]: string | number;
  };
  categoryId: string; // ✅ Cambiado de 'category' a 'categoryId'
  description?: string;
}

export const mockProducts: MockProduct[] = [
  // ====================== DESTACADOS (2) ======================
  {
    id: "dest-1",
    code: "SHK-001",
    name: "Amortiguador Delantero",
    brand: "Monroe",
    price: 45900,
    oldPrice: 52000,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7VC995A1K4pzRNaPUtwDz-gHD1GXq8PlcQ&s",
    spec: {
      "Tipo": "Hidráulico",
      "Posición": "Delantero",
      "Diámetro": "38mm",
      "Recorrido": "180mm",
      "Garantía": "24 meses"
    },
    categoryId: "featured", // ✅ ID de categoría
    description: "Amortiguador hidráulico de alto rendimiento para mayor estabilidad"
  },
  {
    id: "dest-2",
    code: "BAT-002",
    name: "Batería 12V 60Ah",
    brand: "Bosch",
    price: 78900,
    inStock: true,
    image: "https://bateriascremer.com/webfiles/cremer/productos/15/0.webp",
    spec: {
      "Voltaje": "12V",
      "Capacidad": "60Ah",
      "Tecnología": "AGM",
      "CCA": "560A",
      "Mantenimiento": "Libre"
    },
    categoryId: "featured", // ✅ ID de categoría
    description: "Batería libre de mantenimiento con tecnología AGM"
  },

  // ====================== MOTOR (2) ======================
  {
    id: "mot-1",
    code: "COR-007",
    name: "Kit de Correa de Distribución",
    brand: "Gates",
    price: 65900,
    inStock: true,
    image: "https://tienda.centrowagen.com/www/wp-content/uploads/2018/09/03G198119C.jpg",
    spec: {
      "Motor": "1.6L 16V",
      "Incluye": "Correa, tensor, polea",
      "Duración": "100.000 km"
    },
    categoryId: "engine", // ✅ ID de categoría
    description: "Kit completo con correa, tensor y polea para motor 1.6L"
  },
  {
    id: "mot-2",
    code: "TER-008",
    name: "Termostato",
    brand: "Valeo",
    price: 15400,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrwM0anM26Pl1xLkI3ptJahHQCtFQU5r--A&s",
    spec: {
      "Temperatura": "87°C",
      "Diámetro": "54mm",
      "Material": "Latón"
    },
    categoryId: "engine", // ✅ ID de categoría
    description: "Termostato original de 87°C para sistema de refrigeración"
  },

  // ====================== FRENOS (2) ======================
  {
    id: "fre-1",
    code: "DIS-013",
    name: "Disco de Freno Delantero",
    brand: "Brembo",
    price: 38700,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTkO2N7cB5pzq8Jt2pb8iLyurRr6bXa6vmdg&s",
    spec: {
      "Diámetro": "280mm",
      "Grosor": "24mm",
      "Tipo": "Ventilado"
    },
    categoryId: "brakes", // ✅ ID de categoría
    description: "Disco de freno ventilado de alta resistencia térmica"
  },
  {
    id: "fre-2",
    code: "PAS-014",
    name: "Pastillas de Freno Traseras",
    brand: "Ferodo",
    price: 23500,
    inStock: true,
    image: "https://repuestos.motoshotwheels.com/wp-content/uploads/2024/02/pastillas-freno-trasero-yamaha-mt-07-mt-09-r7-r1-polini-174.0072.jpg",
    spec: {
      "Material": "Semimetálico",
      "Posición": "Trasero",
      "Set": "4 pastillas"
    },
    categoryId: "brakes", // ✅ ID de categoría
    description: "Pastillas de freno semi-metálicas para mayor durabilidad"
  },

  // ====================== SUSPENSIÓN (2) ======================
  {
    id: "sus-1",
    code: "AMO-019",
    name: "Amortiguador Trasero",
    brand: "KYB",
    price: 42300,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7P-kn761s0lV0zo74jw6T3ok_04bmtABeHQ&s",
    spec: {
      "Tipo": "Doble tubo",
      "Posición": "Trasero",
      "Diámetro": "32mm"
    },
    categoryId: "suspension", // ✅ ID de categoría
    description: "Amortiguador hidráulico trasero de doble tubo"
  },
  {
    id: "sus-2",
    code: "RES-020",
    name: "Espiral de Resorte",
    brand: "Eibach",
    price: 28900,
    inStock: true,
    image: "https://img.freepik.com/vector-premium/icono-vector-resorte-espiral_97886-20538.jpg",
    spec: {
      "Posición": "Delantero",
      "Carga": "550kg",
      "Altura": "300mm"
    },
    categoryId: "suspension", // ✅ ID de categoría
    description: "Resorte helicoidal para suspensión delantera"
  },

  // ====================== ILUMINACIÓN (2) ======================
  {
    id: "ilu-1",
    code: "FAR-025",
    name: "Farola Led DRL",
    brand: "Osram",
    price: 39800,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbz8lLqsAOOIy5HQWqeJwS8KDVeixVQ9-vcA&s",
    spec: {
      "Potencia": "15W",
      "Lúmenes": "1200lm",
      "Color": "6000K",
      "DRL": "Incluido"
    },
    categoryId: "lighting", // ✅ ID de categoría
    description: "Farola LED con luz diurna incorporada (DRL)"
  },
  {
    id: "ilu-2",
    code: "LUZ-026",
    name: "Luz Trasera Full LED",
    brand: "Hella",
    price: 45600,
    inStock: true,
    image: "https://image.made-in-china.com/202f0j00qNGiMQFCnapy/High-Quality-Auto-Lamp-Full-LED-Rear-Lamp-Suitable-for-VW-Golf-6-2008-2013-Turn-Signal-Tail-Lamp.webp",
    spec: {
      "Tipo": "Full LED",
      "Función": "Stop, posición, giro",
      "Tecnología": "OLED"
    },
    categoryId: "lighting", // ✅ ID de categoría
    description: "Luz trasera completa con tecnología LED"
  },

  // ====================== NEUMÁTICOS (2) ======================
  {
    id: "neu-1",
    code: "NEU-031",
    name: "Neumático 205/55R16",
    brand: "Michelin",
    price: 159000,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUjDaVjxn35W_qAmLG-_RNuThOK9GqMEU43A&s",
    spec: {
      "Medida": "205/55R16",
      "Índice": "91V",
      "Tipo": "Todo temporada",
      "Peso": "8.5kg"
    },
    categoryId: "tires", // ✅ ID de categoría
    description: "Neumático todo temporada 205/55R16 91V"
  },
  {
    id: "neu-2",
    code: "NEU-032",
    name: "Neumático 225/45R17",
    brand: "Pirelli",
    price: 189000,
    oldPrice: 210000,
    inStock: true,
    image: "https://centraltire.com.ar/wp-content/uploads/2023/07/neumatico-goodyear-22545-r17-94w-efficientgrip-Central-Tire.jpg.webp",
    spec: {
      "Medida": "225/45R17",
      "Índice": "94W",
      "Tipo": "Deportivo",
      "Peso": "9.2kg"
    },
    categoryId: "tires", // ✅ ID de categoría
    description: "Neumático deportivo 225/45R17 94W"
  },

  // ====================== ACCESORIOS (2) ======================
  {
    id: "acc-1",
    code: "TAP-037",
    name: "Tapizado de Asientos",
    brand: "Coverking",
    price: 58900,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1CLoeUTKdQwyL8QPL0OM_b2ksCthd4o8kEQ&s",
    spec: {
      "Material": "Cuero sintético",
      "Color": "Negro",
      "Set": "5 piezas",
      "Universal": "Sí"
    },
    categoryId: "accessories", // ✅ ID de categoría
    description: "Funda de asientos universal en cuero sintético"
  },
  {
    id: "acc-2",
    code: "ALF-038",
    name: "Alfombrillas de Goma",
    brand: "WeatherTech",
    price: 23400,
    inStock: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8r_gHMS_EpYffR_rRaA1VG4pDaoL_htWTeg&s",
    spec: {
      "Material": "Goma",
      "Set": "4 piezas",
      "Color": "Negro",
      "Antideslizante": "Sí"
    },
    categoryId: "accesorios", // ✅ ID de categoría
    description: "Juego de alfombrillas de goma originales (4 piezas)"
  }
];



// src/lib/mockData.ts


