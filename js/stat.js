'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = '#fff';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var SMALL_GAP = 10;
var SHADOW_GAP = 10;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var FONT_STYLE = '16px PT Mono';

var renderBar = function (ctx, str, x, y, h) {
  ctx.fillStyle = getColorBar(str);
  ctx.fillRect(x, y, BAR_WIDTH, h);
};
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var renderColumn = function (ctx, x, y, currentPlayer, currentValue, maxValue, color) {
  var barHeight = getBarHeight(currentValue, maxValue);
  renderText(ctx, currentPlayer, x, y - FONT_GAP, color);
  renderBar(ctx, currentPlayer, x, y - 4 * SMALL_GAP, -barHeight);
  renderText(ctx, Math.floor(currentValue), x, y - barHeight - 2.5 * FONT_GAP, color);
};
var renderText = function (ctx, str, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText(str, x, y);
};
var getBarHeight = function (currentValue, maxValue) {
  return (BAR_HEIGHT * currentValue) / maxValue;
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
var getColorBar = function (player) {
  var color = 'rgba(255, 0, 0, 1)';
  if (player !== 'Вы') {
    var saturation = Math.floor(Math.random() * 100);
    color = 'hsl(255, ' + saturation + '%, 50%)';
  }
  return color;
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  ctx.font = FONT_STYLE;
  renderText(ctx, 'Ура вы победили!', CLOUD_X + SMALL_GAP, 4 * SMALL_GAP, '#000');
  renderText(ctx, 'Список результатов:', CLOUD_X + SMALL_GAP, 6 * SMALL_GAP, '#000');
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    renderColumn(ctx, CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT, players[i], times[i], maxTime, '#000');
  }
};
