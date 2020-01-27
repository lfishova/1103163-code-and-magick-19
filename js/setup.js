'use strict';

var COUNT_WIZARDS = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var randomValue = Math.floor(Math.random() * 2);

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
  document.querySelector('.setup').classList.remove('hidden');
};
var showSetupSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSetup();
renderWizards();
showSetupSimilar();
