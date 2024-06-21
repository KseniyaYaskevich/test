export const hoverVideo = () => {
  const singleCard = document.querySelector('.single-card__video');
  const cards = document.querySelector('.marketplace__cards');

  let currentElem = null;

  if (singleCard) {
    singleCard.pause();
    singleCard.currentTime = 0;

    singleCard.addEventListener('mouseover', () => {
      singleCard.play();
    });

    singleCard.addEventListener('mouseout', () => {
      const playPromise = singleCard.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            singleCard.pause();
            singleCard.currentTime = 0;
          })
          .catch(() => {});
      }
    });
  }

  if (cards) {
    const videos = document.querySelectorAll('.marketplace__cards video');

    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });

    cards.addEventListener('mouseover', (evt) => {
      const target = evt.target.closest('.marketplace-card');

      if (currentElem === target) return;
      currentElem = target;

      if (!target) return;

      const video = target.querySelector('video');
      video.play();
    });

    cards.addEventListener('mouseout', (evt) => {
      if (!currentElem) return;

      let { relatedTarget } = evt;

      while (relatedTarget) {
        if (relatedTarget === currentElem) return;

        relatedTarget = relatedTarget.parentNode;
      }

      const video = currentElem.querySelector('video');
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.pause();
            video.currentTime = 0;
            currentElem = null;
          })
          .catch(() => {});
      }
    });
  }
};
