'use strict';
const { getColorway, tint } = require('../lib/colorways');

module.exports = function(hexo) {
  let optionIndex = 0;
  let compareFontSize = null;

  hexo.extend.tag.register('compare', function(args) {
    optionIndex = 0;
    const lastArg = args[args.length - 1];
    compareFontSize = (args.length > 0 && /^\d+$/.test(lastArg)) ? lastArg + 'px' : null;
    return '<div class="dc-compare">';
  });

  hexo.extend.tag.register('endcompare', function() {
    return '</div>';
  });

  hexo.extend.tag.register('option', function(args, content) {
    const cw = getColorway(hexo, this);
    const title = args[0] || '';
    const emoji = args[1] || '';
    const recommended = args.indexOf('recommended') > -1;
    const colors = [cw.c4, cw.c2, cw.c1, cw.c3];
    const color = recommended ? cw.c3 : colors[optionIndex % colors.length];
    const bg = tint(color, 0.08);
    optionIndex++;
    const rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });
    const fsStyle = compareFontSize ? ' style="font-size:' + compareFontSize + '"' : '';
    return '<div class="dc-compare-option' + (recommended ? ' dc-recommended' : '') +
      '" style="background:' + bg + ';border-color:' + color + '">' +
      '<h4 style="color:' + color + '">' + title + '</h4>' +
      (emoji ? '<div class="dc-emoji">' + emoji + '</div>' : '') +
      '<div class="dc-compare-body"' + fsStyle + '>' + rendered + '</div></div>';
  }, { ends: true });
};
