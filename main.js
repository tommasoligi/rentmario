// Aggiorna l'anno nel footer
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Form contatti: invio via mailto
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const nome = data.get("nome");
      const email = data.get("email");
      const telefono = data.get("telefono");
      const oggetto = data.get("oggetto") || "Richiesta informazioni Rent Mario";
      const messaggio = data.get("messaggio");
      const mailto = `mailto:tuaemail@aruba.it?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(
        `Nome: ${nome}\nEmail: ${email}\nTelefono: ${telefono}\n\nMessaggio:\n${messaggio}`
      )}`;
      window.location.href = mailto;
    });
  }
});
  // Animazione "ad entrata" per le sezioni
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.section-animate').forEach(section => {
    observer.observe(section);
  });
});
