// Fluoslider Small - MOBILE SCROLL 100% FIX - KEIN e.preventDefault() in Touch!
(function() {
  'use strict';

  // Universelle Initialisierungsfunktion
  function initFluoslider(container) {
    // Dynamische IDs generieren falls nicht vorhanden
    const sliderId = container.id || `fluoslider-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    container.id = sliderId;

    // Elemente erstellen/finden
    let beforeImg = container.querySelector('.fluoslider-small-before');
    let afterImg = container.querySelector('.fluoslider-small-after');
    let bar = container.querySelector('.fluoslider-small-bar');
    let handle = container.querySelector('.fluoslider-small-handle');
    let prevBtn = container.querySelector('.fluoslider-small-prev');
    let nextBtn = container.querySelector('.fluoslider-small-next');
    let dotsContainer = container.querySelector('.fluoslider-small-dots');
    let slideDataElements = container.querySelectorAll('.fluoslider-small-slide-data');

    // Elemente fehlen → erstellen
    if (!beforeImg) {
      beforeImg = createImage('fluoslider-small-before');
      afterImg = createImage('fluoslider-small-after');
      container.appendChild(beforeImg);
      container.appendChild(afterImg);
    }

    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'fluoslider-small-bar';
      container.appendChild(bar);
    }

    if (!handle) {
      handle = document.createElement('div');
      handle.className = 'fluoslider-small-handle';
      handle.innerHTML = '⇆';
      container.appendChild(handle);
    }

    if (!prevBtn) {
      prevBtn = document.createElement('button');
      prevBtn.className = 'fluoslider-small-nav fluoslider-small-prev';
      prevBtn.innerHTML = '‹';
      container.appendChild(prevBtn);
    }

    if (!nextBtn) {
      nextBtn = document.createElement('button');
      nextBtn.className = 'fluoslider-small-nav fluoslider-small-next';
      nextBtn.innerHTML = '›';
      container.appendChild(nextBtn);
    }

    if (!dotsContainer) {
      dotsContainer = document.createElement('div');
      dotsContainer.className = 'fluoslider-small-dots';
      container.appendChild(dotsContainer);
    }

    // Slide-Daten aus data-Attribut oder DOM
    let slideData = parseSlideData(container, slideDataElements);
    if (!slideData.length) {
      console.warn(`Keine Slide-Daten für ${sliderId}`);
      return;
    }

    let currentSlideIndex = 0;
    let down = false;
    let dots = [];

    // Dots erstellen
    function createDots() {
      dotsContainer.innerHTML = '';
      dots = [];
      slideData.forEach((data, index) => {
        const dot = document.createElement('div');
        dot.className = 'fluoslider-small-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
        dots.push(dot);
      });
      dots = Array.from(dotsContainer.querySelectorAll('.fluoslider-small-dot'));
    }

    function createImage(className) {
      const img = document.createElement('img');
      img.className = className;
      img.style.cssText = 'width: 100%; height: 100%; object-fit: contain !important; object-position: center !important;';
      return img;
    }

    function parseSlideData(container, elements) {
      // 1. Aus data-slides JSON
      const dataSlides = container.dataset.slides;
      if (dataSlides) {
        try {
          return JSON.parse(dataSlides);
        } catch(e) {
          console.warn('data-slides JSON ungültig:', dataSlides);
        }
      }

      // 2. Aus .fluoslider-small-slide-data Elementen
      const result = [];
      elements.forEach(el => {
        result.push({
          before: el.dataset.before,
          after: el.dataset.after
        });
      });
      return result;
    }

    function showSlide(index) {
      const data = slideData[index];
      if (!data) return;

      beforeImg.src = data.before;
      afterImg.src = data.after;
      currentSlideIndex = index;
      
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
      resetSlider();
    }

    function goToSlide(index) {
      const safeIndex = (index + slideData.length) % slideData.length;
      showSlide(safeIndex);
    }

    function nextSlide() { goToSlide(currentSlideIndex + 1); }
    function prevSlide() { goToSlide(currentSlideIndex - 1); }

    function resetSlider() {
      bar.style.left = '50%';
      handle.style.left = '50%';
      beforeImg.style.clipPath = 'inset(0 50% 0 0)';
      afterImg.style.clipPath = 'inset(0 0 0 50%)';
    }

    function setPos(clientX) {
      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(rect.width, x));
      const p = x / rect.width * 100;
      
      bar.style.left = p + '%';
      handle.style.left = p + '%';
      beforeImg.style.clipPath = `inset(0 ${100 - p}% 0 0)`;
      afterImg.style.clipPath = `inset(0 0 0 ${p}%)`;
    }

    // ✅ TOUCH HANDLER OHNE BLOCKIERUNG!
    function start(e) {
      down = true;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      setPos(clientX);
      // KEIN e.preventDefault() - Page Scroll bleibt frei!
    }

    function move(e) {
      if (!down) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      setPos(clientX);
      // KEIN e.preventDefault() - Page Scroll bleibt frei!
    }

    function end() { down = false; }

    // ✅ Event Listeners - PASSIVE für Touch!
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    prevBtn.addEventListener('touchend', (e) => {
      e.preventDefault(); 
      prevSlide();
    });
    nextBtn.addEventListener('touchend', (e) => {
      e.preventDefault(); 
      nextSlide();
    });

    // Dots touch-safe
    container.querySelectorAll('.fluoslider-small-dot').forEach(dot => {
      dot.addEventListener('touchend', (e) => {
        e.preventDefault();
      });
    });

    // DESKTOP: Mouse Events (blockieren OK)
    bar.addEventListener('mousedown', start);
    handle.addEventListener('mousedown', start);
    container.addEventListener('click', (e) => {
      if (e.target === container) start(e);
    });
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', end);

    // ✅ MOBILE: PASSIVE Touch Handler (KEIN Blockieren!)
    container.addEventListener('touchstart', start, { passive: true });
    container.addEventListener('touchmove', move, { passive: true });
    container.addEventListener('touchend', end, { passive: true });
    container.addEventListener('touchcancel', end, { passive: true });

    // Keyboard
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });

    // Initialisierung
    createDots();
    showSlide(0);
  }

  // Alle Sliders initialisieren wenn DOM bereit
  function initAllSliders() {
    document.querySelectorAll('.fluoslider-small').forEach(initFluoslider);
  }

  // DOM bereit → initialisieren
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllSliders);
  } else {
    initAllSliders();
  }

  // MutationObserver für dynamisch geladene Sliders
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.fluoslider-small:not(.fluoslider-initialized)').forEach(container => {
      container.classList.add('fluoslider-initialized');
      initFluoslider(container);
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();
