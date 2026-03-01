'use strict';
const { getColorway, tint } = require('../lib/colorways');

module.exports = function(hexo) {
  const colors_cycle = ['c3', 'c1', 'c4', 'c2'];
  let accentIndex = 0;
  let accentFontSize = null;

  hexo.extend.tag.register('accents', function(args) {
    const cols = parseInt(args[0]) || 2;
    const lastArg = args[args.length - 1];
    accentFontSize = (args.length > 1 && /^\d+$/.test(lastArg)) ? lastArg + 'px' : null;
    accentIndex = 0;
    return '<div class="dc-accents" style="grid-template-columns:repeat(' + cols + ',1fr)">';
  });

  hexo.extend.tag.register('endaccents', function() {
    return '</div>';
  });

  hexo.extend.tag.register('accent', function(args, content) {
    const cw = getColorway(hexo, this);
    const title = args.join(' ').replace(/^"|"$/g, '');
    const colorKey = colors_cycle[accentIndex % colors_cycle.length];
    const color = cw[colorKey];
    accentIndex++;
    const rendered = hexo.render.renderSync({ text: content, engine: 'markdown' });
    const fsStyle = accentFontSize ? ' style="font-size:' + accentFontSize + '"' : '';
    return '<div class="dc-accent" style="background:' + tint(color, 0.1) + ';border-left-color:' + color + '">' +
      '<b>' + title + '</b><div' + fsStyle + '>' + rendered + '</div></div>';
  }, { ends: true });
};
