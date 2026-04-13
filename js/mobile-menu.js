/* ─────────────────────────────────────────
   VIPAX · Menu Mobile
   Toggle do overlay + fecha ao clicar num link
───────────────────────────────────────── */

const toggle     = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Abre / fecha o menu
toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    // Trava o scroll da página enquanto o menu está aberto
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Fecha ao clicar em qualquer link do menu
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.classList.remove('open');
        document.body.style.overflow = '';
    });
});
