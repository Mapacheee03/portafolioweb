export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "MA-ERP-WEB",
    description:
      "Mantenimiento evolutivo y modernización de un sistema ERP empresarial utilizado para la gestión de proyectos, recursos y actividades organizacionales.",
    stack: ["Laravel", "Tailwind CSS", "Vite", "JavaScript", "PostgreSQL"],
    github: "",
    demo: "",
  },

  {
    title: "MP Music's",
    description:
      "Aplicación web de música que permite explorar y reproducir contenido musical, con un backend desarrollado en Node.js y Prisma para gestionar la información almacenada en PostgreSQL.",
    stack: ["React", "Vite", "Node.js", "PostgreSQL", "Prisma"],
    github: "https://github.com/Mapacheee03/ReactMusic",
    demo: "https://mpmusic-app.vercel.app/",
  },

{
  title: "Foreign Food",
  description:
    "Progressive Web App desarrollada para ayudar a personas foráneas a encontrar y recomendar lugares cercanos con una buena relación calidad-precio, utilizando React y TypeScript en el frontend y Node.js, Sequelize y PostgreSQL en el backend.",
  stack: ["React", "TypeScript", "Vite", "Node.js", "PostgreSQL", "Sequelize"],
  github: "",
  demo: "https://foreign-food.vercel.app/",
},
];
