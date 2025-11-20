document.addEventListener("DOMContentLoaded", function () {
  // ...altri codici...

  // Identificatore utente locale
  function getUserId() {
    let id = localStorage.getItem("rentMarioUserId");
    if (!id) {
      id = "user-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("rentMarioUserId", id);
    }
    return id;
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
    r.userId = getUserId();
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

  // Bottone elimina tutte le proprie recensioni
  const deleteBtn = document.getElementById("delete-my-reviews");
  function updateDeleteBtnVisibility() {
    const userId = getUserId();
    const reviews = getReviews();
    const hasMine = reviews.some(r => r.userId === userId);
    if (deleteBtn) deleteBtn.style.display = hasMine ? "block" : "none";
  }
  if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      if (confirm("Vuoi davvero eliminare tutte le tue recensioni?")) {
        const userId = getUserId();
        const reviews = getReviews().filter(r => r.userId !== userId);
        localStorage.setItem(reviewsKey, JSON.stringify(reviews));
        showReviews();
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
    reviewsList.style.transform = `translateX(-${currentReview * 100}%)`;
    updateDeleteBtnVisibility();
  }
  function nextReview() {
    const reviews = getReviews();
    currentReview = (currentReview + 1) % reviews.length;
    showReviews();
  }
  if (document.getElementById("reviews-list")) {
    showReviews();
    setInterval(nextReview, 3500);
  }
});
