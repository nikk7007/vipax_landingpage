/* ─────────────────────────────────────────
   VIPAX · Parallax
   Move o caractere decorativo de fundo da
   seção manifesto em velocidade reduzida
   conforme o usuário rola a página.
───────────────────────────────────────── */

const bgChar = document.querySelector('.manifesto-bg-char');

if (bgChar) {
    const manifesto = bgChar.closest('.manifesto');

    window.addEventListener('scroll', () => {
        const rect = manifesto.getBoundingClientRect();
        const pct  = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        bgChar.style.transform = `translateY(${pct * 60}px)`;
    }, { passive: true });
}
