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
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
}
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  ctx.font = FONT_STYLE;
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + SMALL_GAP, 4 * SMALL_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + SMALL_GAP, 6 * SMALL_GAP);
  var maxTime = getMaxElement(times);
  var barHeight = 0;
  for (var i = 0; i < players.length; i++) {
    barHeight = (BAR_HEIGHT * times[i]) / maxTime;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillStyle = getColorBar(players[i]);
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - 4 * SMALL_GAP, BAR_WIDTH, -barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText((Math.floor(times[i])).toString(), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y + CLOUD_HEIGHT - barHeight - 2.5 * FONT_GAP);
  }
};
