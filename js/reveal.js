/* ─────────────────────────────────────────
   VIPAX · Scroll Reveal
   IntersectionObserver que adiciona .visible
   em cada elemento com a classe .reveal
   quando ele entra na viewport.
───────────────────────────────────────── */

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold:  0.1,
    rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});
