(() => {
  const refs = {
    openBtn: document.querySelector('[data-mob-menu-open]'),
    closeBtn: document.querySelector('[data-mob-menu-close]'),
    menu: document.querySelector('[data-mob-menu]'),
  };

  refs.openBtn.addEventListener('click', () => {
    refs.menu.classList.add('is-open');
  });

  refs.closeBtn.addEventListener('click', () => {
    refs.menu.classList.remove('is-open');
  });
})();