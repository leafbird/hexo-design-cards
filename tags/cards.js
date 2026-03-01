'use strict';
const { getColorway } = require('../lib/colorways');

module.exports = function(hexo) {
  const colors_cycle = ['c3', 'c2', 'c4', 'c1'];
  let cardIndex = 0;
  let cardFontSize = null;

  hexo.extend.tag.register('cards', function(args) {
    const cols = parseInt(args[0]) || 2;
    const lastArg = args[args.length - 1];
    cardFontSize = (args.length > 1 && /^\d+$/.test(lastArg)) ? lastArg + 'px' : null;
    cardIndex = 0;
    return '<div class="dc-cards" style="grid-template-columns:repeat(' + cols + ',1fr)">';
  });

  hexo.extend.tag.register('endcards', function() {
    return '</div>';
  });

  hexo.extend.tag.register('card', function(args, content) {
    const cw = getColorway(hexo, this);
    const title = args.join(' ').replace(/^"|"$/g, '');
    const colorKey = colors_cycle[cardIndex % colors_cycle.length];
    const color = cw[colorKey];
    cardIndex++;
    const rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });
    const fsStyle = cardFontSize ? ' style="font-size:' + cardFontSize + '"' : '';
    return '<div class="dc-card" style="border-color:' + color + '">' +
      '<div class="dc-card-header" style="background:' + color + '"><h4>' + title + '</h4></div>' +
      '<div class="dc-card-body"' + fsStyle + '>' + rendered + '</div></div>';
  }, { ends: true });
};
