'use strict';

/**
 * Minimal Hexo mock for testing tag plugins.
 */
function createMockHexo(options) {
  options = options || {};
  const tags = {};

  const hexo = {
    config: options.config || {},
    extend: {
      tag: {
        register: function(name, fn, opts) {
          tags[name] = { fn: fn, opts: opts || {} };
        }
      },
      filter: {
        register: function() {}
      }
    },
    render: {
      renderSync: function(data) {
        // Simple passthrough — wrap in <p> to mimic markdown
        return '<p>' + (data.text || '').trim() + '</p>';
      }
    }
  };

  function callTag(name, args, content) {
    const tag = tags[name];
    if (!tag) throw new Error('Tag not registered: ' + name);
    var ctx = options.page || {};
    if (tag.opts.ends) {
      return tag.fn.call(ctx, args, content || '');
    }
    return tag.fn.call(ctx, args);
  }

  return { hexo: hexo, tags: tags, callTag: callTag };
}

module.exports = { createMockHexo: createMockHexo };
