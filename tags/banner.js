'use strict';
const { getColorway } = require('../lib/colorways');

// {% banner "Section N: Title" %}
module.exports = function(hexo) {
  hexo.extend.tag.register('banner', function(args) {
    const cw = getColorway(hexo, this);
    const text = args.join(' ').replace(/^"|"$/g, '');
    return '<div class="dc-banner" style="background:' + cw.c1 + '"><h2>' + text + '</h2></div>';
  });
};
