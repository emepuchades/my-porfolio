export const INITIAL_VISIBLE_PROJECTS = 4;

export const projects = [
  {
    id: 'dev-panel',
    code: 'PRJ—001',
    status: '2026 · En desarrollo',
    glyph: '[=]',
    titleStart: 'Dev',
    titleEnd: 'Panel',
    summary: 'tu centro de mando como dev',
    description:
      'Tu centro de mando como dev: proyectos, tareas y repositorios en un solo sitio, con un asistente de IA que conoce tu código y te ayuda en el día a día.',
    tags: ['React', 'IA'],
    isFeatured: true,
    isInDevelopment: true,
    specs: { year: '2026', role: 'Diseño + desarrollo', stack: 'React · IA', state: 'En desarrollo' },
    intro: 'Un panel para programadores que junta en una sola pantalla lo que hoy está repartido en diez pestañas, con una IA que entiende tus proyectos.',
    highlights: [
      { title: 'Todo en un sitio', text: 'Proyectos, tareas y repositorios en la misma vista.' },
      { title: 'Asistente con contexto', text: 'Una IA que conoce tu código y tu trabajo pendiente.' },
      { title: 'Para el día a día', text: 'Pensado para abrirlo al empezar y no cerrarlo.' },
    ],
  },
  {
    id: 'katia',
    code: 'PRJ—002',
    status: '2026 · En desarrollo',
    glyph: '>_',
    titleStart: 'Kat',
    titleEnd: 'IA',
    summary: 'entrena con katas guiadas',
    description:
      'Entrena con katas de programación: la IA te da pistas cuando te atascas y corrige tu solución adaptándose a tu nivel.',
    tags: ['React', 'IA', 'Katas'],
    isFeatured: true,
    isInDevelopment: true,
    specs: { year: '2026', role: 'Diseño + desarrollo', stack: 'React · IA', state: 'En desarrollo' },
    intro: 'Katas de programación con una IA de compañera: te deja pensar, te da una pista cuando te atascas y revisa tu solución.',
    highlights: [
      { title: 'Katas por nivel', text: 'Retos que se adaptan a lo que ya sabes.' },
      { title: 'Pistas, no soluciones', text: 'La IA te orienta sin darte la respuesta.' },
      { title: 'Corrección al momento', text: 'Revisa tu código y te dice qué mejorar.' },
    ],
  },
  {
    id: 'task-manager',
    code: 'PRJ—003',
    status: '2022 → 2026 · Antes / Después',
    glyph: '[x]',
    titleStart: 'Task',
    titleEnd: 'Manager',
    summary: 'gestor de proyectos',
    description:
      'Gestor de pequeños proyectos con tableros, tareas que se arrastran entre columnas y login con Google. Lo empecé en 2022: aquí verás el antes y el después del repaso.',
    tags: ['React', 'Redux', 'Firebase'],
    isFeatured: false,
    isInDevelopment: false,
    specs: { year: '2022 → 2026', role: 'Diseño + desarrollo', stack: 'React · Redux · Firebase', state: 'Repaso en curso' },
    intro: 'Mi primera app completa: tableros tipo Kanban para organizar proyectos pequeños, con cuentas de usuario y datos en la nube. Ahora la estoy rehaciendo con lo que he aprendido desde entonces.',
    highlights: [
      { title: 'Tableros Kanban', text: 'Listas y tarjetas que se arrastran entre columnas.' },
      { title: 'Login con Google o email', text: 'Cuentas de usuario con Firebase Authentication.' },
      { title: 'Datos en la nube', text: 'Proyectos, tareas y favoritos guardados en Firestore.' },
    ],
    beforeAfter: {
      before: { src: '/projects/task-manager/antes-tablero.webp', alt: 'Tablero del Task Manager en 2022' },
      after: null,
      startingPoint: [
        'Create React App como base.',
        'Cuatro librerías de interfaz a la vez: MUI 4, MUI 5, React Bootstrap y styled-components.',
        'Estado global con Redux y redux-persist.',
      ],
    },
    cover: { src: '/projects/task-manager/antes-tablero.webp', alt: 'Tablero del Task Manager con listas y tarjetas' },
    gallery: [
      { src: '/projects/task-manager/antes-login.webp', alt: 'Pantalla de inicio de sesión', label: 'Login' },
      { src: '/projects/task-manager/antes-movil.webp', alt: 'Login en el móvil', label: 'Móvil', isTall: true },
    ],
    demoUrl: 'https://task-manager-psi-two.vercel.app/',
    codeUrl: 'https://github.com/emepuchades/task-manager',
  },
  {
    id: 'streamerle',
    code: 'PRJ—004',
    status: '2022 → 2026 · Antes / Después',
    glyph: '?!',
    titleStart: 'Stream',
    titleEnd: 'erle',
    summary: 'adivina el streamer',
    description:
      'Juego tipo Wordle para adivinar el streamer: cada intento da pistas de seguidores, nacionalidad y edad. Antes y después de rehacerlo.',
    tags: ['React', 'Bootstrap'],
    isFeatured: false,
    isInDevelopment: false,
    specs: { year: '2022 → 2026', role: 'Diseño + desarrollo', stack: 'React · Bootstrap', state: 'Repaso en curso' },
    intro: 'Un Wordle de streamers: escribes un nombre y cada intento te dice si te acercas en edad, seguidores, género y país. Lo hice en 2022 y ahora toca darle una vuelta.',
    highlights: [
      { title: 'Buscador con autocompletado', text: 'Escribes y te sugiere streamers al momento.' },
      { title: 'Pistas en cada intento', text: 'Flechas y colores para edad, seguidores, género y país.' },
      { title: 'Sin registro', text: 'Entras y juegas, sin cuentas ni esperas.' },
    ],
    beforeAfter: {
      before: { src: '/projects/streamerle/antes-partida.webp', alt: 'Partida de Streamerle en 2022' },
      after: null,
      startingPoint: [
        'Create React App como base.',
        'Interfaz con React Bootstrap y estilos por defecto.',
        'Diseño sencillo en blanco y negro, sin estilo propio.',
      ],
    },
    cover: { src: '/projects/streamerle/antes-partida.webp', alt: 'Partida de Streamerle con pistas por colores' },
    gallery: [
      { src: '/projects/streamerle/antes-inicio.webp', alt: 'Pantalla de inicio con el buscador', label: 'Inicio' },
      { src: '/projects/streamerle/antes-movil.webp', alt: 'Streamerle en el móvil', label: 'Móvil', isTall: true },
    ],
    demoUrl: 'https://streamerle.vercel.app/',
    codeUrl: 'https://github.com/emepuchades/streamerle',
  },
];

export const featuredProjects = projects.filter((project) => project.isFeatured);

export const projectPath = (projectId) => `/proyectos/${projectId}`;

export const findProject = (projectId) => projects.find((project) => project.id === projectId);

export const nextProject = (projectId) => {
  const index = projects.findIndex((project) => project.id === projectId);
  return projects[(index + 1) % projects.length];
};
