function buildLegend() {
    const leg = document.getElementById('legend');
    for (const [key, info] of Object.entries(CATS)) {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `<span class="legend-dot" style="background:${info.color}"></span>${key} — ${info.label}`;
        leg.appendChild(item);
    }
}

function buildGrid() {
    const grid = document.getElementById('cycle-grid');
    const groups = [
        { label: 'Unidad Básica',        cycles: MALLA.slice(0, 4) },
        { label: 'Unidad Profesional',   cycles: MALLA.slice(4) },
    ];

    groups.forEach((group, gi) => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'cycle-group';

        const labelDiv = document.createElement('div');
        labelDiv.className = 'unit-label';
        labelDiv.textContent = group.label;
        groupDiv.appendChild(labelDiv);

        const colsRow = document.createElement('div');
        colsRow.className = 'cycle-cols-row';

        group.cycles.forEach((cycleData, ci) => {
            const globalCi = gi * 4 + ci;
            const credits  = cycleData.materias.reduce((s, m) => s + m.creditos, 0);
            const col      = document.createElement('div');
            col.className  = 'cycle-col';
            col.innerHTML  = `
        <div class="cycle-header">
          <div class="cycle-num">Ciclo ${cycleData.ciclo}</div>
          <div class="cycle-credits">${credits} créditos &bull; ${cycleData.materias.length} materias</div>
        </div>
      `;

            cycleData.materias.forEach((materia, mi) => {
                const card        = document.createElement('div');
                card.className    = 'subject-card';
                card.dataset.cat  = materia.cat;
                card.dataset.nombre = materia.nombre;
                card.dataset.pre  = JSON.stringify(materia.pre);
                const color       = (CATS[materia.cat] || {}).color || '#0F4A6E';
                card.style.setProperty('--cat-color', color);
                card.style.animationDelay = `${(globalCi * 0.06 + mi * 0.04).toFixed(2)}s`;

                card.innerHTML = `
          <div class="card-name">${materia.nombre}</div>
          <div class="card-meta">
            <span class="cat-badge">${materia.cat}</span>
            <span class="credits-chip">${materia.creditos}cr &bull; ${materia.horas}h</span>
          </div>
        `;

                card.addEventListener('mouseenter', () => highlightPrereqs(card));
                card.addEventListener('mouseleave', clearHighlights);
                card.addEventListener('click',      () => openModal(materia));

                col.appendChild(card);
            });

            colsRow.appendChild(col);
        });

        groupDiv.appendChild(colsRow);
        grid.appendChild(groupDiv);
    });
}

function buildItinerarios() {
    const grid = document.getElementById('itinerary-grid');
    ITINERARIOS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'itinerary-card';
        const rows = item.subjects.map(s => `
      <div class="itinerary-subject">
        <div class="itinerary-dot" style="background:${item.color}"></div>
        <span>${s}</span>
      </div>
    `).join('');
        card.innerHTML = `
      <div class="itinerary-num" style="color:${item.color}">Itinerario ${item.num}</div>
      <div class="itinerary-title">${item.name}</div>
      ${rows}
    `;
        grid.appendChild(card);
    });
}
