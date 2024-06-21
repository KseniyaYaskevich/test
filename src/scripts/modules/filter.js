export const filter = () => {
  const pageBody = document.querySelector('.page-body');

  const openButton = pageBody.querySelector('.marketplace-sort__button');
  const filterModal = pageBody.querySelector('.marketplace-filter__mobile');

  const toggleVisibility = () => {
    filterModal.classList.toggle('active');
    pageBody.classList.toggle('active');
  };

  if (openButton) {
    openButton.addEventListener('click', toggleVisibility);
  }

  if (filterModal) {
    filterModal.addEventListener('click', (evt) => {
      if (evt.target.closest('.marketplace-filter__mobile-reset')) {
        const checkboxes = filterModal.querySelectorAll('input[type=checkbox]');

        checkboxes.forEach((checkbox) => {
          checkbox.checked = false;
        });
      }
      if (evt.target.closest('.marketplace-filter__mobile-close')) {
        toggleVisibility();
      }
    });
  }
};
