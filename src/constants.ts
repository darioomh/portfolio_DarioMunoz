export const PROFILE = {
  name: "Dario Muñoz",
  role: "Desarrollador de Software | Especialización en Inteligencia Artificial y Deep Learning",
  description: "Desarrollador de aplicaciones multiplataforma con experiencia en desarrollo backend, frontend y análisis de datos. Especializado en Java y tecnologías del ecosistema Android y .NET. Actualmente cursando un Máster en Inteligencia Artificial y Deep Learning, donde aplico técnicas de Machine Learning y procesamiento de datos para construir soluciones reales.",
  contact: {
    phone: "+34 663798433",
    email: "dariomunozherrero@gmail.com",
    location: "Toledo, España",
    linkedin: "https://www.linkedin.com/in/dario-munoz-herrero",
    github: "https://github.com/darioomh"
  },
  education: [
    {
      institution: "Formación FEDETO",
      degree: "Curso de Inteligencia Artificial aplicada a la empresa",
      period: "02/2026 - 06/2026",
      description: "Formación centrada en la aplicación práctica de inteligencia artificial en entornos empresariales, incluyendo desarrollo de soluciones mediante enfoque de vibe coding."
    },
    {
      institution: "IMF Smart Education - Universidad Católica de Ávila",
      degree: "Máster en Deep Learning e Inteligencia Artificial",
      period: "2025 - 2026"
    },
    {
      institution: "IES Azarquiel",
      degree: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
      period: "2023 - 2025"
    },
    {
      institution: "IES Juan de Lucena",
      degree: "Bachillerato de Ciencias Tecnológicas",
      period: "2021 - 2023"
    }
  ],
  experience: [
    {
      company: "Hewlett Packard Enterprise (CDS)",
      role: "Desarrollo de aplicaciones",
      period: "Mar 2025 – Jun 2025",
      highlights: [
        "Desarrollo de aplicaciones web y móviles participando en todas las fases del ciclo de desarrollo.",
        "Uso de tecnologías modernas tanto en frontend como en backend."
      ]
    }
  ],
  techStack: {
    languages: ["Java", "Kotlin", "C#", "Python", "SQL", "R"],
    backend: ["JDBC", "JPA", "REST", "Apache Tomcat", "Firebase", "Servlets", "FastAPI"],
    android: ["Kotlin", "Retrofit", "Jetpack Compose", "MVVM"],
    dotnet: ["Windows Forms", "WPF", ".NET MAUI"],
    dataIA: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "PySpark"],
    tools: ["Git", "GitHub", "Postman", "Scrum", "Desarrollo ágil"],
    architecture: ["Arquitectura MVC", "OOP", "Principios SOLID", "Maven", "Gradle"]
  },
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Medio" }
  ]
};

export const NAV_LINKS = [
  { label: "HISTORIA", href: "#story" },
  { label: "PROYECTOS", href: "#work" },
  { label: "TECNOLOGÍAS", href: "#labs" },
  { label: "TRAYECTORIA", href: "#exp" },
  { label: "CONTACTO", href: "#contact" }
];

export interface ProjectData {
  title: string;
  repo: string;
  description: string;
  tags: string[];
  image?: string;
}

export const PROJECTS: { professional: ProjectData[]; vibe: ProjectData[] } = {
  professional: [
    {
      title: "TFG - API Backend",
      repo: "https://github.com/darioomh/tfg-dam-api",
      description: "API backend desarrollada como proyecto final del grado superior, enfocada en arquitectura REST, organización del código y buenas prácticas.",
      tags: ["PYTHON", "FASTAPI", "SWAGGER", "REST"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop"
    },
    {
      title: "TFG - Aplicación Móvil",
      repo: "https://github.com/darioomh/tfg-dam-aplication-mobile",
      description: "Aplicación móvil conectada a la API del proyecto final, desarrollada con tecnologías Android modernas.",
      tags: ["KOTLIN", "ANDROID", "JETPACK COMPOSE"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop"
    }
  ],
  vibe: [
    {
      title: "Chatbot BBVA",
      repo: "https://github.com/munozherrerodario-alt/chatbot_BBVA",
      description: "Asistente inteligente desarrollado para BBVA enfocado en la automatización de consultas financieras y atención al cliente.",
      tags: ["TYPESCRIPT", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop"
    },
    {
      title: "IKEA Assistant",
      repo: "https://github.com/munozherrerodario-alt/ikea-assistant",
      description: "Asistente virtual para IKEA que facilita la búsqueda de productos y soporte en la experiencia de compra.",
      tags: ["TYPESCRIPT", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=450&fit=crop"
    },
    {
      title: "Chatbot Telefónica",
      repo: "https://github.com/munozherrerodario-alt/chatbot_Telefonica",
      description: "Solución de chatbot para Telefónica diseñada para optimizar la gestión de servicios y soporte técnico.",
      tags: ["TYPESCRIPT", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&h=450&fit=crop"
    },
    {
      title: "Chatbot Correos Express",
      repo: "https://github.com/munozherrerodario-alt/chatbot_correosExpress",
      description: "Asistente de IA para Correos Express especializado en el seguimiento de envíos y gestión logística.",
      tags: ["TYPESCRIPT", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop"
    }
  ]
};
