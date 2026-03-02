'use strict';
const { getColorway } = require('../lib/colorways');

function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\w\u3130-\u318F\uAC00-\uD7AF\u4E00-\u9FFF\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// {% banner "Section N: Title" %}
module.exports = function(hexo) {
  hexo.extend.tag.register('banner', function(args) {
    const cw = getColorway(hexo, this);
    const text = args.join(' ').replace(/^"|"$/g, '');
    const id = slugify(text);
    return '<div class="dc-banner" style="background:' + cw.c1 + '"><h2 id="' + id + '">' + text + '</h2></div>';
  });
};
