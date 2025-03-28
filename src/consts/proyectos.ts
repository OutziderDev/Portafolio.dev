import type { Proyecto } from "../types/Proyecto"

export const proyectos: Proyecto[] = [
    {
      "titulo": "C.G Properties",
      "slug": "cg-properties",
      "type": "WEB",
      "estado": true,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2025,
      "demoUrl": "cg-properties-project-one.vercel.app",
      "gitUrl": "https://github.com/OutziderDev/CGProperties-Project",
      "descripcion": "Proyecto profesional para un cliente quien deseaba tener su web para ofertar sus productos y servicios manteniendo el control de su contenido en todo momento.",
      "thumb": "thumb-c.g.p.webp",
      "imagen": "",
      "stack": ["Cloudinary","Strapi","Aastro","Tailwind","Github"],
      "disable": false
    },
    {
      "titulo": "La Velada del Año",
      "slug": "la-velada-oficial",
      "type": "Landing Page",
      "estado": false,
      "categoria": ["Desarrollo"],
      "fecha": 2025,
      "demoUrl": "https://www.infolavelada.com/",
      "gitUrl": "https://github.com/midudev/la-velada-web-oficial",
      "descripcion": "Desarrollo de la Landing Page de  La velada del año de Ibai llanos de Codigo Abierto",
      "thumb": "thumb-la-velada.webp",
      "imagen": "",
      "stack": ["Aastro","Tailwind","Github"],
      "disable": false
    },
    {
      "titulo": "Portafolio Web",
      "slug": "portafolio-web",
      "type": "WEB",
      "estado": true,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2025,
      "demoUrl": "https://github.com/OutziderDev/Portafolio.dev",
      "gitUrl": "https://github.com/OutziderDev/Portafolio.dev",
      "descripcion": "Portafolio digital donde presento mi experiencia, habilidades y proyectos de forma profesional. También incluyo información sobre mí, enlaces a mis trabajos y una muestra de lo que puedo aportar.",
      "thumb": "thumb-portafolio.webp",
      "imagen": "",
      "stack": ["Aastro","JavaScript","Tailwind","Github"],
      "disable": false
    },
    {
      "titulo": "Blog App - FSO",
      "slug": "blog-app-fso",
      "type": "SPA",
      "estado": false,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2024,
      "demoUrl": "https://github.com/OutziderDev/FullStack/tree/main/Part5/BlogListFrontend",
      "gitUrl": "https://github.com/OutziderDev/FullStack/tree/main/Part5/BlogListFrontend",
      "descripcion": "Aplicación web full-stack que permite a los usuarios registrar, gestionar y compartir sus blogs de forma sencilla. Desarrollada como parte del curso Fso de la Universidad de Helsinki, utilizando tecnologías modernas de frontend y backend",
      "thumb": "thumb-blogApp.webp",
      "imagen": "",
      "stack": ["JavaScript","ReactJs","Github","Tailwind","Express"],
      "disable": true
    },
    {
      "titulo": "Country Data - FSO",
      "slug": "country-data-fso",
      "type": "WEB",
      "estado": false,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2024,
      "demoUrl": "https://github.com/OutziderDev/FullStack/tree/main/Part7/Countries-Hook",
      "gitUrl": "https://github.com/OutziderDev/FullStack/tree/main/Part7/Countries-Hook",
      "descripcion": "Aplicación web que permite a los usuarios consultar datos básicos y curiosos sobre diversos países, como su población, idiomas y más. Consume una API  para obtener la información en tiempo real. Desarrollada como parte del curso de Fullstack Open ",
      "thumb": "thumb-weaterApp.webp",
      "imagen": "",
      "stack": ["ReactJs","JavaScript","Github","Tailwind","TanStack"],
      "disable": true
    }
  ]