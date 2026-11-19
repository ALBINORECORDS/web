// ============================================================
// SERVICIOS — cada objeto es un bloque de la página /servicios
// anim: 'izquierda' | 'derecha' | 'zoom' | 'cortina' | 'subir'
// imagen: fondo del bloque y foto horizontal de la galería del inicio
// galeria: fotos o videos verticales que se muestran junto al texto
// ============================================================
export type Medio = { tipo: 'foto' | 'video'; src: string; poster?: string; alt: string };

export type Servicio = {
  id: string;
  titulo: string;
  resumen: string;
  texto: string;
  imagen: string;
  galeria?: Medio[];
  galeriaGrande?: boolean;
  galeriaVideos?: boolean; // videos más grandes y superpuestos, con la galería más ancha que el texto
  anim: 'izquierda' | 'derecha' | 'zoom' | 'cortina' | 'subir';
};

export const servicios: Servicio[] = [
  {
    id: 'produccion-musical',
    titulo: 'Producción musical',
    resumen: 'Del demo al master, con sonido profesional.',
    texto: 'Grabación, producción, mezcla y masterización para artistas y proyectos que buscan un sonido listo para plataformas.',
    imagen: '/media/produccion-fondo.webp',
    galeria: [
      { tipo: 'video', src: '/media/produccion-dyandy.mp4', poster: '/media/produccion-dyandy.jpg', alt: 'Grabación en el estudio' },
      { tipo: 'foto', src: '/media/produccion-escenario.webp', alt: 'Artista en el escenario con luces' },
      { tipo: 'foto', src: '/media/produccion-cantante.webp', alt: 'Artista cantando en un centro comercial' },
    ],
    anim: 'izquierda',
  },
  {
    id: 'bodas',
    titulo: 'Fotografías para bodas',
    resumen: 'Tu historia contada como una película.',
    texto: 'Cobertura completa en foto y video, con un estilo cinematográfico que captura cada emoción del día.',
    imagen: '/media/bodas-manos.webp',
    galeria: [
      { tipo: 'foto', src: '/media/bodas-novia.webp', alt: 'Novia con su ramo' },
      { tipo: 'foto', src: '/media/bodas-zapatos.webp', alt: 'Zapatos y anillos de la novia' },
      { tipo: 'foto', src: '/media/bodas-dsc00488.webp', alt: 'Fotografía de boda' },
    ],
    anim: 'derecha',
  },
  {
    id: 'podcast',
    titulo: 'Podcast',
    resumen: 'Graba, edita y publica sin complicaciones.',
    texto: 'Set con varias cámaras, audio de estudio y edición lista para YouTube, Spotify y clips verticales.',
    imagen: '/media/podcast-microfono.webp',
    galeria: [
      { tipo: 'foto', src: '/media/podcast-1.webp', alt: 'Set de podcast con cámaras y micrófonos' },
      { tipo: 'foto', src: '/media/podcast-2.webp', alt: 'Grabación de podcast en el estudio' },
      { tipo: 'foto', src: '/media/podcast-3.webp', alt: 'Edición de podcast' },
    ],
    anim: 'zoom',
  },
  {
    id: 'manejo-de-redes',
    titulo: 'Manejo de redes',
    resumen: 'Contenido constante que conecta con tu público.',
    texto: 'Estrategia, producción de contenido y publicación para que tu marca o proyecto crezca en redes sociales.',
    imagen: '/media/manejo-de-redes-1920.webp',
    galeria: [
      { tipo: 'video', src: '/media/redes-estudio.mp4', poster: '/media/redes-estudio.jpg', alt: 'Reel del estudio' },
      { tipo: 'video', src: '/media/redes-nmr.mp4', poster: '/media/redes-nmr.jpg', alt: 'Reel comercial de camiones' },
      { tipo: 'video', src: '/media/redes-hamburguesa.mp4', poster: '/media/redes-hamburguesa.jpg', alt: 'Reel de hamburguesas' },
      { tipo: 'video', src: '/media/redes-sushi.mp4', poster: '/media/redes-sushi.jpg', alt: 'Reel de sushi' },
    ],
    galeriaGrande: true,
    galeriaVideos: true,
    anim: 'cortina',
  },
  {
    id: 'fotografia-personal',
    titulo: 'Fotografía personal',
    resumen: 'Retratos que muestran quién eres.',
    texto: 'Sesiones de retrato, graduación, embarazo o marca personal, en estudio o exteriores, con edición profesional.',
    imagen: '/media/fotografia-graduada.webp',
    galeria: [
      { tipo: 'foto', src: '/media/fotografia-estudio.webp', alt: 'Retrato en estudio con vestido naranja' },
      { tipo: 'foto', src: '/media/fotografia-exterior.webp', alt: 'Retrato en exteriores entre la vegetación' },
      { tipo: 'foto', src: '/media/fotografia-graduacion.webp', alt: 'Sesión de graduación de espaldas' },
      { tipo: 'foto', src: '/media/fotografia-embarazo.webp', alt: 'Sesión de embarazo en un jardín' },
    ],
    galeriaGrande: true,
    anim: 'subir',
  },
];
