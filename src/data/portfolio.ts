export type Project = {
  title: string;
  description: string;
  imageTone: "cyan" | "amber" | "violet";
  tech: string[];
  role: string;
  features: string[];
  outcome: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const profile = {
  name: "Shanshui Wang",
  role: "Desarrollador Full Stack Junior",
  headline: "Código claro. Interfaces limpias.",
  heroWords: ["Shanshui", "Wang"],
  summary:
    "Java, Spring Boot, Angular y Vue para aplicaciones web enfocadas y mantenibles.",
  focusQuote: "Construyendo con calma. Aprendiendo siempre.",
};

export const skills = {
  backend: [
    "Java",
    "Spring Boot",
    "APIs REST",
    "MySQL",
    "Docker",
    "SQL",
  ],
  frontend: [
    "Angular",
    "Vue.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
  "flujo de trabajo": ["Git", "GitHub", "WordPress", "Despliegue en Render", "IA"],
};

export const projects: Project[] = [
  {
    title: "Chat en Tiempo Real",
    description:
      "Aplicación de mensajería con flujo WebSocket, interfaz Vue y backend Spring Boot.",
    imageTone: "cyan",
    tech: ["Vue.js", "Spring Boot", "WebSocket", "SQL", "Render"],
    role: "Diseño e implementación full stack",
    features: [
      "Canal de chat con actualización en tiempo real",
      "Separación clara entre API, servicio y cliente",
      "Preparado para despliegue y pruebas de flujo",
    ],
    outcome:
      "Proyecto orientado a demostrar comunicación cliente-servidor y estructura full stack.",
    repoUrl: "https://github.com/Wss-afk",
  },
  {
    title: "Aplicación CRUD Full Stack",
    description:
      "Panel CRUD con Angular, API REST en Spring Boot, persistencia MySQL y entorno Docker.",
    imageTone: "amber",
    tech: ["Angular", "Spring Boot", "MySQL", "REST API", "Docker"],
    role: "Backend REST, frontend de administración y base de datos",
    features: [
      "Operaciones crear, leer, actualizar y eliminar",
      "Modelo de datos conectado a MySQL",
      "Entorno reproducible para desarrollo local",
    ],
    outcome:
      "Caso práctico para mostrar fundamentos sólidos de aplicaciones empresariales.",
    repoUrl: "https://github.com/Wss-afk",
  },
  {
    title: "Shikoba | Desarrollo Web",
    description:
      "Trabajo web con WordPress, mantenimiento visual, maquetación y flujo colaborativo con Git.",
    imageTone: "violet",
    tech: ["WordPress", "Git", "Maquetación", "Trabajo en equipo"],
    role: "Soporte frontend, revisión visual y mantenimiento",
    features: [
      "Ajustes de maquetación y contenido",
      "Revisión de coherencia visual en páginas existentes",
      "Uso de Git dentro de un flujo de colaboración",
    ],
    outcome:
      "Experiencia aplicada en un entorno web real con foco en detalle y comunicación.",
  },
];

export const contactLinks = [
  { label: "Correo", href: "mailto:wang1259227230@gmail.com" },
  { label: "Teléfono", href: "tel:+34688186131" },
  { label: "GitHub", href: "https://github.com/Wss-afk" },
  { label: "LinkedIn", href: "https://linkedin.com/in/shanshuiwang" },
  { label: "CV", href: "/cv-shanshui-wang.pdf" },
];
