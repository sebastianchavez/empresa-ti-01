// =====================================================
// PRECIOS.JS - Lógica específica de precios
// =====================================================
(function () {
  let anual = false;

  document.addEventListener("DOMContentLoaded", () => {
    renderPlanes();
    renderComparativa();
    renderServiciosAdicionales();
    renderFAQ();
    initToggle();
  });

  function initToggle() {
    const btn = document.getElementById("toggle-billing");
    const dot = document.getElementById("toggle-dot");
    if (!btn) return;
    btn.addEventListener("click", () => {
      anual = !anual;
      btn.setAttribute("aria-pressed", String(anual));
      if (anual) {
        btn.classList.add("bg-indigo-500");
        btn.classList.remove("bg-slate-700");
        dot.style.transform = "translateX(28px)";
      } else {
        btn.classList.remove("bg-indigo-500");
        btn.classList.add("bg-slate-700");
        dot.style.transform = "translateX(0)";
      }
      renderPlanes();
    });
  }

  function calcPrecio(precio) {
    if (anual) return Math.round(precio * 12 * 0.8).toLocaleString("es-CL");
    return precio.toLocaleString("es-CL");
  }

  function renderPlanes() {
    const grid = document.getElementById("planes-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.planes.map((p, i) => `
      <div class="price-card glass rounded-2xl p-8 card-hover reveal-scale ${p.popular ? 'popular' : ''} delay-${(i + 1) * 100}">
        ${p.popular ? '<div class="absolute -top-3 left-1/2 -translate-x-1/2"><span class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">MÁS POPULAR</span></div>' : ''}
        <h3 class="font-display text-2xl font-bold text-white mb-2">${p.nombre}</h3>
        <p class="text-slate-400 text-sm mb-6">${p.descripcion}</p>
        <div class="mb-6">
          <div class="flex items-baseline gap-1">
            <span class="text-slate-400 text-lg">$</span>
            <span class="price-amount font-display font-bold gradient-text">${calcPrecio(p.precio)}</span>
          </div>
          <p class="text-slate-400 text-sm">CLP · ${anual ? 'total al año' : 'por mes'}</p>
        </div>
        <ul class="space-y-3 mb-8">
          ${p.caracteristicas.slice(0, 8).map(c => `
            <li class="flex items-start gap-2 text-sm">
              <span class="${c.incluido ? 'text-emerald-400' : 'text-slate-600'} mt-0.5 flex-shrink-0">
                ${c.incluido ? ICONS.check : ICONS.x}
              </span>
              <span class="${c.incluido ? 'text-slate-300' : 'text-slate-600 line-through'}">${c.texto}</span>
            </li>
          `).join("")}
        </ul>
        <a href="contacto.html" class="block w-full text-center px-6 py-3 rounded-lg ${p.popular ? 'bg-gradient-to-r from-indigo-500 to-purple-600 btn-glow' : 'glass-light hover:bg-white/10'} text-white font-semibold transition-all">
          ${p.popular ? 'Contratar Ahora' : 'Más Información'}
        </a>
      </div>
    `).join("");
    initReveal();
  }

  function renderComparativa() {
    const tbody = document.getElementById("comparativa-tabla");
    if (!tbody) return;
    const caracteristicas = APP_DATA.planes[0].caracteristicas.map((_, idx) => idx);
    tbody.innerHTML = caracteristicas.map(idx => {
      const texto = APP_DATA.planes[0].caracteristicas[idx].texto;
      return `
        <tr>
          <td class="font-medium text-white">${texto}</td>
          ${APP_DATA.planes.map(p => `
            <td>
              ${p.caracteristicas[idx].incluido
                ? `<span class="inline-flex w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 items-center justify-center">${ICONS.check}</span>`
                : `<span class="inline-flex w-6 h-6 rounded-full bg-slate-700/50 text-slate-500 items-center justify-center">${ICONS.x}</span>`
              }
            </td>
          `).join("")}
        </tr>
      `;
    }).join("");
  }

  function renderServiciosAdicionales() {
    const grid = document.getElementById("servicios-ad-grid");
    if (!grid) return;
    grid.innerHTML = APP_DATA.serviciosAdicionales.map((s, i) => `
      <div class="additional-service glass rounded-xl p-5 flex card-hover reveal-scale delay-${(i + 1) * 100}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
            ${ICONS.code}
          </div>
          <span class="font-medium text-white">${s.nombre}</span>
        </div>
        <span class="text-indigo-400 font-bold text-sm">${s.precio}</span>
      </div>
    `).join("");
    initReveal();
  }

  function renderFAQ() {
    const c = document.getElementById("faq-container");
    if (!c) return;
    c.innerHTML = APP_DATA.faq.map((f, i) => `
      <div class="accordion-item ${i === 0 ? 'active' : ''} px-5">
        <div class="accordion-header">
          <h3 class="font-semibold text-white">${f.pregunta}</h3>
          <span class="accordion-icon text-indigo-400">${ICONS.chevron}</span>
        </div>
        <div class="accordion-content">
          <p class="text-slate-400 leading-relaxed">${f.respuesta}</p>
        </div>
      </div>
    `).join("");
    if (window.initAccordion) window.initAccordion();
    else {
      document.querySelectorAll(".accordion-item").forEach((item) => {
        const header = item.querySelector(".accordion-header");
        if (!header) return;
        header.addEventListener("click", () => {
          const wasActive = item.classList.contains("active");
          document.querySelectorAll(".accordion-item").forEach((i) => i.classList.remove("active"));
          if (!wasActive) item.classList.add("active");
        });
      });
    }
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
