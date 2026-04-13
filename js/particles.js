/* ─────────────────────────────────────────
   VIPAX · Partículas do Hero
   Motes (poeira de luz) flutuando para cima
   no canvas do hero. Cor âmbar com glow.
───────────────────────────────────────── */

const cvs    = document.getElementById('hero-canvas');
const ctx    = cvs.getContext('2d');
const heroEl = cvs.closest('.hero');

// Ajusta o canvas ao tamanho real do hero
function sizeCanvas() {
    cvs.width  = heroEl.offsetWidth;
    cvs.height = heroEl.offsetHeight;
}
sizeCanvas();
window.addEventListener('resize', sizeCanvas);

class Mote {
    constructor() {
        this.spawn();
    }

    spawn() {
        this.x      = Math.random() * cvs.width;
        this.y      = cvs.height * (0.3 + Math.random() * 0.7);
        this.vy     = -(Math.random() * 0.28 + 0.06); // velocidade vertical (sobe)
        this.vx     = (Math.random() - 0.5) * 0.12;   // deriva horizontal
        this.r      = Math.random() * 1.3 + 0.25;     // raio
        this.alpha  = Math.random() * 0.45 + 0.08;    // opacidade máxima
        this.life   = 0;
        this.lifeMax = Math.random() * 280 + 180;
    }

    tick() {
        this.y += this.vy;
        this.x += this.vx;
        this.life++;

        // Fade in → sustain → fade out
        const t = this.life / this.lifeMax;
        this.now = this.alpha * (
            t < 0.25 ? t / 0.25 :
            t > 0.75 ? (1 - t) / 0.25 :
            1
        );

        if (this.life >= this.lifeMax || this.y < -8) this.spawn();
    }

    draw() {
        ctx.save();
        ctx.globalAlpha  = this.now;
        ctx.fillStyle    = '#c8963e';
        ctx.shadowBlur   = 5;
        ctx.shadowColor  = '#e0b560';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Instancia as partículas com vida aleatória inicial (para evitar "ondas")
const motes = Array.from({ length: 70 }, () => {
    const m = new Mote();
    m.life = Math.floor(Math.random() * m.lifeMax);
    return m;
});

// Loop de animação
(function loop() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    motes.forEach(m => { m.tick(); m.draw(); });
    requestAnimationFrame(loop);
})();
