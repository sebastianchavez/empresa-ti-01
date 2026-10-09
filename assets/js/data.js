// =====================================================
// DATA.JS - Datos mockeados centralizados
// =====================================================

const APP_DATA = {
  empresa: {
    nombre: "DevForge",
    tagline: "Construimos el software del futuro",
    descripcionCorta: "Empresa líder en desarrollo de software con más de una década transformando ideas en soluciones digitales de alto impacto.",
    email: "contacto@devforge.com",
    telefono: "+52 55 1234 5678",
    whatsapp: "+52 55 8765 4321",
    direccion: "Av. Reforma 1234, Col. Centro, CDMX, México",
    horarios: [
      { dia: "Lunes a Viernes", horario: "09:00 - 18:00" },
      { dia: "Sábado", horario: "10:00 - 14:00" },
      { dia: "Domingo", horario: "Cerrado" }
    ],
    redes: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
      github: "#",
      youtube: "#"
    }
  },

  stats: [
    { valor: 150, sufijo: "+", label: "Proyectos Entregados" },
    { valor: 80, sufijo: "+", label: "Clientes Satisfechos" },
    { valor: 12, sufijo: "", label: "Años de Experiencia" },
    { valor: 25, sufijo: "", label: "Países Alcanzados" }
  ],

  tecnologias: [
    "React", "Vue", "Angular", "Node.js", "Python", "Java",
    "TypeScript", "PHP", "Laravel", "Django", "AWS", "Azure",
    "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "Flutter", "React Native"
  ],

  servicios: [
    {
      id: 1,
      titulo: "Desarrollo Web",
      descripcion: "Aplicaciones web modernas, escalables y de alto rendimiento con las últimas tecnologías del mercado.",
      tecnologias: ["React", "Vue", "Angular", "Node.js"],
      icono: "code",
      destacado: true
    },
    {
      id: 2,
      titulo: "Aplicaciones Móviles",
      descripcion: "Apps nativas y multiplataforma para iOS y Android con experiencia de usuario excepcional.",
      tecnologias: ["Flutter", "React Native", "Swift", "Kotlin"],
      icono: "mobile",
      destacado: true
    },
    {
      id: 3,
      titulo: "Software a Medida",
      descripcion: "Soluciones empresariales personalizadas para resolver los desafíos únicos de tu negocio.",
      tecnologias: ["Java", "C#", ".NET", "Python"],
      icono: "settings",
      destacado: true
    },
    {
      id: 4,
      titulo: "Cloud & DevOps",
      descripcion: "Infraestructura escalable en la nube con despliegue continuo y monitoreo avanzado.",
      tecnologias: ["AWS", "Azure", "Docker", "Kubernetes"],
      icono: "cloud"
    },
    {
      id: 5,
      titulo: "Consultoría TI",
      descripcion: "Asesoramiento estratégico para optimizar tus procesos tecnológicos y acelerar tu transformación digital.",
      tecnologias: ["Estrategia", "Arquitectura", "Auditoría"],
      icono: "briefcase"
    },
    {
      id: 6,
      titulo: "UX/UI Design",
      descripcion: "Diseño centrado en el usuario que combina estética, funcionalidad y conversión.",
      tecnologias: ["Figma", "Adobe XD", "Prototyping"],
      icono: "palette"
    },
    {
      id: 7,
      titulo: "Mantenimiento & Soporte",
      descripcion: "Soporte técnico continuo, actualizaciones y mejoras evolutivas para tus sistemas.",
      tecnologias: ["24/7", "SLA", "Monitoreo"],
      icono: "support"
    },
    {
      id: 8,
      titulo: "Integración de APIs",
      descripcion: "Conexión de sistemas, microservicios y APIs RESTful para un ecosistema digital cohesivo.",
      tecnologias: ["REST", "GraphQL", "Microservicios"],
      icono: "link"
    }
  ],

  equipo: [
    {
      id: 1,
      nombre: "Carlos Méndez",
      cargo: "CEO & Fundador",
      bio: "Más de 15 años liderando proyectos de transformación digital en LATAM.",
      avatar: "CM"
    },
    {
      id: 2,
      nombre: "Ana Rodríguez",
      cargo: "CTO",
      bio: "Arquitecta de soluciones cloud y experta en escalabilidad de sistemas.",
      avatar: "AR"
    },
    {
      id: 3,
      nombre: "Luis Torres",
      cargo: "Lead Developer",
      bio: "Full-stack developer con pasión por clean code y arquitecturas modernas.",
      avatar: "LT"
    },
    {
      id: 4,
      nombre: "María García",
      cargo: "UX/UI Lead",
      bio: "Diseñadora de experiencias digitales con enfoque en usabilidad y conversión.",
      avatar: "MG"
    },
    {
      id: 5,
      nombre: "Diego Ramírez",
      cargo: "DevOps Engineer",
      bio: "Especialista en CI/CD, automatización y orquestación de contenedores.",
      avatar: "DR"
    },
    {
      id: 6,
      nombre: "Sofía Hernández",
      cargo: "Project Manager",
      bio: "Certificada PMP, gestiona proyectos ágiles con equipos multiculturales.",
      avatar: "SH"
    }
  ],

  proyectos: [
    {
      id: 1,
      titulo: "E-commerce Premium",
      categoria: "web",
      descripcion: "Tienda online con +10K productos y pasarela de pagos múltiples.",
      tecnologias: ["Django", "PostgreSQL", "Stripe"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      titulo: "App de Delivery",
      categoria: "mobile",
      descripcion: "Aplicación de entregas en tiempo real con geolocalización.",
      tecnologias: ["Flutter", "Firebase", "Google Maps"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      titulo: "Dashboard Analytics",
      categoria: "web",
      descripcion: "Panel de control con visualización de datos en tiempo real.",
      tecnologias: ["React", "D3.js", "Node.js"],
      color: "from-violet-500 to-fuchsia-600"
    },
    {
      id: 4,
      titulo: "ERP Empresarial",
      categoria: "software",
      descripcion: "Sistema integral de gestión para empresa manufacturera.",
      tecnologias: ["Java", "Spring", "Oracle"],
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 5,
      titulo: "Red Social Corporativa",
      categoria: "web",
      descripcion: "Plataforma interna de comunicación empresarial.",
      tecnologias: ["Vue.js", "Laravel", "Redis"],
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 6,
      titulo: "App de Salud",
      categoria: "mobile",
      descripcion: "Telemedicina con videoconsultas y seguimiento de pacientes.",
      tecnologias: ["React Native", "WebRTC", "AWS"],
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 7,
      titulo: "Sistema de Inventarios",
      categoria: "software",
      descripcion: "Gestión de stock con códigos QR y reportes automatizados.",
      tecnologias: ["PHP", "MySQL", "Bootstrap"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 8,
      titulo: "Plataforma Educativa",
      categoria: "web",
      descripcion: "LMS con cursos en video, evaluaciones y certificaciones.",
      tecnologias: ["Next.js", "MongoDB", "AWS S3"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 9,
      titulo: "App de Finanzas",
      categoria: "mobile",
      descripcion: "Billetera digital con transferencias y pagos QR.",
      tecnologias: ["Flutter", "Node.js", "PostgreSQL"],
      color: "from-teal-500 to-cyan-600"
    }
  ],

  testimonios: [
    {
      id: 1,
      nombre: "Roberto Sánchez",
      cargo: "Director de Tecnología",
      empresa: "TechCorp Internacional",
      testimonio: "DevForge transformó nuestra infraestructura digital. Su equipo demostró profesionalismo excepcional y entregó resultados que impulsaron un 60% nuestro crecimiento.",
      rating: 5
    },
    {
      id: 2,
      nombre: "Patricia Morales",
      cargo: "CEO",
      empresa: "Innovatech MX",
      testimonio: "La calidad del código, los tiempos de entrega y la comunicación fueron impecables. Definitivamente nuestro partner tecnológico de confianza.",
      rating: 5
    },
    {
      id: 3,
      nombre: "Miguel Ángel Pérez",
      cargo: "Gerente de Operaciones",
      empresa: "Logística Global",
      testimonio: "Implementaron un sistema que redujo nuestros tiempos operativos en 40%. Su consultoría fue estratégica y muy valiosa para nuestra transformación.",
      rating: 5
    },
    {
      id: 4,
      nombre: "Laura Jiménez",
      cargo: "Product Manager",
      empresa: "FinTech Solutions",
      testimonio: "Excelente trabajo en nuestra app móvil. Superaron nuestras expectativas en diseño, performance y experiencia de usuario.",
      rating: 5
    }
  ],

  planes: [
    {
      id: "basico",
      nombre: "Emprendedor",
      precio: 1499,
      periodo: "mes",
      descripcion: "Ideal para negocios que necesitan presencia digital profesional.",
      popular: false,
      caracteristicas: [
        { texto: "Sitio web responsive", incluido: true },
        { texto: "Hasta 5 páginas", incluido: true },
        { texto: "Formulario de contacto", incluido: true },
        { texto: "SEO básico", incluido: true },
        { texto: "Hosting incluido", incluido: true },
        { texto: "Soporte por email", incluido: true },
        { texto: "Integración con redes sociales", incluido: false },
        { texto: "Panel de administración", incluido: false },
        { texto: "E-commerce", incluido: false },
        { texto: "App móvil", incluido: false }
      ]
    },
    {
      id: "profesional",
      nombre: "Profesional",
      precio: 3499,
      periodo: "mes",
      descripcion: "Para empresas en crecimiento que buscan escalar su transformación digital.",
      popular: true,
      caracteristicas: [
        { texto: "Sitio web responsive", incluido: true },
        { texto: "Hasta 15 páginas", incluido: true },
        { texto: "Formulario de contacto avanzado", incluido: true },
        { texto: "SEO avanzado", incluido: true },
        { texto: "Hosting premium incluido", incluido: true },
        { texto: "Soporte 24/7", incluido: true },
        { texto: "Integración con redes sociales", incluido: true },
        { texto: "Panel de administración", incluido: true },
        { texto: "E-commerce básico", incluido: true },
        { texto: "App móvil", incluido: false }
      ]
    },
    {
      id: "empresarial",
      nombre: "Empresarial",
      precio: 7999,
      periodo: "mes",
      descripcion: "Solución completa para empresas que necesitan máximo rendimiento.",
      popular: false,
      caracteristicas: [
        { texto: "Sitio web + App móvil", incluido: true },
        { texto: "Páginas ilimitadas", incluido: true },
        { texto: "Sistema CRM integrado", incluido: true },
        { texto: "SEO + SEM profesional", incluido: true },
        { texto: "Cloud dedicado", incluido: true },
        { texto: "Soporte 24/7 prioritario", incluido: true },
        { texto: "Integraciones a medida", incluido: true },
        { texto: "Panel de administración", incluido: true },
        { texto: "E-commerce avanzado", incluido: true },
        { texto: "Consultoría estratégica", incluido: true }
      ]
    }
  ],

  serviciosAdicionales: [
    { nombre: "Diseño UX/UI adicional", precio: "$800 USD" },
    { nombre: "Optimización SEO", precio: "Desde $300 USD/mes" },
    { nombre: "Marketing Digital", precio: "Desde $500 USD/mes" },
    { nombre: "Mantenimiento por hora", precio: "$50 USD/hora" },
    { nombre: "Capacitación de equipo", precio: "$40 USD/hora" },
    { nombre: "Auditoría de seguridad", precio: "Desde $1,200 USD" }
  ],

  cursos: [
    {
      id: 1,
      nombre: "Desarrollo Frontend",
      descripcion: "HTML5, CSS3, JavaScript, React y Vue.js desde cero hasta avanzado.",
      nivel: "todos",
      duracion: "16 semanas",
      modalidad: ["online", "presencial"],
      precio: "$450 USD",
      instructor: "Luis Torres"
    },
    {
      id: 2,
      nombre: "Desarrollo Backend",
      descripcion: "Node.js, Python, Django, bases de datos SQL/NoSQL y APIs RESTful.",
      nivel: "todos",
      duracion: "14 semanas",
      modalidad: ["online", "presencial"],
      precio: "$500 USD",
      instructor: "Carlos Méndez"
    },
    {
      id: 3,
      nombre: "Full Stack JavaScript",
      descripcion: "MERN Stack completo: MongoDB, Express, React y Node.js.",
      nivel: "intermedio",
      duracion: "20 semanas",
      modalidad: ["online"],
      precio: "$650 USD",
      instructor: "Ana Rodríguez"
    },
    {
      id: 4,
      nombre: "Desarrollo Mobile",
      descripcion: "Flutter y React Native para crear apps iOS y Android profesionales.",
      nivel: "intermedio",
      duracion: "12 semanas",
      modalidad: ["online", "presencial"],
      precio: "$550 USD",
      instructor: "Diego Ramírez"
    },
    {
      id: 5,
      nombre: "DevOps & Cloud",
      descripcion: "Docker, Kubernetes, AWS, CI/CD y monitoreo de infraestructura.",
      nivel: "avanzado",
      duracion: "10 semanas",
      modalidad: ["online"],
      precio: "$700 USD",
      instructor: "Diego Ramírez"
    },
    {
      id: 6,
      nombre: "Data Science",
      descripcion: "Python, Machine Learning, análisis de datos y visualización.",
      nivel: "intermedio",
      duracion: "18 semanas",
      modalidad: ["online", "presencial"],
      precio: "$750 USD",
      instructor: "Ana Rodríguez"
    },
    {
      id: 7,
      nombre: "Introducción a la Programación",
      descripcion: "Lógica de programación, algoritmos y pensamiento computacional.",
      nivel: "basico",
      duracion: "8 semanas",
      modalidad: ["online", "presencial"],
      precio: "$250 USD",
      instructor: "Luis Torres"
    },
    {
      id: 8,
      nombre: "Ciberseguridad",
      descripcion: "Ethical hacking, pentesting, seguridad ofensiva y forense digital.",
      nivel: "avanzado",
      duracion: "14 semanas",
      modalidad: ["online"],
      precio: "$800 USD",
      instructor: "Carlos Méndez"
    }
  ],

  horariosCursos: {
    lunes: [
      { hora: "09:00 - 11:00", curso: "Desarrollo Frontend", modalidad: "Presencial" },
      { hora: "11:00 - 13:00", curso: "Introducción a la Programación", modalidad: "Online" },
      { hora: "16:00 - 18:00", curso: "Full Stack JavaScript", modalidad: "Online" },
      { hora: "18:00 - 20:00", curso: "Desarrollo Mobile", modalidad: "Presencial" }
    ],
    martes: [
      { hora: "09:00 - 11:00", curso: "Desarrollo Backend", modalidad: "Online" },
      { hora: "11:00 - 13:00", curso: "Ciberseguridad", modalidad: "Online" },
      { hora: "16:00 - 18:00", curso: "Data Science", modalidad: "Presencial" },
      { hora: "18:00 - 20:00", curso: "DevOps & Cloud", modalidad: "Online" }
    ],
    miercoles: [
      { hora: "09:00 - 11:00", curso: "Desarrollo Frontend", modalidad: "Presencial" },
      { hora: "11:00 - 13:00", curso: "Introducción a la Programación", modalidad: "Online" },
      { hora: "16:00 - 18:00", curso: "Full Stack JavaScript", modalidad: "Online" },
      { hora: "18:00 - 20:00", curso: "Desarrollo Mobile", modalidad: "Presencial" }
    ],
    jueves: [
      { hora: "09:00 - 11:00", curso: "Desarrollo Backend", modalidad: "Online" },
      { hora: "11:00 - 13:00", curso: "Ciberseguridad", modalidad: "Online" },
      { hora: "16:00 - 18:00", curso: "Data Science", modalidad: "Presencial" },
      { hora: "18:00 - 20:00", curso: "DevOps & Cloud", modalidad: "Online" }
    ],
    viernes: [
      { hora: "09:00 - 11:00", curso: "Desarrollo Frontend", modalidad: "Presencial" },
      { hora: "11:00 - 13:00", curso: "Full Stack JavaScript", modalidad: "Online" },
      { hora: "16:00 - 18:00", curso: "Talleres Especiales", modalidad: "Presencial" }
    ],
    sabado: [
      { hora: "10:00 - 12:00", curso: "Workshops Técnicos", modalidad: "Presencial" },
      { hora: "12:00 - 14:00", curso: "Mentorías Personalizadas", modalidad: "Online" }
    ]
  },

  faq: [
    {
      pregunta: "¿Cuánto tiempo toma desarrollar un proyecto?",
      respuesta: "El tiempo varía según la complejidad. Un sitio web básico toma entre 4-6 semanas, mientras que un software empresarial puede requerir de 3 a 12 meses."
    },
    {
      pregunta: "¿Ofrecen mantenimiento post-entrega?",
      respuesta: "Sí, todos nuestros planes incluyen soporte post-entrega. Ofrecemos planes mensuales, trimestrales o anuales según tus necesidades."
    },
    {
      pregunta: "¿Trabajan con clientes fuera de México?",
      respuesta: "Por supuesto. Trabajamos con clientes en más de 25 países. Utilizamos herramientas colaborativas para mantener una comunicación fluida sin importar la zona horaria."
    },
    {
      pregunta: "¿Cuál es su metodología de trabajo?",
      respuesta: "Trabajamos con metodologías ágiles (Scrum y Kanban), con sprints de 2 semanas, entregas incrementales y comunicación constante con el cliente."
    },
    {
      pregunta: "¿Puedo ver el código fuente de mi proyecto?",
      respuesta: "Absolutamente. Todo el código desarrollado es propiedad del cliente. Recibirás acceso completo al repositorio con documentación técnica."
    },
    {
      pregunta: "¿Qué pasa si no estoy satisfecho con el resultado?",
      respuesta: "Ofrecerlo garantía de satisfacción. Trabajamos en estrecha colaboración contigo en cada fase y realizamos ajustes hasta que el producto cumpla tus expectativas."
    }
  ],

  valores: [
    {
      titulo: "Innovación",
      descripcion: "Adoptamos las últimas tecnologías y metodologías para ofrecer soluciones de vanguardia.",
      icono: "lightbulb"
    },
    {
      titulo: "Calidad",
      descripcion: "Código limpio, testing riguroso y estándares internacionales en cada proyecto.",
      icono: "award"
    },
    {
      titulo: "Compromiso",
      descripcion: "Nos involucramos como socios estratégicos en el éxito de cada proyecto.",
      icono: "heart"
    },
    {
      titulo: "Transparencia",
      descripcion: "Comunicación clara, presupuestos honestos y sin costos sorpresas.",
      icono: "eye"
    }
  ],

  timeline: [
    {
      año: "2013",
      titulo: "Fundación",
      descripcion: "DevForge nace con la visión de democratizar el desarrollo de software de calidad."
    },
    {
      año: "2016",
      titulo: "Expansión Regional",
      descripcion: "Abrimos operaciones en LATAM con clientes en México, Colombia y Argentina."
    },
    {
      año: "2019",
      titulo: "División Cloud",
      descripcion: "Lanzamos nuestra división especializada en Cloud Computing y DevOps."
    },
    {
      año: "2022",
      titulo: "Bootcamp Educativo",
      descripcion: "Iniciamos nuestro programa de formación para nuevos desarrolladores."
    },
    {
      año: "2026",
      titulo: "Líderes del Sector",
      descripcion: "Reconocidos como top 10 empresas de desarrollo en LATAM por TechReview."
    }
  ],

  categorias: [
    { id: "todos", nombre: "Todos" },
    { id: "web", nombre: "Web" },
    { id: "mobile", nombre: "Mobile" },
    { id: "software", nombre: "Software" }
  ],

  niveles: [
    { id: "todos", nombre: "Todos los niveles" },
    { id: "basico", nombre: "Básico" },
    { id: "intermedio", nombre: "Intermedio" },
    { id: "avanzado", nombre: "Avanzado" }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = APP_DATA;
}