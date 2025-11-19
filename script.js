<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lucco Tech</title>
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css"/>
  <link rel="stylesheet" href="style.css">
  <style>
    html { scroll-behavior: smooth; }
    .back-to-top {
      position: fixed; right: 24px; bottom: 24px; z-index: 100;
      background: linear-gradient(90deg,#0f0 60%,#1de9b6 100%);
      color: #101820; border: none; border-radius: 50%; width: 48px; height: 48px;
      display: flex; align-items: center; justify-content: center;
      font-size: 2rem; box-shadow: 0 2px 12px #0f08; cursor: pointer; opacity: 0; pointer-events: none;
      transition: opacity 0.3s;
    }
    .back-to-top.visible { opacity: 1; pointer-events: auto; }
    .parallax-hero {
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }
    /* 3D hover effect */
    .service-card {
      perspective: 600px;
      transition: box-shadow 0.3s;
    }
    .service-card-inner {
      transition: transform 0.3s;
      will-change: transform;
    }
    .service-card:hover .service-card-inner {
      transform: rotateY(8deg) scale(1.04);
      box-shadow: 0 8px 32px 0 #1de9b6cc;
    }
  </style>
</head>
<body>
  <header id="main-header">
    <div class="logo">
      <img src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/3a626c88-1343-4d2d-9eff-9889d9319895" alt="Lucco Tech Logo">
      <span>Lucco Tech</span>
    </div>
    <nav>
      <a href="#" id="nav-home" class="active">Home</a>
      <a href="#prodotti" id="nav-prodotti">Prodotti</a>
      <a href="#contatti" id="nav-contatti">Contatti</a>
    </nav>
  </header>
  <main id="main-content">
    <!-- Hero Section -->
    <section class="hero parallax-hero" id="home-section" style="background-image: linear-gradient(120deg,#0f0 0%,#101820 60%,#1de9b6 100%);">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 id="hero-title"></h1>
          <p data-aos="fade-up" data-aos-delay="400">
            Computer & Workstation, Server, Notebook, Stampanti, Plotter e Fotocopiatrici,<br>
            Vendita e assistenza, Noleggio hardware, Installazione firewall,<br>
            Consulenza informatica, Realizzazione Siti Web su misura.
          </p>
        </div>
      </div>
    </section>
    <!-- Prodotti/Servizi Section -->
    <section class="services" id="prodotti-section">
      <!-- Card generate da JS -->
    </section>
    <!-- Contatti Section -->
    <section class="contact-section" id="contatti-section" data-aos="fade-up">
      <h2>Contattaci</h2>
      <form id="contact-form" autocomplete="off">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" required>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <label for="messaggio">Messaggio</label>
        <textarea id="messaggio" name="messaggio" rows="4" required></textarea>
        <button type="submit">Invia</button>
        <div class="success-message" id="success-message" style="display:none;">Messaggio inviato! Ti risponderemo al più presto.</div>
      </form>
    </section>
  </main>
  <footer>
    &copy; 2025 Lucco Tech. Tutti i diritti riservati.
  </footer>
  <button class="back-to-top" id="backToTop" title="Torna su">&#8679;</button>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/typeit@8.7.1/dist/typeit.min.js"></script>
  <script src="script.js"></script>
</body>
</html>
