function animateCounters() {
    const totalHoras    = MALLA.reduce((s, c) => s + c.materias.reduce((ss, m) => ss + m.horas, 0), 0);
    const totalMaterias = MALLA.reduce((s, c) => s + c.materias.length, 0);
    const totalCreditos = MALLA.reduce((s, c) => s + c.materias.reduce((ss, m) => ss + m.creditos, 0), 0);

    counter('s-creditos', totalCreditos, 900);
    counter('s-materias', totalMaterias, 700);
    counter('s-ciclos',   MALLA.length,  500);
    counter('s-horas',    totalHoras,    1100);
}

function counter(id, target, duration) {
    const el = document.getElementById(id);
    const start = performance.now();
    function step(now) {
        const p    = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(ease * target).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
}
