import type { Proyecto } from "../types/Proyecto"
/* Estado:
 true - terminado
 false- en curso
*/
export const proyectos: Proyecto[] = [
    {
      "titulo": "Cositos De Lana",
      "slug": "cositos-de-lana",
      "type": "Landing Page",
      "estado": true,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2025,
      "demoUrl": "https://cositos-de-lana.vercel.app/",
      "gitUrl": "https://github.com/OutziderDev/CositosDeLana",
      "descripcionCard": "Sitio web freelance desarrollado para dar visibilidad a un emprendimiento de tejidos artesanales, con un diseño moderno y enfoque en la experiencia del usuario.",
      "descripcionPage" : {
        "descripcion": "Este proyecto terminó convirtiéndose en uno de mis favoritos. Aunque inicialmente tuve ciertas dudas con la paleta de colores y algunos requisitos del cliente, a medida que avanzaba en el desarrollo, logré conectar profundamente con la propuesta visual y funcional. El tiempo limitado supuso un gran desafío, ya que debía entregar parte clave de la experiencia UX/UI bajo plazos exigentes, sin comprometer el rendimiento del sitio ni las buenas prácticas de programación. Este proyecto representó un excelente ejercicio de adaptación, diseño estratégico y enfoque técnico bajo presión.",
        "metas": [  "Adaptación Visual según la Identidad del Cliente",  "Desarrollo UX/UI bajo Plazos Exigentes",  "Optimización del Rendimiento Web","Aplicación de Buenas Prácticas en Código",  "Diseño Responsive para Múltiples Dispositivos"],
        "Pd": ""
      },
      "thumb": "thumbnails/thumb-cositosdelana.webp",
      "imagen": "",
      "stack": ["Aastro","Tailwind","Github"],
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
      "descripcionCard": "Desarrollo de la landing page de La Velada del Año V, el evento icónico del streamer Ibai Llanos. Se trata de un proyecto de código abierto de Midudev, donde los desarrolladores y diseñadores pueden aportar ideas y mejoras durante su desarrollo.",
      "descripcionPage" : {
        "descripcion": "Estoy muy feliz de haber participado y contribuido al desarrollo del sitio web de La Velada del Año V, el evento icónico de Ibai Llanos. En este proyecto de código abierto liderado por Midudev, tuve la oportunidad de aportar mejoras al código, solucionar problemas y proponer nuevas ideas. Esta iniciativa no solo permite compartir conocimientos, sino que también brinda una gran experiencia de aprendizaje y colaboración para la comunidad de desarrolladores.",
        "metas": ["Crear una Interfaz Intuitiva, Dinamica y Accesible", "Actualización Dinámica del Contenido", "Sistema Interactivo de Votación y Porras","Mantener Diseños Responsives","Integración con APIs"],
        "Pd": "Este proyecto es desarrollado por Midudev, y su código oficial está disponible en su repositorio de GitHub. Actualmente, se encuentra en desarrollo, lo que permite a la comunidad aportar mejoras e ideas. Además, las tecnologías definitivas aún no han sido completamente establecidas.",
        "Pr": "https://github.com/midudev/la-velada-web-oficial/pulls?q=is%3Apr+author%3AOutziderDev+",
      },
      "thumb": "thumbnails/thumb-la-velada.webp",
      "imagen": "",
      "stack": ["Aastro","Tailwind","Github"],
      "disable": false
    },
    {
      "titulo": "C.G Properties",
      "slug": "cg-properties",
      "type": "WEB",
      "estado": true,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2025,
      "demoUrl": "https://cg-properties-project-one.vercel.app/",
      "gitUrl": "https://github.com/OutziderDev/CGProperties-Project",
      "descripcionCard": "Proyecto que combina diferentes tecnologías para cumplir las necesidades de un cliente, quien necesita ofertar sus productos y servicios gestionando el contenido de la página en todo momento.",
      "descripcionPage" : {
        "descripcion": "Estoy muy contento de presentar este proyecto, el cual representó un nuevo reto para mí. Se trata de una solución que combina diferentes tecnologías para cumplir las necesidades de un cliente, quien requiere ofertar sus productos y servicios mientras gestiona el contenido de la página en todo momento. Durante su desarrollo, tuve la oportunidad de aprender y aplicar herramientas que no dominaba por completo, lo que me permitió crecer profesionalmente y adquirir nuevos conocimientos.",
        "metas": ["Diseño Responsive","Interfaz Amigable y Fácil de Usar","Gestión de Contenido en Tiempo Real","Galería de Imágenes en Estilo Collage","Integración con API","Almacenamiento Externo de Imágenes"],
        "Pd": "Este proyecto es privado y cuenta con una licencia de no uso. Sin embargo, fue cancelado a último momento. A pesar de ello, decidí alojarlo de manera gratuita con fines de aprendizaje y visibilidad. Debido a las condiciones del servidor, si desean ver la demo, es posible que deban esperar aproximadamente un minuto para que se active."
      },
      "thumb": "thumbnails/thumb-c.g.p.webp",
      "imagen": "/images/wallcgp-project.webp",
      "stack": ["Cloudinary","Strapi","Aastro","Tailwind","Github"],
      "disable": false
    },
    {
      "titulo": "Blog App - FSO",
      "slug": "blog-app-fso",
      "type": "Full Stack",
      "estado": true,
      "categoria": ["Desarrollo"],
      "fecha": 2024,
      "demoUrl": "https://portafolio-dev-bay.vercel.app/",
      "gitUrl": "https://github.com/OutziderDev/FullStack/tree/main/Part5/BlogListFrontend",
      "descripcionCard": "Aplicación web full-stack que permite a los usuarios registrar, gestionar y compartir sus blogs de forma sencilla. Desarrollada como parte del curso Fso de la Universidad de Helsinki, utilizando tecnologías modernas de frontend y backend",
      "descripcionPage" : {
        "descripcion": "Blog App es una aplicación web full-stack que permite a los usuarios registrar, gestionar y compartir sus blogs de forma sencilla. Desarrollada como parte del curso Full Stack Open de la Universidad de Helsinki, este proyecto abarca tanto el desarrollo frontend como backend. Me encargué de diseñar la interfaz visual utilizando Tailwind CSS, lo que me permitió mejorar mis habilidades en este framework de diseño y crear una experiencia de usuario fluida e intuitiva. Además, implementé el backend con todas las rutas necesarias, gestioné la autenticación de usuarios y utilicé middleware para asegurar el control adecuado de acceso y la validación de datos. Esta aplicación refleja mis habilidades en el manejo de tecnologías modernas tanto en el frontend como en el backend",
        "metas": ["Desarrollo del Frontend de la Aplicación",
          "Uso y Aprendizaje de Tailwind CSS para el Diseño",
          "Implementación de Diseño Responsivo para Todos los Dispositivos",
          "Desarrollo del Backend de la Aplicación",
          "Creación de Pruebas (Tests) para Asegurar la Calidad del Código",
          "Desarrollo de Rutas y Middleware para la Gestión de Solicitudes",
          "Implementación de CORS para Gestionar Permisos de Origen Cruzado",
          "Uso de JWT para la Autenticación y Seguridad de Usuarios",
          "Uso y Conexión con Mongoose para la Gestión de MongoDB"
        ],
        "Pd": "",
      },
      "thumb": "thumbnails/thumb-blogApp.webp",
      "imagen": "",
      "stack": ["JavaScript","ReactJs","Github","Tailwind","Express"],
      "disable": true
    },
    {
      "titulo": "Country Data - FSO",
      "slug": "country-data-fso",
      "type": "WEB",
      "estado": true,
      "categoria": ["Diseño UX/UI", "Desarrollo"],
      "fecha": 2024,
      "demoUrl": "https://contriesinfo.vercel.app/",
      "gitUrl": "https://github.com/OutziderDev/FullStack/tree/main/Part7/Countries-Hook",
      "descripcionCard": "Aplicación web que permite a los usuarios consultar datos básicos y curiosos sobre diversos países, como su población, idiomas y más. Consume una API  para obtener la información en tiempo real. Desarrollada como parte del curso de Fullstack Open ",
      "descripcionPage" : {
        "descripcion": "Aplicación web que permite a los usuarios consultar datos sobre diversos países, como su población, idiomas y moneda, a través de una API que obtiene la información en tiempo real. Desarrollada como parte del curso Full Stack Open, este proyecto me permitió trabajar tanto en el frontend como en la integración de APIs, creando una interfaz fácil de usar y dinámica.",
        "metas": [
          "Construir la interfaz de usuario con un diseño atractivo y funcional",
          "Implementar un diseño responsivo para adaptarse a diferentes dispositivos",
          "Consumir APIs externas para obtener información en tiempo real",
          "Crear Hooks personalizados para optimizar la gestión de componentes",
          "Gestionar el estado global de la aplicación de forma eficiente"
        ],
        "Pd": "",
      },
      "thumb": "thumbnails/thumb-weaterApp.webp",
      "imagen": "/videos/whaterApp.mp4",
      "stack": ["ReactJs","JavaScript","Github","Tailwind","TanStack"],
      "disable": false
    }
  ]