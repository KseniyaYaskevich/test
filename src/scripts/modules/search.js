export const search = () => {
  const searchControl = document.querySelector('.marketplace-sort__search-control');
  const searchInput = document.querySelector('.marketplace-sort__input');

  if (searchControl) {
    searchControl.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (evt.target.closest('.marketplace-sort__search-button--search')) {
        searchInput.classList.toggle('active');
      }

      if (evt.target.closest('.marketplace-sort__search-button--clear')) {
        searchInput.value = '';
        searchInput.classList.remove('active');
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.classList.add('active');
    });
  }
};
