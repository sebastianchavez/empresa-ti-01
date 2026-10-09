// =====================================================
// SERVICIOS.JS - Lógica específica de servicios
// =====================================================
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    renderServicios();
  });

  function renderServicios() {
    const grid = document.getElementById("servicios-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.servicios.map((s, i) => `
      <div class="glass rounded-2xl p-7 card-hover reveal-scale delay-${(i + 1) * 100} relative overflow-hidden group">
        ${s.destacado ? '<div class="absolute top-3 right-3"><span class="badge bg-gradient-to-r from-indigo-500 to-purple-600 text-white">Popular</span></div>' : ''}
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
          ${ICONS[s.icono] || ICONS.code}
        </div>
        <h3 class="font-display text-xl font-bold mb-3 text-white">${s.titulo}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-5">${s.descripcion}</p>
        <div class="border-t border-indigo-500/10 pt-4">
          <p class="text-xs text-slate-500 uppercase tracking-wider mb-2 font-semibold">Tecnologías</p>
          <div class="flex flex-wrap gap-2">
            ${s.tecnologias.map(t => `<span class="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20">${t}</span>`).join("")}
          </div>
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