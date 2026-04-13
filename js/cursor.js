/* ─────────────────────────────────────────
   VIPAX · Cursor Personalizado
   Ponto âmbar instantâneo + anel com inércia.
   O anel expande sobre links e botões.
───────────────────────────────────────── */

const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');

let mx = 0, my = 0; // posição do mouse
let rx = 0, ry = 0; // posição do anel (com lag)

// Ponto segue o mouse sem delay
document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
});

// Anel segue o mouse com inércia suave (lerp)
(function tickRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tickRing);
})();

// Expande o anel ao passar sobre elementos clicáveis
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.width       = ring.style.height = '50px';
        ring.style.borderColor = 'rgba(200,150,62,0.9)';
        dot.style.transform    = 'translate(-50%,-50%) scale(1.6)';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width       = ring.style.height = '30px';
        ring.style.borderColor = 'rgba(200,150,62,0.45)';
        dot.style.transform    = 'translate(-50%,-50%) scale(1)';
    });
});
