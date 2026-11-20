// ============================================================
// DATOS GENERALES DEL SITIO — edita aquí nombre, redes y WhatsApp
// ============================================================
// Correo que RECIBE los mensajes del formulario. No se muestra en la página.
// Correo del cliente. El primer envío llega como "Activate Form" de FormSubmit y hay que confirmarlo una vez.
// Después se puede cambiar por la clave aleatoria que da FormSubmit para no mostrar el correo en el código.
const correoFormulario = 'recordsalbino@gmail.com';

export const site = {
  nombre: 'Albiño Records',
  lema: 'Productora Audiovisual',
  // Ubicación: se usa en los títulos para Google, el pie y los datos de negocio local (SEO)
  ciudad: 'Ambato',
  provincia: 'Tungurahua',
  pais: 'Ecuador',
  // Descripción general del sitio (la que Google muestra para el inicio)
  descripcion: 'Productora audiovisual en Ambato, Ecuador: producción musical, fotografía y video de bodas, podcast, manejo de redes y fotografía profesional.',
  whatsappLink: 'https://wa.me/593988975935', // los botones de "Cotizar" y "Escríbenos" abren este chat
  telefono: '+593 98 897 5935', // se usa en los datos de negocio para Google
  correo: 'recordsalbino@gmail.com', // correo PÚBLICO: el que se ve en la fila "Correo" de Contacto
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
