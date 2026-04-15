document.addEventListener("DOMContentLoaded", () => {
  // animação de entrada
  document.body.classList.add("is-ready");

  // ===========================
  // THEME TOGGLE (DARK / LIGHT)
  // ===========================
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const iconSpan = document.querySelector(".theme-toggle-icon");
  const labelSpan = document.querySelector(".theme-toggle-label");

  if (themeToggleBtn && iconSpan && labelSpan) {
    const savedTheme = localStorage.getItem("theme") || "dark";

    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      iconSpan.textContent = "☀";
      labelSpan.textContent = "Modo claro";
    } else {
      iconSpan.textContent = "🌙";
      labelSpan.textContent = "Modo escuro";
    }

    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      if (isLight) {
        iconSpan.textContent = "☀";
        labelSpan.textContent = "Modo claro";
        localStorage.setItem("theme", "light");
      } else {
        iconSpan.textContent = "🌙";
        labelSpan.textContent = "Modo escuro";
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // ===========================
  // ACORDEÃO DOS CARDS ADMIN
  // ===========================
  const adminHeaders = document.querySelectorAll(".admin-card-header");

  adminHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const card = header.closest(".admin-card");
      const body = card?.querySelector(".admin-card-body");
      if (!card || !body) return;

      const isOpen = card.classList.toggle("is-open");

      if (isOpen) {
        // se quiser fechar os outros, descomenta:
        /*
        document.querySelectorAll(".admin-card.is-open").forEach((other) => {
          if (other !== card) {
            other.classList.remove("is-open");
            const otherBody = other.querySelector(".admin-card-body");
            if (otherBody) {
              otherBody.style.maxHeight = "0px";
            }
          }
        });
        */

        body.style.maxHeight = body.scrollHeight + "px";
      } else {
        body.style.maxHeight = "0px";
      }
    });
  });
});
