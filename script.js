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
