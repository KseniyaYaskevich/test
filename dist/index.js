/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {

;// CONCATENATED MODULE: ./src/scripts/modules/filter.js
var filter = function filter() {
  var pageBody = document.querySelector('.page-body');
  var openButton = pageBody.querySelector('.marketplace-sort__button');
  var filterModal = pageBody.querySelector('.marketplace-filter__mobile');
  var toggleVisibility = function toggleVisibility() {
    filterModal.classList.toggle('active');
    pageBody.classList.toggle('active');
  };
  if (openButton) {
    openButton.addEventListener('click', toggleVisibility);
  }
  if (filterModal) {
    filterModal.addEventListener('click', function (evt) {
      if (evt.target.closest('.marketplace-filter__mobile-reset')) {
        var checkboxes = filterModal.querySelectorAll('input[type=checkbox]');
        checkboxes.forEach(function (checkbox) {
          checkbox.checked = false;
        });
      }
      if (evt.target.closest('.marketplace-filter__mobile-close')) {
        toggleVisibility();
      }
    });
  }
};
;// CONCATENATED MODULE: ./src/scripts/modules/search.js
var search = function search() {
  var searchControl = document.querySelector('.marketplace-sort__search-control');
  var searchInput = document.querySelector('.marketplace-sort__input');
  if (searchControl) {
    searchControl.addEventListener('click', function (evt) {
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
    searchInput.addEventListener('focus', function () {
      searchInput.classList.add('active');
    });
  }
};
;// CONCATENATED MODULE: ./src/scripts/modules/hoverVideo.js
var hoverVideo = function hoverVideo() {
  var cards = document.querySelector('.marketplace__cards');
  var singleCard = document.querySelector('.single-card__video');
  var currentElem = null;
  if (singleCard) {
    singleCard.addEventListener('mouseover', function () {
      singleCard.play();
    });
    singleCard.addEventListener('mouseout', function () {
      var playPromise = singleCard.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {
          singleCard.pause();
          singleCard.currentTime = 0;
        })["catch"](function () {});
      }
    });
  }
  if (cards) {
    cards.addEventListener('mouseover', function (evt) {
      var target = evt.target.closest('.marketplace-card');
      if (currentElem === target) return;
      currentElem = target;
      if (!target) return;
      var video = target.querySelector('video');
      video.play();
    });
    cards.addEventListener('mouseout', function (evt) {
      if (!currentElem) return;
      var relatedTarget = evt.relatedTarget;
      while (relatedTarget) {
        if (relatedTarget === currentElem) return;
        relatedTarget = relatedTarget.parentNode;
      }
      var video = currentElem.querySelector('video');
      var playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(function () {
          video.pause();
          video.currentTime = 0;
          currentElem = null;
        })["catch"](function () {});
      }
    });
  }
};
;// CONCATENATED MODULE: ./src/scripts/index.js



filter();
search();
hoverVideo();
}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
// extracted by mini-css-extract-plugin

}();
/******/ })()
;
//# sourceMappingURL=index.js.map