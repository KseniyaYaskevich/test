export const profileTabs = () => {
  const tabPanel = document.querySelector('.profile__header');
  const tabs = document.querySelectorAll('.profile__header-tab');
  const tabContent = document.querySelectorAll('.profile__tab');

  tabPanel.addEventListener('click', (e) => {
    if (e.target.closest('.profile__header-tab')) {
      const tabBtn = e.target.closest('.profile__header-tab');
      tabs.forEach((tab, index) => {
        if (tab === tabBtn) {
          tab.classList.add('active');
          tabContent[index].classList.add('active');
        } else {
          tab.classList.remove('active');
          tabContent[index].classList.remove('active');
        }
      });
    }
  });
};
