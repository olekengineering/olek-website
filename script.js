document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

function sendWhatsApp(){
  const form = document.querySelector('.contact-form');
  const name = form.querySelector('input[placeholder="Name"]').value || 'Not provided';
  const phone = form.querySelector('input[placeholder="07X XXX XXXX"]').value || 'Not provided';
  const type = form.querySelector('select').value;
  const details = form.querySelector('textarea').value || 'Not provided';

  const msg = `Hello OLEK Engineering,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AProject Type: ${encodeURIComponent(type)}%0ADetails: ${encodeURIComponent(details)}`;
  window.open(`https://wa.me/94702768769?text=${msg}`, '_blank');
}


// ========================================
// OLEK SERVICES IMAGE SLIDER
// ========================================

const serviceSlides = document.querySelectorAll('.service-slide');
const serviceDots = document.querySelectorAll('.slider-dot');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const serviceSlider = document.querySelector('.service-slider');

let currentSlide = 0;
let sliderTimer;

function showSlide(index) {
  serviceSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  serviceDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });

  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % serviceSlides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + serviceSlides.length) % serviceSlides.length;
  showSlide(prev);
}

function startSlider() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(nextSlide, 5000);
}

function resetSlider() {
  startSlider();
}

if (serviceSlides.length > 0) {

  nextButton?.addEventListener('click', () => {
    nextSlide();
    resetSlider();
  });

  prevButton?.addEventListener('click', () => {
    prevSlide();
    resetSlider();
  });

  serviceDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetSlider();
    });
  });

  // Pause while mouse is over slider
  serviceSlider?.addEventListener('mouseenter', () => {
    clearInterval(sliderTimer);
  });

  serviceSlider?.addEventListener('mouseleave', () => {
    startSlider();
  });

  // Mobile swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  serviceSlider?.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  serviceSlider?.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;

    const swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }

      resetSlider();
    }
  });

  showSlide(0);
  startSlider();
}
