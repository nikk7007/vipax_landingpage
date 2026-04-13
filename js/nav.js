/* ─────────────────────────────────────────
   VIPAX · Navegação — Scroll Behavior
   Adiciona a classe .scrolled na nav quando
   o usuário passa de 55px de rolagem.
───────────────────────────────────────── */

const nav = document.getElementById('main-nav');

const onScroll = () => {
    nav.classList.toggle('scrolled', scrollY > 55);
};

window.addEventListener('scroll', onScroll, { passive: true });
