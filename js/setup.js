'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var colorCoats = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
var randomValue = Math.floor(Math.random() * 2);
var countWizards = 4;
// var wizards = renderHeroArray(countWizards);

var getRandomOrder = function () {
  return randomValue ? getRandomValue(names) + ' ' + getRandomValue(surnames) : getRandomValue(surnames) + ' ' + getRandomValue(names);
};
var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
var renderHeroArray = function (count) {
  var heros = [];
  for (var i = 0; i < count; i++) {
    heros[i] = renderPerson(names, surnames, colorCoats, colorEyes);
  }
  return heros;
};
var renderPerson = function (arrNames, arrSurnames, arrColorCoats, arrColorEyes) {
  var person = {
    'name': getRandomOrder(),
    'coatColor': getRandomValue(arrColorCoats),
    'eyesColor': getRandomValue(arrColorEyes)
  };
  return person;
};
var showSetup = function () {
  document.querySelector('.setup').classList.remove('hidden');
};
var showSetupSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

showSetup();
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = renderHeroArray(countWizards);
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  similarListElement.appendChild(wizardElement);
}


showSetupSimilar();
