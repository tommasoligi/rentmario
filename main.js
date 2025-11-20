document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
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
      const mailto = `mailto:info@rentmario.it?subject=${encodeURIComponent(oggetto)}&body=${encodeURIComponent(
        `Nome: ${nome}\nEmail: ${email}\nTelefono: ${telefono}\n\nMessaggio:\n${messaggio}`
      )}`;
      window.location.href = mailto;
      const success = document.getElementById("contact-success");
      if(success) {
        success.textContent = "Richiesta pronta per l'invio! Se il client email non si apre, scrivici a info@rentmario.it";
        success.style.display = "block";
      }
    });
  }

  // Recensioni - gestione locale
  const reviewsKey = "rentMarioReviews";
  const defaultReviews = [
    { reviewer: "Luca", review: "Furgone comodissimo e servizio impeccabile. Consigliato!" },
    { reviewer: "Giulia", review: "Prenotazione facile e van pulito. Perfetto per la nostra gita!" },
    { reviewer: "Marco", review: "Ottima assistenza e prezzi onesti. Tornerò sicuramente." }
  ];
  function getReviews() {
    const stored = localStorage.getItem(reviewsKey);
    if (stored) {
      try { return JSON.parse(stored); } catch { return defaultReviews; }
    }
    return defaultReviews;
  }
  function saveReview(r) {
    const reviews = getReviews();
    reviews.push(r);
    localStorage.setItem(reviewsKey, JSON.stringify(reviews));
  }

  // Form recensioni
  const reviewForm = document.getElementById("review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(reviewForm);
      const reviewer = data.get("reviewer");
      const review = data.get("review");
      if (reviewer && review) {
        saveReview({ reviewer, review });
        showReviews();
        reviewForm.reset();
        const success = document.getElementById("review-success");
        if(success) {
          success.textContent = "Grazie per la tua recensione!";
          success.style.display = "block";
          setTimeout(() => { success.style.display = "none"; }, 2500);
        }
      }
    });
  }

  // Slider recensioni
  let currentReview = 0;
  function showReviews() {
    const reviews = getReviews();
    const reviewsList = document.getElementById("reviews-list");
    if (!reviewsList) return;
    reviewsList.innerHTML = "";
    reviews.forEach((r, i) => {
      const div = document.createElement("div");
      div.className = "review-item";
      div.innerHTML = `<div>"${r.review}"</div><div class="review-author">- ${r.reviewer}</div>`;
      reviewsList.appendChild(div);
    });
    // Mostra solo la recensione corrente
    reviewsList.style.transform = `translateX(-${currentReview * 100}%)`;
  }
  function nextReview() {
    const reviews = getReviews();
    currentReview = (currentReview + 1) % reviews.length;
    showReviews();
  }
  // Avvio slider automatico
  if (document.getElementById("reviews-list")) {
    showReviews();
    setInterval(nextReview, 3500);
  }
});
  // Bottone "torna su"
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
