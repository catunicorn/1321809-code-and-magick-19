'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 20;
var BAR_Y = 80;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var fetchColor = function (name) {
  if (name.toLowerCase() == 'вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'hsl(240, ' + Math.round(Math.random(100) * 100) + '%, 50%)';
  }
};

var fetchHeight = function (currentHeight, maxHeight) {
  return Math.round((BAR_HEIGHT * currentHeight) / maxHeight);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Списки результатов:', 120, 60);

  var maxHeight = Math.max(...times);
  for (var i = 0; i < names.length; i++) {
    var cord = CLOUD_X + BAR_WIDTH * (i + 1) + 50 * i;
    var height = fetchHeight(times[i], maxHeight);
    var columnCord = BAR_Y + BAR_HEIGHT - height;

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], cord, BAR_HEIGHT + BAR_Y + TEXT_WIDTH);
    ctx.fillText(Math.ceil(times[i]), cord, columnCord - 5);
    ctx.fillStyle = fetchColor(names[i]);
    ctx.fillRect(cord, columnCord, BAR_WIDTH, height);
  }
}
