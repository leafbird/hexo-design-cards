'use strict';
const { getColorway } = require('../lib/colorways');

module.exports = function(hexo) {
  const colors_cycle = ['c3', 'c2', 'c4', 'c1'];
  let quoteIndex = 0;

  hexo.extend.tag.register('quotes', function(args) {
    const cw = getColorway(hexo, this);
    const title = args.join(' ').replace(/^"|"$/g, '');
    quoteIndex = 0;
    let html = '<div class="dc-quotes" style="background:' + cw.c5 + ';border-color:' + cw.c4 + '">';
    if (title) html += '<h4 style="color:' + cw.c1 + '">' + title + '</h4>';
    return html;
  });

  hexo.extend.tag.register('endquotes', function() {
    return '</div>';
  });

  hexo.extend.tag.register('dcquote', function(args, content) {
    const cw = getColorway(hexo, this);
    const source = args.join(' ').replace(/^"|"$/g, '');
    const colorKey = colors_cycle[quoteIndex % colors_cycle.length];
    quoteIndex++;
    return '<div class="dc-quote" style="border-left-color:' + cw[colorKey] + '">' +
      '<p>' + content.trim() + '</p>' +
      '<cite style="color:' + cw.c4 + '">— ' + source + '</cite></div>';
  }, { ends: true });
};
