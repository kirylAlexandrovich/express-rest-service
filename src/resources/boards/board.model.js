const uuid = require('uuid');

const Column = require('../columns/column.model');

class Board {
  constructor({ title = 'Board1', columns = [] } = {}) {
    this.id = uuid();
    this.title = title;
    this.columns = new Column(columns).get();
  }
}

module.exports = Board;
