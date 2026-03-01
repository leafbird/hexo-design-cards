'use strict';

const colorways = {
  'deep-sea': {
    name: 'Deep Sea',
    c1: '#0d1b2a', c2: '#1b263b', c3: '#415a77', c4: '#778da9', c5: '#e0e1dd'
  },
  'olive-garden': {
    name: 'Olive Garden Feast',
    c1: '#283618', c2: '#606c38', c3: '#bc6c25', c4: '#dda15e', c5: '#fefae0'
  },
  'fiery-ocean': {
    name: 'Fiery Ocean',
    c1: '#780000', c2: '#c1121f', c3: '#003049', c4: '#669bbc', c5: '#fdf0d5'
  },
  'rustic-earth': {
    name: 'Rustic Earthy Tones',
    c1: '#414833', c2: '#656d4a', c3: '#7f5539', c4: '#a68a64', c5: '#ede0d4'
  },
  'sunny-beach': {
    name: 'Sunny Beach Day',
    c1: '#001524', c2: '#78290f', c3: '#15616d', c4: '#ff7d00', c5: '#ffecd1'
  }
};

function getColorway(hexo, page) {
  const pageColorway = page && page.colorway;
  const globalColorway = hexo.config.design_cards && hexo.config.design_cards.colorway;
  const key = pageColorway || globalColorway || 'deep-sea';
  return colorways[key] || colorways['deep-sea'];
}

function tint(hex, opacity) {
  opacity = opacity || 0.12;
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
}

module.exports = { colorways, getColorway, tint };
