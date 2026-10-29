const menuButton = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
function closeMenu() {
  mobileMenu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}
menuButton.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
mobileMenu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
document.querySelectorAll('[data-topic]').forEach(link => {
  const message = `Olá, gostaria de conversar sobre: ${link.dataset.topic}.`;
  link.href = `https://wa.me/5513991299921?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
