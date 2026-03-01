'use strict';
const { getColorway } = require('../lib/colorways');

// {% flow "Step A|desc" "*Step B|desc" "Step C|desc" %}
// {% flow "Step A|desc" "*Step B|desc" "Step C|desc" | caption %}
module.exports = function(hexo) {
  hexo.extend.tag.register('flow', function(args) {
    const cw = getColorway(hexo, this);

    // Hexo strips quotes and delivers each quoted group as one element in args[].
    // Find caption: look for a bare "|" separator in args
    let caption = '';
    let stepArgs = args;
    const pipeIdx = args.indexOf('|');
    if (pipeIdx > 0) {
      caption = args.slice(pipeIdx + 1).join(' ');
      stepArgs = args.slice(0, pipeIdx);
    }

    // Each arg is a step: "title|desc" or "*title|desc"
    const steps = stepArgs;
    const colors = [cw.c3, cw.c2, cw.c1, cw.c4];
    let html = '<div class="dc-flow">';
    steps.forEach(function(step, i) {
      if (i > 0) {
        html += '<span class="dc-flow-arrow" style="color:' + cw.c4 + '">→</span>';
      }
      const highlight = step.startsWith('*');
      const text = highlight ? step.slice(1) : step;
      const parts = text.split('|');
      const title = parts[0];
      const desc = parts[1] || '';
      const bg = highlight ? cw.c1 : colors[i % colors.length];
      const borderStyle = highlight ? ';border:3px solid ' + cw.c4 : '';
      html += '<div class="dc-flow-step' + (highlight ? ' dc-highlight' : '') + '" style="background:' + bg + borderStyle + '">';
      html += '<b>' + title + '</b>';
      if (desc) html += '<span>' + desc + '</span>';
      html += '</div>';
    });
    html += '</div>';
    if (caption) {
      html += '<p class="dc-flow-caption" style="color:' + cw.c4 + '">' + caption + '</p>';
    }
    return html;
  });
};
