'use strict';
const { getColorway, tint } = require('../lib/colorways');

module.exports = function(hexo) {
  hexo.extend.tag.register('compare', function() {
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
    const color = recommended ? cw.c3 : cw.c4;
    const bg = tint(color, 0.08);
    const rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });
    return '<div class="dc-compare-option' + (recommended ? ' dc-recommended' : '') +
      '" style="background:' + bg + ';border-color:' + color + '">' +
      '<h4 style="color:' + color + '">' + title + '</h4>' +
      (emoji ? '<div class="dc-emoji">' + emoji + '</div>' : '') +
      '<div>' + rendered + '</div></div>';
  }, { ends: true });
};
