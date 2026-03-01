'use strict';

const { getCSS } = require('./lib/css');

// Register all tag plugins
require('./tags/flow')(hexo);
require('./tags/cards')(hexo);
require('./tags/accents')(hexo);
require('./tags/compare')(hexo);
require('./tags/quotes')(hexo);
require('./tags/alert')(hexo);
require('./tags/minicards')(hexo);
require('./tags/banner')(hexo);

// Inject CSS once per page
hexo.extend.filter.register('after_render:html', function(str) {
  if (str.indexOf('data-hexo-design-cards') > -1) return str;
  if (str.indexOf('dc-') === -1) return str; // no design cards used
  const css = getCSS();
  return str.replace('</head>', css + '\n</head>');
});
