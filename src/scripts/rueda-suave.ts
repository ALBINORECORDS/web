// Rueda del mouse suavizada para páginas con animaciones ligadas al scroll.
// Sin esto la página salta con cada golpe de rueda. El tacto no pasa por aquí, y el teclado
// y la barra de scroll mandan sobre la rueda.

const RUEDA = 0.1; // cuánto alcanza la página a la rueda por cuadro: menos es más suave

// Mismo avance a 60 o a 144 cuadros por segundo
export const alcance = (k: number, ms: number) => 1 - Math.pow(1 - k, ms / 16.7);

// Cada componente que la necesita dice cuándo está activo. Hay un solo escuchador para
// toda la página: si cada uno pusiera el suyo, la rueda movería la página dos veces.
const condiciones = new Set<() => boolean>();
let instalada = false;

export function activarRuedaSuave(activa: () => boolean) {
  condiciones.add(activa);
  if (instalada) return;
  instalada = true;

  let rodando = false;
  let meta = 0;
  let actual = 0;
  let ultimo = 0;

  function rodar(ahora: number) {
    if (!rodando) return;
    const ms = Math.min(50, ahora - ultimo || 16.7);
    ultimo = ahora;
    const falta = meta - actual;
    if (Math.abs(falta) < 0.5) {
      window.scrollTo({ top: meta, behavior: 'instant' });
      rodando = false;
      return;
    }
    actual += falta * alcance(RUEDA, ms);
    window.scrollTo({ top: actual, behavior: 'instant' });
    requestAnimationFrame(rodar);
  }

  function alGirar(e: WheelEvent) {
    if (![...condiciones].some((f) => f())) return;
    if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
    if (document.body.style.overflow === 'hidden') return; // menú móvil abierto
    e.preventDefault();
    const px = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
    const tope = document.documentElement.scrollHeight - window.innerHeight;
    if (!rodando) { actual = window.scrollY; meta = actual; }
    meta = Math.max(0, Math.min(tope, meta + px));
    if (!rodando) {
      rodando = true;
      ultimo = 0;
      requestAnimationFrame(rodar);
    }
  }

  const soltar = () => { rodando = false; };
  window.addEventListener('wheel', alGirar, { passive: false });
  window.addEventListener('keydown', soltar);
  window.addEventListener('pointerdown', soltar);
  document.addEventListener('astro:before-swap', soltar);
}
