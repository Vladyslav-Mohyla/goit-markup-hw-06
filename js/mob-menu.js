document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('[data-mob-menu-open]');
  const closeBtn = document.querySelector('[data-mob-menu-close]');
  const mobMenu = document.querySelector('[data-mob-menu]');

  if (!openBtn || !closeBtn || !mobMenu) return;

  openBtn.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
  });

  closeBtn.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
  });
});
