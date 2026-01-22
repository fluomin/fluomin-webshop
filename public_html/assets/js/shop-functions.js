// shop-functions.js - Komplettes Shop-Script für fluomin.ch
// 🔥 Gallery Lightbox mit .shop-btn Styling, Slideshow, Toggles & mehr

// 1. COMIC SLIDESHOW - GLOBAL FUNKTIONEN
let slideIndex = 1;

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (!slides.length) return;
  
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
  
  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}

// 2. DOMContentLoaded - Shop & andere Funktionen
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);

  // SHOP ZOOM LIGHTBOX
  document.querySelectorAll('.shop-btn-zoom').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      const galleryBox = document.getElementById('gallery-lightbox');
      if (galleryBox) galleryBox.remove();
      
      const largeFluoslider = btn.getAttribute('data-fluoslider');
      document.getElementById('lightboxFluoslider').src = largeFluoslider;
      document.getElementById('lightbox-shop').classList.add('active');
    };
  });

  // SHOP LIGHTBOX SCHLIESSEN
  const closeBtn = document.getElementById("closeBtn-shop");
  if (closeBtn) {
    closeBtn.onclick = () => {
      document.getElementById("lightbox-shop").classList.remove("active");
      document.getElementById("lightboxFluoslider").src = "";
    };
  }

  const lightboxBg = document.getElementById("lightbox-shop");
  if (lightboxBg) {
    lightboxBg.onclick = e => {
      if (e.target.id === "lightbox-shop") {
        lightboxBg.classList.remove("active");
        document.getElementById("lightboxFluoslider").src = "";
      }
    };
  }

  // "SO BESTELLST DU" TOGGLE
  const howtoBtn = document.getElementById("shop-howto-toggle");
  const howtoContent = document.getElementById("shop-howto-content");
  if (howtoBtn && howtoContent) {
    howtoBtn.addEventListener("click", function () {
      howtoContent.classList.toggle("open");
      howtoBtn.textContent = howtoContent.classList.contains("open") ? 
        "So bestellst du ▲" : "So bestellst du ▼";
    });
  }

  // PRODUKT DETAILS TOGGLE
  document.querySelectorAll('.product-details-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const productId = this.dataset.product;
      const details = document.getElementById('details-' + productId);
      const currentText = this.textContent;
      const baseName = currentText.replace(' ▲', '').replace(' ▼', '');

      document.querySelectorAll('.product-details').forEach(d => {
        if (d.id !== 'details-' + productId) {
          d.classList.remove('open');
          const otherBtn = document.querySelector(`[data-product="${d.id.split('-')[1]}"]`);
          if (otherBtn) {
            const otherText = otherBtn.textContent.replace(' ▲', '').replace(' ▼', '');
            otherBtn.textContent = otherText + ' ▼';
          }
        }
      });

      const isOpen = details.classList.toggle('open');
      this.textContent = baseName + (isOpen ? ' ▲' : ' ▼');
    });
  });

  // Schließen bei Klick außerhalb
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.product-details-toggle') && !e.target.closest('.product-details')) {
      document.querySelectorAll('.product-details').forEach(d => d.classList.remove('open'));
      document.querySelectorAll('.product-details-toggle').forEach(btn => {
        const baseName = btn.textContent.replace(' ▲', '').replace(' ▼', '');
        btn.textContent = baseName + ' ▼';
      });
    }
  });

  // Gallery Iframe Lazy Loading
  const galleryIframe = document.querySelector(".fluoslider-gallery-frame");
  if (galleryIframe && !sessionStorage.getItem("gallery_iframe_loaded")) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        galleryIframe.src = galleryIframe.src;
        sessionStorage.setItem("gallery_iframe_loaded", "true");
        observer.disconnect();
      }
    });
    observer.observe(galleryIframe);
  }
});

// 🔥 GALLERY LIGHTBOX - SHOP-BUTTON STYLE (EINZIGER LISTENER)
document.addEventListener('click', function(e) {
  if (e.target.closest('.shop-btn-zoom') && document.getElementById('gallery-lightbox')) {
    return false;
  }
  
  if (e.target.closest('.gallery-lightbox')) {
    e.preventDefault();
    e.stopPropagation();
    const link = e.target.closest('.gallery-lightbox');
    const imgSrc = link.dataset.lightboxImg;
    
    const shopLightbox = document.getElementById('lightbox-shop');
    if (shopLightbox) shopLightbox.classList.remove('active');
    
    let galleryBox = document.getElementById('gallery-lightbox');
    if (!galleryBox) {
      galleryBox = document.createElement('div');
      galleryBox.id = 'gallery-lightbox';
      document.body.appendChild(galleryBox);
    }
    
    // 💡 Gallery mit .shop-btn Styling (100% identisch)
    galleryBox.innerHTML = `
      <style>
        #gallery-lightbox { 
          position:fixed;top:0;left:0;width:100vw;height:100vh;
          background:rgba(0,0,0,0.95);z-index:99999;display:flex;
          align-items:center;justify-content:center;padding:20px;box-sizing:border-box;
        }
        #gallery-lightbox img { 
          max-width:90vw;max-height:90vh;object-fit:contain;border-radius:12px;
          box-shadow:0 0 40px rgba(0,0,0,0.9); 
        }
        /* NUR Positionierung – Rest kommt von .shop-btn */
        .gallery-btn { position:absolute !important; }
        .gallery-close { top:30px;right:30px !important; }
        .gallery-prev { left:30px;top:50%;transform:translateY(-50%) !important; }
        .gallery-next { right:30px;top:50%;transform:translateY(-50%) !important; }
      </style>
      <button class="shop-btn gallery-btn gallery-close" title="Schließen (ESC)">×</button>
      <button class="shop-btn gallery-btn gallery-prev" title="Vorheriges">‹</button>
      <button class="shop-btn gallery-btn gallery-next" title="Nächstes">›</button>
      <img src="${imgSrc}" alt="Gallery Bild">
    `;
    
    galleryBox.classList.add('active');
    
    // Button Aktionen
    galleryBox.querySelector('.gallery-close').onclick = () => galleryBox.remove();
    galleryBox.querySelector('.gallery-prev').onclick = () => console.log('Vorheriges');
    galleryBox.querySelector('.gallery-next').onclick = () => console.log('Nächstes');
    
    document.onkeydown = (e) => { 
      if (e.key === 'Escape') galleryBox.remove(); 
    };
    
    return false;
  }
});


document.querySelector('.shop-container').addEventListener('touchmove', function(e) {
  // Erlaube Scrollen, wenn nicht direkt auf Slider
  if (!e.target.closest('.fluoslider-small')) {
    e.stopPropagation();
  }
}, { passive: true });