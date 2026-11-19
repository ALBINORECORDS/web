// ============================================================
// PIE DE PÁGINA (PieCuero) — se usa en todas las páginas
// Los marcadores indican el material que falta: cuando lo tengas, pon su ruta en `src`.
// ============================================================

// Firma "Albiño" dibujada a mano: atributo `d` de un SVG de 220×120.
// Para usar una firma real, cambia este trazo por el de su SVG.
export const firma =
  'M10 92 C 18 70 28 40 40 18 C 44 30 50 60 58 92 M22 66 C 34 60 52 58 66 62 C 74 64 82 46 84 30 C 86 16 76 14 76 30 C 76 52 78 74 84 88 C 88 94 96 76 98 56 C 100 36 92 28 90 40 C 88 58 90 76 96 86 C 102 94 116 88 114 76 C 112 66 102 66 98 72 C 106 76 114 74 118 66 C 118 74 118 82 124 86 C 128 86 130 72 132 66 C 134 74 134 82 136 86 C 138 74 144 64 150 66 C 156 68 154 80 158 86 C 162 90 170 86 170 76 C 170 66 160 64 158 74 C 156 84 168 90 176 80 C 182 74 190 72 202 76 C 210 78 216 72 218 66 M118 52 C 119 51 120 51 120 53 M132 52 C 138 44 146 56 154 48';

export type Marcador = { src?: string; etiqueta: string; medida?: string; forma?: 'persona' | 'audifonos' | 'producto' };

export const pie = {
  titular: 'El estándar que todos quieren igualar',
  cta: { texto: 'Escríbenos', mensaje: 'Hola, quiero hablar de un proyecto.' },
  // Foto recortada sin fondo, a la derecha
  recorte: { src: '/media/pie-persona.webp', etiqueta: 'Persona o equipo sin fondo', medida: '1216×1600', forma: 'persona' } as Marcador,
  // Objeto pequeño dentro del panel
  objeto: { src: '/media/pie-claqueta.webp', etiqueta: 'Claqueta sin fondo', medida: '360×340', forma: 'producto' } as Marcador,
  // Objetos 3D que flotan alrededor del centro y reaccionan al mouse.
  // x e y: posición en % del pie; tam: ancho en vw; prof: cuánto se mueven con el mouse
  flotantes: [
    { src: '/media/pie-nota-doble.webp', x: 30, y: 13, tam: 5.6, prof: 26, giro: -10 },
    { src: '/media/pie-nota.webp', x: 63, y: 9, tam: 4.8, prof: 18, giro: 8 },
    { src: '/media/pie-camara.webp', x: 27, y: 72, tam: 6.8, prof: 32, giro: -14 },
    { src: '/media/pie-guitarra.webp', x: 64.5, y: 72, tam: 5.2, prof: 22, giro: 12 },
  ],
};
