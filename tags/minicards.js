'use strict';
const { getColorway } = require('../lib/colorways');

module.exports = function(hexo) {
  const colors_cycle = ['c1', 'c2', 'c3', 'c4'];
  let miniIndex = 0;

  hexo.extend.tag.register('minicards', function() {
    miniIndex = 0;
    return '<div class="dc-minicards">';
  });

  hexo.extend.tag.register('endminicards', function() {
    return '</div>';
  });

  hexo.extend.tag.register('mini', function(args, content) {
    const cw = getColorway(hexo, this);
    const title = args.join(' ').replace(/^"|"$/g, '');
    const colorKey = colors_cycle[miniIndex % colors_cycle.length];
    miniIndex++;
    const rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });
    return '<div class="dc-mini" style="border-color:' + cw[colorKey] + ';background:' + cw.c5 + '">' +
      '<h5 style="color:' + cw.c2 + '">' + title + '</h5>' +
      rendered + '</div>';
  }, { ends: true });
};
