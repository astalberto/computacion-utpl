function highlightPrereqs(activeCard) {
    const prereqs = JSON.parse(activeCard.dataset.pre || '[]');
    const all     = document.querySelectorAll('.subject-card');

    all.forEach(card => {
        card.classList.remove('prereq-highlight', 'active-highlight', 'dimmed');
    });

    if (prereqs.length === 0) {
        activeCard.classList.add('active-highlight');
        return;
    }

    all.forEach(card => {
        if (card === activeCard) {
            card.classList.add('active-highlight');
        } else if (prereqs.includes(card.dataset.nombre)) {
            card.classList.add('prereq-highlight');
        } else {
            card.classList.add('dimmed');
        }
    });
}

function clearHighlights() {
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('prereq-highlight', 'active-highlight', 'dimmed');
    });
}

function openModal(materia) {
    const color    = (CATS[materia.cat] || {}).color    || '#0F4A6E';
    const catLabel = (CATS[materia.cat] || {}).label || materia.cat;

    document.getElementById('modal-strip').style.background = color;
    document.getElementById('modal-name').textContent       = materia.nombre;

    const prereqsHtml = materia.pre.length
        ? materia.pre.map(p => `<span class="modal-prereq-tag">${p}</span>`).join(' ')
        : '<span class="modal-none">Sin prerrequisitos</span>';

    document.getElementById('modal-body').innerHTML = `
    <div class="modal-row">
      <span class="modal-row-label">Categoría</span>
      <span style="color:${color};font-weight:700">${materia.cat}</span>
      <span style="color:var(--text-dim);font-size:.75rem">— ${catLabel}</span>
    </div>
    <div class="modal-row">
      <span class="modal-row-label">Créditos</span>
      <span>${materia.creditos}</span>
    </div>
    <div class="modal-row">
      <span class="modal-row-label">Horas</span>
      <span>${materia.horas} horas</span>
    </div>
    <div class="modal-row" style="flex-wrap:wrap;gap:.4rem">
      <span class="modal-row-label">Prerrequisitos</span>
      <div style="display:flex;flex-wrap:wrap;gap:.4rem">${prereqsHtml}</div>
    </div>
  `;

    document.getElementById('modal-overlay').classList.add('open');
}

function closeModal(event, force) {
    if (force || (event && event.target === document.getElementById('modal-overlay'))) {
        document.getElementById('modal-overlay').classList.remove('open');
    }
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal(null, true);
});
