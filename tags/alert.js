'use strict';
const { getColorway, tint } = require('../lib/colorways');

module.exports = function(hexo) {
  hexo.extend.tag.register('alert', function(args, content) {
    const cw = getColorway(hexo, this);
    const type = args[0] || 'info';
    // Check if last arg is a number (font size)
    const lastArg = args[args.length - 1];
    const fontSize = (args.length > 1 && /^\d+$/.test(lastArg)) ? lastArg + 'px' : null;

    const icons = { info: 'ℹ️', warning: '⚠️', tip: '💡' };
    const colorMap = { info: cw.c3, warning: cw.c2, tip: cw.c4 };
    const bgMap = { info: tint(cw.c3, 0.08), warning: tint(cw.c2, 0.08), tip: tint(cw.c4, 0.08) };
    const color = colorMap[type] || cw.c3;
    const bg = bgMap[type] || tint(cw.c3, 0.08);
    const icon = icons[type] || 'ℹ️';

    const rendered = content.trim();
    const pipeIdx = rendered.indexOf('|');
    let title = '', body = rendered;
    if (pipeIdx > 0 && pipeIdx < 60) {
      title = rendered.slice(0, pipeIdx).trim();
      body = rendered.slice(pipeIdx + 1).trim();
    }

    const fsStyle = fontSize ? ' style="font-size:' + fontSize + '"' : '';
    let html = '<div class="dc-alert" style="background:' + bg + ';border-color:' + color + '">';
    if (title) html += '<h4 style="color:' + color + '">' + icon + ' ' + title + '</h4>';
    else html += '<h4 style="color:' + color + '">' + icon + '</h4>';
    html += '<div' + fsStyle + '>' + hexo.render.renderSync({ text: body, engine: 'markdown' }) + '</div>';
    html += '</div>';
    return html;
  }, { ends: true });
};
