// Visor a pantalla completa para las galerías. Sin JavaScript, cada foto
// sigue siendo un enlace a su versión grande.
const gallery = document.querySelector('[data-gallery]');

if (gallery) {
  const links = [...gallery.querySelectorAll('a')];
  const labels = document.documentElement.lang.startsWith('eu')
    ? { close: 'Itxi', prev: 'Aurrekoa', next: 'Hurrengoa' }
    : document.documentElement.lang.startsWith('es')
      ? { close: 'Cerrar', prev: 'Anterior', next: 'Siguiente' }
      : { close: 'Close', prev: 'Previous', next: 'Next' };

  const box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = `
    <img alt="">
    <p aria-live="polite"></p>
    <button class="lb-close" type="button" aria-label="${labels.close}">×</button>
    <button class="lb-prev" type="button" aria-label="${labels.prev}">‹</button>
    <button class="lb-next" type="button" aria-label="${labels.next}">›</button>`;
  document.body.append(box);

  const img = box.querySelector('img');
  const caption = box.querySelector('p');
  let current = 0;
  let opener = null;

  const show = (i) => {
    current = (i + links.length) % links.length;
    const link = links[current];
    const thumb = link.querySelector('img');
    img.src = link.href;
    img.alt = thumb.alt;
    caption.textContent = link.parentElement.querySelector('figcaption')?.textContent ?? '';
    // Precarga la siguiente para que el paso sea instantáneo.
    new Image().src = links[(current + 1) % links.length].href;
  };

  const open = (i) => {
    opener = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.classList.add('lb-open');
    box.querySelector('.lb-close').focus();
  };

  const close = () => {
    box.hidden = true;
    img.removeAttribute('src');
    document.body.classList.remove('lb-open');
    opener?.focus();
  };

  links.forEach((link, i) => link.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return; // abrir en pestaña nueva
    e.preventDefault();
    open(i);
  }));

  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(current - 1);
    else if (e.key === 'ArrowRight') show(current + 1);
    else if (e.key === 'Tab') {
      // Mantiene el foco dentro del visor.
      const buttons = [...box.querySelectorAll('button')];
      const i = buttons.indexOf(document.activeElement);
      e.preventDefault();
      buttons.at((i + (e.shiftKey ? -1 : 1)) % buttons.length).focus();
    }
  });

  // Deslizar en el móvil.
  let startX = null;
  box.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
}
