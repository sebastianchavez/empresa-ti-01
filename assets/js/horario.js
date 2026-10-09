// =====================================================
// HORARIO.JS - Lógica específica de horario de cursos
// =====================================================
(function () {
  let nivelActual = "todos";

  document.addEventListener("DOMContentLoaded", () => {
    renderFiltrosNiveles();
    renderCursos();
    renderSchedule();
  });

  function renderFiltrosNiveles() {
    const c = document.getElementById("filtros-niveles");
    if (!c) return;
    c.innerHTML = APP_DATA.niveles.map(n => `
      <button class="filter-btn ${n.id === nivelActual ? 'active' : ''}" data-nivel="${n.id}">${n.nombre}</button>
    `).join("");
    c.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        nivelActual = btn.dataset.nivel;
        c.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCursos();
      });
    });
  }

  function renderCursos() {
    const grid = document.getElementById("cursos-grid");
    if (!grid) return;
    const cursos = nivelActual === "todos"
      ? APP_DATA.cursos
      : APP_DATA.cursos.filter(c => c.nivel === nivelActual);

    grid.innerHTML = cursos.map((c, i) => `
      <div class="glass rounded-2xl p-6 card-hover reveal-scale delay-${(i + 1) * 100}">
        <div class="flex items-center justify-between mb-4">
          <span class="badge badge-${c.nivel}">${c.nivel}</span>
          <div class="flex gap-1">
            ${c.modalidad.map(m => `<span class="badge ${m === 'online' ? 'badge-online' : 'badge-presencial'}">${m}</span>`).join("")}
          </div>
        </div>
        <h3 class="font-display text-xl font-bold text-white mb-2">${c.nombre}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${c.descripcion}</p>
        <div class="border-t border-indigo-500/10 pt-4 space-y-2 text-sm">
          <div class="flex items-center gap-2 text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4 text-indigo-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
            <span>Duración: <strong class="text-white">${c.duracion}</strong></span>
          </div>
          <div class="flex items-center gap-2 text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4 text-indigo-400"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
            <span>Instructor: <strong class="text-white">${c.instructor}</strong></span>
          </div>
        </div>
        <div class="mt-5 pt-4 border-t border-indigo-500/10 flex items-center justify-between">
          <span class="font-display text-2xl font-bold gradient-text">${c.precio}</span>
          <a href="contacto.html" class="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold btn-glow">
            Inscribirme
          </a>
        </div>
      </div>
    `).join("");
    initReveal();
  }

  function renderSchedule() {
    const tbody = document.getElementById("schedule-tbody");
    if (!tbody) return;
    const dias = [
      { key: "lunes", label: "Lunes" },
      { key: "martes", label: "Martes" },
      { key: "miercoles", label: "Miércoles" },
      { key: "jueves", label: "Jueves" },
      { key: "viernes", label: "Viernes" },
      { key: "sabado", label: "Sábado" }
    ];
    tbody.innerHTML = dias.map(d => {
      const clases = APP_DATA.horariosCursos[d.key] || [];
      if (clases.length === 0) {
        return `<tr><td class="font-semibold text-white">${d.label}</td><td colspan="3" class="text-slate-500 italic">Sin clases programadas</td></tr>`;
      }
      return clases.map((cl, idx) => `
        <tr ${idx === 0 ? '' : 'class="border-t-0"'}>
          ${idx === 0 ? `<td class="font-semibold text-white align-top" rowspan="${clases.length}">${d.label}</td>` : ''}
          <td class="font-mono text-cyan-300">${cl.hora}</td>
          <td class="font-medium">${cl.curso}</td>
          <td><span class="badge ${cl.modalidad === 'Online' ? 'badge-online' : 'badge-presencial'}">${cl.modalidad}</span></td>
        </tr>
      `).join("");
    }).join("");
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale").forEach((el) => {
      observer.observe(el);
    });
  }
})();