const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.querySelector('.back-to-top');
const bookingModal = document.querySelector('.booking-modal');
const selectedPackage = document.querySelector('.selected-package');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  navLinks.classList.toggle('open', !isOpen);
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
  });
});

document.querySelectorAll('.book-button').forEach((button) => {
  button.addEventListener('click', () => {
    selectedPackage.textContent = button.dataset.package;
    bookingModal.showModal();
    const subject = encodeURIComponent(`Trip enquiry: ${button.dataset.package}`);
    document.querySelector('.modal-email').href = `mailto:hello@ceylonodyssey.com?subject=${subject}`;
  });
});

document.querySelector('.modal-close').addEventListener('click', () => bookingModal.close());
bookingModal.addEventListener('click', (event) => {
  if (event.target === bookingModal) bookingModal.close();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bookingModal.open) bookingModal.close();
});

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 500);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelector('#year').textContent = new Date().getFullYear();
