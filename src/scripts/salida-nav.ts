// El menú se desvanece con el scroll mientras el pie entra en pantalla, y vuelve al subir.
// `arribaDelPie`: distancia en px del borde de arriba del pie al borde de arriba de la pantalla.
const EMPIEZA = 0.75; // empieza a desvanecerse cuando el pie cruza el 75 % de la pantalla
const TERMINA = 0.3;  // y termina de ocultarse cuando llega al 30 %

let ultimo = -1;
export function salidaNav(arribaDelPie: number | null) {
  const h = window.innerHeight;
  const f = arribaDelPie === null ? 0 : Math.max(0, Math.min(1, (h * EMPIEZA - arribaDelPie) / (h * (EMPIEZA - TERMINA))));
  const valor = Math.round(f * 100) / 100;
  if (valor === ultimo) return;
  ultimo = valor;
  const raiz = document.documentElement;
  raiz.style.setProperty('--nav-salida', String(valor));
  raiz.toggleAttribute('data-nav-oculto', valor > 0.6);
}
