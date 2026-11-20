// ============================================================
// SECCIÓN FINAL DEL INICIO (Fundacion) — mosaico, titular y fila de fotos
// mosaico: fotos HORIZONTALES (la columna abierta es apaisada y la foto no se escala);
//          la primera empieza abierta y a color. Sin `src` se muestra un marcador.
// fila: fotos verticales con su pie
// ============================================================
export const fundacion = {
  titulo: 'Tú imagina,',
  mosaico: [
    { src: '/media/bodas-manos.webp', alt: 'Manos de los novios con sus anillos' },
    { src: '/media/fotografia-graduada.webp', alt: 'Sesión de fotos de graduación' },
    { src: '/media/bodas-pareja.webp', alt: 'Novio besando la frente de la novia' },
    { src: '/media/podcast-estudio.webp', alt: 'Estudio de grabación con monitores y computadora' },
    { src: '/media/produccion-cantante-centro.webp', alt: 'Cantante en vivo en un centro comercial' },
  ],
  leyenda: {
    titulo: 'Albiño Records',
    texto: 'Música, bodas, podcast, redes y fotografía: una sola productora en Ambato para tu proyecto.',
  },
  cta: { texto: 'Conócenos', href: '/nosotros/' },
  titular: ['Nosotros', 'lo creamos'],
  fila: [
    { src: '/media/bodas-zapatos.webp', pie: 'Bodas' },
    { src: '/media/fotografia-exterior.webp', pie: 'Retratos' },
    { src: '/media/redes-sushi.jpg', pie: 'Redes' },
    { src: '/media/produccion-dyandy.jpg', pie: 'Estudio' },
    { src: '/media/fotografia-graduacion.webp', pie: 'Graduación' },
    { src: '/media/redes-hamburguesa.jpg', pie: 'Comercial' },
    { src: '/media/estudio.jpg', pie: 'Detrás de cámara' },
    { src: '/media/redes-nmr.jpg', pie: 'Marcas' },
    { src: '/media/redes-estudio.jpg', pie: 'Contenido' },
  ],
};
