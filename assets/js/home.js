// =====================================================
// HOME.JS - Lógica específica de la página de inicio
// =====================================================

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    renderTechMarquee();
    renderStats();
    renderServiciosDestacados();
    renderTestimonios();
  });

  function renderTechMarquee() {
    const track = document.getElementById("tech-marquee");
    if (!track) return;
    const techs = APP_DATA.tecnologias;
    const items = [...techs, ...techs].map(t => `
      <span class="inline-block mx-6 px-5 py-2 rounded-lg glass-light text-slate-300 font-medium whitespace-nowrap">
        ${t}
      </span>
    `).join("");
    track.innerHTML = items;
  }

  function renderStats() {
    const grid = document.getElementById("stats-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.stats.map((s, i) => `
      <div class="glass rounded-2xl p-6 text-center reveal-scale delay-${(i + 1) * 100}">
        <div class="font-display text-4xl lg:text-5xl font-bold gradient-text counter" data-target="${s.valor}" data-suffix="${s.sufijo}">0${s.sufijo}</div>
        <div class="text-slate-400 mt-2 text-sm uppercase tracking-wider">${s.label}</div>
      </div>
    `).join("");
    // re-init counters for these new elements
    initCounters();
  }

  function renderServiciosDestacados() {
    const grid = document.getElementById("servicios-home");
    if (!grid) return;
    const destacados = APP_DATA.servicios.filter(s => s.destacado);
    grid.innerHTML = destacados.map((s, i) => `
      <div class="glass rounded-2xl p-7 card-hover reveal-scale delay-${(i + 1) * 100}">
        <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-5">
          ${ICONS[s.icono] || ICONS.code}
        </div>
        <h3 class="font-display text-xl font-bold mb-3 text-white">${s.titulo}</h3>
        <p class="text-slate-400 text-sm leading-relaxed mb-4">${s.descripcion}</p>
        <div class="flex flex-wrap gap-2">
          ${s.tecnologias.slice(0, 4).map(t => `<span class="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-medium border border-indigo-500/20">${t}</span>`).join("")}
        </div>
      </div>
    `).join("");
    // re-init reveal observer for new elements
    initReveal();
  }

  function renderTestimonios() {
    const grid = document.getElementById("testimonios-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.testimonios.map((t, i) => `
      <div class="testimonial-card rounded-2xl p-7 reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${(i + 1) * 100}">
        <div class="stars mb-4">
          ${Array(t.rating).fill(0).map(() => ICONS.star).join("")}
        </div>
        <p class="text-slate-300 leading-relaxed mb-5">${t.testimonio}</p>
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
            ${t.nombre.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <div>
            <div class="font-semibold text-white">${t.nombre}</div>
            <div class="text-sm text-slate-400">${t.cargo} · ${t.empresa}</div>
          </div>
        </div>
      </div>
    `).join("");
    initReveal();
  }

  function initCounters() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            const duration = 1800;
            const start = performance.now();
            function tick(now) {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const value = Math.floor(eased * target);
              el.textContent = value.toLocaleString("es-CL") + suffix;
              if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll(".counter").forEach(c => observer.observe(c));
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