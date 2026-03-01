'use strict';
const assert = require('assert');
const { createMockHexo } = require('./mock-hexo');

describe('hexo-design-cards tags', function() {

  describe('banner', function() {
    it('should render a banner with title', function() {
      const mock = createMockHexo();
      require('../tags/banner')(mock.hexo);
      const html = mock.callTag('banner', ['Getting Started']);
      assert(html.includes('dc-banner'));
      assert(html.includes('Getting Started'));
      assert(html.includes('<h2>'));
    });
  });

  describe('cards', function() {
    it('should render cards container with correct columns', function() {
      const mock = createMockHexo();
      require('../tags/cards')(mock.hexo);
      const open = mock.callTag('cards', ['3']);
      assert(open.includes('repeat(3,1fr)'));
      const close = mock.callTag('endcards', []);
      assert.strictEqual(close, '</div>');
    });

    it('should render a card with title and content', function() {
      const mock = createMockHexo();
      require('../tags/cards')(mock.hexo);
      mock.callTag('cards', ['2']);
      const html = mock.callTag('card', ['Title A'], 'Some content');
      assert(html.includes('dc-card'));
      assert(html.includes('dc-card-header'));
      assert(html.includes('Title A'));
      assert(html.includes('Some content'));
    });

    it('should apply font size when specified', function() {
      const mock = createMockHexo();
      require('../tags/cards')(mock.hexo);
      mock.callTag('cards', ['2', '14']);
      const html = mock.callTag('card', ['Title'], 'Content');
      assert(html.includes('font-size:14px'));
    });
  });

  describe('accents', function() {
    it('should render accents container', function() {
      const mock = createMockHexo();
      require('../tags/accents')(mock.hexo);
      const open = mock.callTag('accents', ['2']);
      assert(open.includes('dc-accents'));
      assert(open.includes('repeat(2,1fr)'));
    });

    it('should render accent card with title', function() {
      const mock = createMockHexo();
      require('../tags/accents')(mock.hexo);
      mock.callTag('accents', ['2']);
      const html = mock.callTag('accent', ['Point 1'], 'Description');
      assert(html.includes('dc-accent'));
      assert(html.includes('Point 1'));
      assert(html.includes('Description'));
    });
  });

  describe('compare', function() {
    it('should render compare container', function() {
      const mock = createMockHexo();
      require('../tags/compare')(mock.hexo);
      const open = mock.callTag('compare', []);
      assert(open.includes('dc-compare'));
    });

    it('should render option with emoji and recommended', function() {
      const mock = createMockHexo();
      require('../tags/compare')(mock.hexo);
      const html = mock.callTag('option', ['Option B', '🚀', 'recommended'], 'Best choice');
      assert(html.includes('dc-compare-option'));
      assert(html.includes('🚀'));
      assert(html.includes('Option B'));
      assert(html.includes('Best choice'));
    });
  });

  describe('alert', function() {
    it('should render info alert', function() {
      const mock = createMockHexo();
      require('../tags/alert')(mock.hexo);
      const html = mock.callTag('alert', ['info'], 'Title|Body text');
      assert(html.includes('dc-alert'));
      assert(html.includes('Title'));
      assert(html.includes('Body text'));
    });

    it('should render warning alert', function() {
      const mock = createMockHexo();
      require('../tags/alert')(mock.hexo);
      const html = mock.callTag('alert', ['warning'], 'Warn|Be careful');
      assert(html.includes('dc-alert'));
      assert(html.includes('⚠️'));
    });

    it('should render tip alert', function() {
      const mock = createMockHexo();
      require('../tags/alert')(mock.hexo);
      const html = mock.callTag('alert', ['tip'], 'Tip|Useful info');
      assert(html.includes('dc-alert'));
      assert(html.includes('💡'));
    });
  });

  describe('quotes', function() {
    it('should render quotes container with title', function() {
      const mock = createMockHexo();
      require('../tags/quotes')(mock.hexo);
      const open = mock.callTag('quotes', ['Famous Quotes']);
      assert(open.includes('dc-quotes'));
      assert(open.includes('Famous Quotes'));
    });

    it('should render dcquote with source', function() {
      const mock = createMockHexo();
      require('../tags/quotes')(mock.hexo);
      const html = mock.callTag('dcquote', ['Author'], 'Quote text');
      assert(html.includes('dc-quote'));
      assert(html.includes('Author'));
      assert(html.includes('Quote text'));
    });
  });

  describe('minicards', function() {
    it('should render minicards container', function() {
      const mock = createMockHexo();
      require('../tags/minicards')(mock.hexo);
      const open = mock.callTag('minicards', []);
      assert(open.includes('dc-minicards'));
    });

    it('should render mini card with title', function() {
      const mock = createMockHexo();
      require('../tags/minicards')(mock.hexo);
      const html = mock.callTag('mini', ['Item A'], 'Short desc');
      assert(html.includes('dc-mini'));
      assert(html.includes('Item A'));
      assert(html.includes('Short desc'));
    });
  });

  describe('flow', function() {
    it('should render flow steps', function() {
      const mock = createMockHexo();
      require('../tags/flow')(mock.hexo);
      const html = mock.callTag('flow', ['Step A', '*Step B', 'Step C']);
      assert(html.includes('dc-flow'));
      assert(html.includes('dc-flow-step'));
      assert(html.includes('Step A'));
      assert(html.includes('Step B'));
      assert(html.includes('Step C'));
      assert(html.includes('dc-flow-arrow'));
    });

    it('should highlight step with * prefix', function() {
      const mock = createMockHexo();
      require('../tags/flow')(mock.hexo);
      const html = mock.callTag('flow', ['A', '*B', 'C']);
      assert(html.includes('dc-highlight'));
      // Should not show the * in the output
      assert(!html.includes('>*B<'));
    });

    it('should render step description with pipe separator', function() {
      const mock = createMockHexo();
      require('../tags/flow')(mock.hexo);
      const html = mock.callTag('flow', ['Draft|Write it', '*Build|hexo generate', 'Deploy|Push']);
      assert(html.includes('Draft'));
      assert(html.includes('Write it'));
    });

    it('should render caption after bare pipe', function() {
      const mock = createMockHexo();
      require('../tags/flow')(mock.hexo);
      const html = mock.callTag('flow', ['Request', '*Process', 'Response', '|', 'Data flow overview']);
      assert(html.includes('dc-flow-caption'));
      assert(html.includes('Data flow overview'));
    });
  });

  describe('colorways', function() {
    it('should default to olive-garden', function() {
      const { getColorway } = require('../lib/colorways');
      const hexo = { config: {} };
      const cw = getColorway(hexo, {});
      assert.strictEqual(cw.c1, '#283618');
    });

    it('should respect page colorway override', function() {
      const { getColorway } = require('../lib/colorways');
      const hexo = { config: {} };
      const cw = getColorway(hexo, { colorway: 'fiery-ocean' });
      assert.strictEqual(cw.c1, '#780000');
    });

    it('should fall back to olive-garden for unknown colorway', function() {
      const { getColorway } = require('../lib/colorways');
      const hexo = { config: {} };
      const cw = getColorway(hexo, { colorway: 'nonexistent' });
      assert.strictEqual(cw.c1, '#283618');
    });
  });

  describe('CSS injection', function() {
    it('should generate CSS with all tag classes', function() {
      const { getCSS } = require('../lib/css');
      const css = getCSS();
      assert(css.includes('dc-flow'));
      assert(css.includes('dc-cards'));
      assert(css.includes('dc-accent'));
      assert(css.includes('dc-compare'));
      assert(css.includes('dc-alert'));
      assert(css.includes('dc-quotes'));
      assert(css.includes('dc-mini'));
      assert(css.includes('dc-banner'));
      assert(css.includes('data-hexo-design-cards'));
    });
  });
});
