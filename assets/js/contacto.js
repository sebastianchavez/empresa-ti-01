// =====================================================
// CONTACTO.JS - Lógica específica de contacto
// =====================================================
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    populateInfo();
    renderHorarios();
    renderSocialLinks();
    initForm();
  });

  function populateInfo() {
    document.getElementById("info-direccion").textContent = APP_DATA.empresa.direccion;
    const tel = document.getElementById("info-telefono");
    tel.textContent = APP_DATA.empresa.telefono;
    tel.href = "tel:" + APP_DATA.empresa.telefono.replace(/\s/g, "");
    const mail = document.getElementById("info-email");
    mail.textContent = APP_DATA.empresa.email;
    mail.href = "mailto:" + APP_DATA.empresa.email;
  }

  function renderHorarios() {
    const c = document.getElementById("horarios-list");
    if (!c) return;
    c.innerHTML = APP_DATA.empresa.horarios.map(h => `
      <li class="flex justify-between items-center py-2 border-b border-indigo-500/10 last:border-0">
        <span class="text-slate-300 font-medium">${h.dia}</span>
        <span class="text-indigo-300 font-mono text-sm">${h.horario}</span>
      </li>
    `).join("");
  }

  function renderSocialLinks() {
    const c = document.getElementById("social-links");
    if (!c) return;
    const redes = APP_DATA.empresa.redes;
    c.innerHTML = `
      <a href="${redes.facebook}" class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Facebook">${ICONS.facebook}</a>
      <a href="${redes.twitter}" class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Twitter">${ICONS.twitter}</a>
      <a href="${redes.linkedin}" class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="LinkedIn">${ICONS.linkedin}</a>
      <a href="${redes.instagram}" class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="Instagram">${ICONS.instagram}</a>
      <a href="${redes.github}" class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="GitHub">${ICONS.github}</a>
      <a href="${redes.youtube}" class="w-11 h-11 rounded-xl bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors" aria-label="YouTube">${ICONS.youtube}</a>
    `;
  }

  function initForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    // Clear errors on input
    form.querySelectorAll(".form-input").forEach(input => {
      input.addEventListener("input", () => {
        input.classList.remove("error");
        const err = form.querySelector(`[data-error="${input.name}"]`);
        if (err) err.classList.remove("show");
      });
    });
    const acepto = form.querySelector("#acepto");
    if (acepto) {
      acepto.addEventListener("change", () => {
        const err = form.querySelector(`[data-error="acepto"]`);
        if (err && acepto.checked) err.classList.remove("show");
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      const required = ["nombre", "email", "mensaje"];
      required.forEach(name => {
        const input = form.querySelector(`[name="${name}"]`);
        if (!input) return;
        if (!input.value.trim()) {
          showError(input, name);
          valid = false;
        }
      });

      const emailInput = form.querySelector('[name="email"]');
      if (emailInput.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        showError(emailInput, "email");
        valid = false;
      }

      if (!acepto.checked) {
        const err = form.querySelector('[data-error="acepto"]');
        if (err) err.classList.add("show");
        valid = false;
      }

      if (!valid) {
        if (window.showToast) showToast("Por favor completa los campos requeridos", "error");
        return;
      }

      // Simular envío
      const btn = form.querySelector('button[type="submit"]');
      const oldText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<svg class="animate-spin w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Enviando...';
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = oldText;
        form.reset();
        if (window.showToast) showToast("¡Mensaje enviado con éxito! Te contactaremos pronto.", "success");
      }, 1800);
    });

    function showError(input, name) {
      input.classList.add("error");
      const err = form.querySelector(`[data-error="${name}"]`);
      if (err) err.classList.add("show");
      setTimeout(() => input.classList.remove("error"), 600);
    }
  }
})();