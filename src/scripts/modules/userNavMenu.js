export const userNavMenu = () => {
  const userMenu = document.querySelector('.main-nav__user');
  const button = document.querySelector('.main-nav__user-button');
  const buttonClose = document.querySelector('.main-nav__user-close');
  const buttonCopy = document.querySelector('.main-nav__copy-button');
  const copyText = document.querySelector('.main-nav__copy-text');

  if (userMenu) {
    button.addEventListener('click', () => {
      userMenu.classList.toggle('active');
    });

    buttonClose.addEventListener('click', () => {
      userMenu.classList.remove('active');
    });

    buttonCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(copyText.innerText);
    });
  }
};
