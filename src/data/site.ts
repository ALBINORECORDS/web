// ============================================================
// DATOS GENERALES DEL SITIO — edita aquí nombre, redes y WhatsApp
// ============================================================
// Correo que RECIBE los mensajes del formulario. No se muestra en la página.
// Correo personal de prueba; cambiar por la clave de FormSubmit una vez activado
const correoFormulario = 'jp155441@gmail.com';

export const site = {
  nombre: 'Albiño Records',
  lema: 'Productora Audiovisual',
  whatsappLink: 'https://wa.me/573000000000', // los botones de "Cotizar" y "Escríbenos" abren este chat
  correo: 'contacto@albinorecords.com', // correo PÚBLICO: el que se ve en la fila "Correo" de Contacto. PENDIENTE: el real
  // Formulario de contacto: FormSubmit reenvía cada mensaje a `correoFormulario`, sin cuenta ni clave.
  // El primer mensaje llega como "Activate Form": hay que abrirlo y confirmar una sola vez.
  // Si el envío falla, se abre el correo de la persona con el mensaje escrito para `correo`.
  envioFormulario: `https://formsubmit.co/ajax/${correoFormulario}`,
  redes: [
    { nombre: 'Instagram', icono: 'instagram', url: 'https://www.instagram.com/albino_recordss/' },
    { nombre: 'TikTok', icono: 'tiktok', url: 'https://www.tiktok.com/@albino_records' },
    { nombre: 'YouTube', icono: 'youtube', url: 'https://www.youtube.com/@ALBI%C3%91O.RECORDSS' },
    { nombre: 'Facebook', icono: 'facebook', url: 'https://www.facebook.com/AlbinoRecords/' },
  ],
} as const;

export const menu = [
  { texto: 'Inicio', href: '/' },
  { texto: 'Servicios', href: '/servicios/' },
  { texto: 'Nosotros', href: '/nosotros/' },
  { texto: 'Contacto', href: '/contacto/' },
] as const;

// Enlace de WhatsApp con un mensaje ya escrito
export const whatsapp = (mensaje: string) => `${site.whatsappLink}?text=${encodeURIComponent(mensaje)}`;
