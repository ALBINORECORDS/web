// El botón "Escríbenos" del pie se convierte en un círculo verde con el logo de WhatsApp
// 1.5 s después de llegar al pie. Cuando el mouse se acerca vuelve a abrirse como botón, y al
// alejarse se cierra otra vez. Al salir del pie vuelve a ser botón, para repetirse al regresar.
const ESPERA_MS = 1500;
const CERCA_PX = 140;      // distancia del mouse al borde del círculo para que se abra
const CIERRA_MS = 500;     // espera antes de volver a cerrarse cuando el mouse se aleja
const relojes = new WeakMap<Element, number>();
const cierres = new WeakMap<Element, number>();

export function mostrarWhatsapp(pie: Element) {
  const boton = pie.querySelector('.cuero__cta');
  if (!boton || relojes.has(boton)) return;
  relojes.set(boton, window.setTimeout(() => boton.classList.add('is-whatsapp'), ESPERA_MS));
}

export function volverABoton(pie: Element) {
  const boton = pie.querySelector('.cuero__cta');
  if (!boton) return;
  window.clearTimeout(relojes.get(boton));
  window.clearTimeout(cierres.get(boton));
  relojes.delete(boton);
  boton.classList.remove('is-whatsapp', 'is-abierto');
}

// Un solo escuchador para todas las páginas: mide la distancia del mouse a cada burbuja visible
let pedido = 0;
let mx = 0;
let my = 0;
function revisar() {
  pedido = 0;
  document.querySelectorAll<HTMLElement>('.cuero__cta.is-whatsapp').forEach((boton) => {
    const r = boton.getBoundingClientRect();
    // Se mide desde el centro de la burbuja, aunque el botón esté abierto y más ancho
    const radio = r.height / 2;
    const cx = r.left + r.width / 2;
    const cy = r.top + radio;
    const cerca = Math.hypot(mx - cx, my - cy) < radio + CERCA_PX;
    if (cerca) {
      window.clearTimeout(cierres.get(boton));
      cierres.delete(boton);
      boton.classList.add('is-abierto');
    } else if (boton.classList.contains('is-abierto') && !cierres.has(boton)) {
      cierres.set(boton, window.setTimeout(() => {
        cierres.delete(boton);
        boton.classList.remove('is-abierto');
      }, CIERRA_MS));
    }
  });
}
document.addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  mx = e.clientX;
  my = e.clientY;
  if (!pedido) pedido = requestAnimationFrame(revisar);
}, { passive: true });
