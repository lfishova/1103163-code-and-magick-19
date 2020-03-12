'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupClose = setup.querySelector('.setup-close');
  var onPopupEscPress = function (evt) {
    if (evt.target.className === setupUserName.className) {
      evt.stopPropagation();
    } else if (evt.key === ESC_KEY) {
      closePopup();
    }
  };
  var openPopup = function () {
    setup.classList.remove('hidden');
    setup.style.top = (window.innerHeight - setup.offsetHeight) / 2 + 'px';
    setup.style.left = window.innerWidth / 2 + 'px';
    document.addEventListener('keydown', onPopupEscPress);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };
  var showModal = function () {
    setupOpen.addEventListener('click', function () {
      openPopup();
    });
    setupOpen.addEventListener('keydown', function (evt) {
      if (evt.key === ENTER_KEY) {
        openPopup();
      }
    });
  };
  var closeModal = function () {
    setupClose.addEventListener('keydown', function (evt) {
      if (evt.key === ENTER_KEY) {
        closePopup();
      }
    });
    setupClose.addEventListener('click', function () {
      closePopup();
    });
  };
  var showSetup = function () {
    setup.classList.remove('hidden');
    setupUserName.focus();
    document.addEventListener('keydown', onPopupEscPress);
  };
  var showSetupSimilar = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  showModal();
  closeModal();
  showSetup();
  showSetupSimilar();
  window.dialog = {
    setup: setup,
    setupUserName: setupUserName,
    onPopupEscPress: onPopupEscPress
  };
})();
