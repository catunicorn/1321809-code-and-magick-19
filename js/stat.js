'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 20;
var BAR_Y = 80;
var barWidth = 40;
var barHeight = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Списки результатов:', 120, 60);

  ctx.fillText(players[0], CLOUD_X + barWidth, barHeight + BAR_Y + TEXT_WIDTH);
  ctx.fillText(Math.ceil(times[0]), CLOUD_X + barWidth, BAR_Y);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + barWidth, BAR_Y, barWidth, barHeight);

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.fillText(players[1], CLOUD_X + barWidth + barWidth * 2, barHeight + BAR_Y + TEXT_WIDTH);
  ctx.fillText(Math.ceil(times[1]), CLOUD_X + barWidth + barWidth * 2, BAR_Y);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + barWidth + barWidth * 2, BAR_Y , barWidth, barHeight);

  // ctx.fillText(players[2], CLOUD_X + barWidth, barHeight + BAR_Y + TEXT_WIDTH);
  // ctx.fillText(Math.ceil(times[2]), CLOUD_X + barWidth, BAR_Y);
  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(CLOUD_X + barWidth, BAR_Y, barWidth, barHeight);

  // ctx.fillText(players[3], CLOUD_X + barWidth, barHeight + BAR_Y + TEXT_WIDTH);
  // ctx.fillText(Math.ceil(times[3]), CLOUD_X + barWidth, BAR_Y);
  // ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  // ctx.fillRect(CLOUD_X + barWidth, BAR_Y, barWidth, barHeight);




  // for (var i = 0; i < players.length; i++) {

  //   ctx.fillText(players[i], CLOUD_X + barWidth + (barWidth + barWidth + GAP) * i, barHeight + BAR_Y + TEXT_WIDTH);
  //   ctx.fillRect(CLOUD_X + barWidth + (barWidth + barWidth + GAP) * i, BAR_Y, barWidth, barHeight);
  //   }
};

