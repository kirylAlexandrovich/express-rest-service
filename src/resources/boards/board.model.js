const uuid = require('uuid');

const Column = require('../columns/column.model');

class Board {
  constructor({ id = uuid(), title = 'Board1', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = new Column(columns).get();
  }
}

module.exports = Board;
