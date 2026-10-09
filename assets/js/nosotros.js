// =====================================================
// NOSOTROS.JS - Lógica específica de la página Nosotros
// =====================================================
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    renderTimeline();
    renderValores();
    renderEquipo();
  });

  function renderTimeline() {
    const tl = document.getElementById("timeline");
    if (!tl) return;
    tl.innerHTML = APP_DATA.timeline.map((item, i) => `
      <div class="timeline-item reveal-left delay-${(i + 1) * 100}">
        <div class="glass rounded-xl p-6 ml-4">
          <span class="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold mb-2">${item.año}</span>
          <h3 class="font-display text-xl font-bold text-white mb-2">${item.titulo}</h3>
          <p class="text-slate-400">${item.descripcion}</p>
        </div>
      </div>
    `).join("");
    initReveal();
  }

  function renderValores() {
    const grid = document.getElementById("valores-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.valores.map((v, i) => `
      <div class="glass rounded-2xl p-6 text-center card-hover reveal-scale delay-${(i + 1) * 100}">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-4">
          ${ICONS[v.icono] || ICONS.code}
        </div>
        <h3 class="font-display text-lg font-bold text-white mb-2">${v.titulo}</h3>
        <p class="text-slate-400 text-sm leading-relaxed">${v.descripcion}</p>
      </div>
    `).join("");
    initReveal();
  }

  function renderEquipo() {
    const grid = document.getElementById("equipo-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.equipo.map((m, i) => `
      <div class="glass rounded-2xl p-6 text-center card-hover reveal-scale delay-${(i + 1) * 100}">
        <div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl mb-4 shadow-lg shadow-indigo-500/30">
          ${m.avatar}
        </div>
        <h3 class="font-display text-xl font-bold text-white mb-1">${m.nombre}</h3>
        <p class="text-indigo-400 text-sm font-semibold mb-3">${m.cargo}</p>
        <p class="text-slate-400 text-sm leading-relaxed">${m.bio}</p>
        <div class="flex justify-center gap-3 mt-4">
          <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white">
            ${ICONS.linkedin}
          </a>
          <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white">
            ${ICONS.twitter}
          </a>
          <a href="#" class="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white">
            ${ICONS.github}
          </a>
        </div>
      </div>
    `).join("");
    initReveal();
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