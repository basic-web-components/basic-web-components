import createSymbol from './createSymbol';

export default {
  applySelection: createSymbol('[symbols.applySelection]'),
  defaults: createSymbol('defaults'),
  goDown: createSymbol('goDown'),
  goEnd: createSymbol('goEnd'),
  goLeft: createSymbol('goLeft'),
  goRight: createSymbol('goRight'),
  goStart: createSymbol('goStart'),
  goUp: createSymbol('goUp'),
  itemAdded: createSymbol('itemAdded'),
  keydown: createSymbol('keydown')
};
