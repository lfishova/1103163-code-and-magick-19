'use strict';

var COUNT_WIZARDS = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var colorFireballs = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var randomValue = Math.floor(Math.random() * 2);
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

var getRandomOrder = function () {
  return randomValue ? getRandomValue(names) + ' ' + getRandomValue(surnames) : getRandomValue(surnames) + ' ' + getRandomValue(names);
};
var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
var getHeroes = function (count) {
  var heroes = [];
  for (var i = 0; i < count; i++) {
    heroes[i] = getPerson(names, surnames, colorCoats, colorEyes);
  }
  return heroes;
};
var getPerson = function (arrNames, arrSurnames, arrColorCoats, arrColorEyes) {
  var person = {
    'name': getRandomOrder(),
    'coatColor': getRandomValue(arrColorCoats),
    'eyesColor': getRandomValue(arrColorEyes)
  };
  return person;
};
var getSimilarListElement = function () {
  return document.querySelector('.setup-similar-list');
};
var getSimilarWizardTemplate = function () {
  return document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
};
var getWizard = function (wizard) {
  var wizardElement = getSimilarWizardTemplate().cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var renderWizards = function () {
  var similarListElement = getSimilarListElement();
  var wizards = getHeroes(COUNT_WIZARDS);
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(getWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};
var showSetup = function () {
  setup.classList.remove('hidden');
  setupUserName.focus();
  document.addEventListener('keydown', onPopupEscPress);
};
var showSetupSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};
var onPopupEscPress = function (evt) {
  if (evt.target.className === setupUserName.className) {
    evt.stopPropagation();
  } else if (evt.key === ESC_KEY) {
    closePopup();
  }
};
var openPopup = function () {
  setup.classList.remove('hidden');
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
var validInputName = function () {
  setupUserName.addEventListener('invalid', function () {
    if (setupUserName.validity.tooShort) {
      setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (setupUserName.validity.tooLong) {
      setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (setupUserName.validity.valueMissing) {
      setupUserName.setCustomValidity('Обязательное поле');
    } else {
      setupUserName.setCustomValidity('');
    }
  });
};
var onWizardElementClick = function (element, value) {
  element.addEventListener('click', function () {
    var elementColor = getRandomValue(value);
    element.style.fill = elementColor;
    setup.querySelector('[name=' + getSliceName(element.classList.value) + '-color]').value = elementColor;
  });
};
var onFireballClick = function (value) {
  wizardFireball.addEventListener('click', function () {
    var fireballColor = getRandomValue(value);
    wizardFireball.style.background = fireballColor;
    setup.querySelector('[name=fireball-color]').value = fireballColor;
  });
};
var changeWizardCoat = function () {
  onWizardElementClick(wizardCoat, colorCoats);
};
var changeWizardEyes = function () {
  onWizardElementClick(wizardEyes, colorEyes);
};
var changeWizardFireball = function () {
  onFireballClick(colorFireballs);
};
var getSliceName = function (str) {
  return str.slice(str.indexOf('-') + 1);
};

validInputName();
changeWizardCoat();
changeWizardEyes();
changeWizardFireball();
showModal();
closeModal();
showSetup();
renderWizards();
showSetupSimilar();
