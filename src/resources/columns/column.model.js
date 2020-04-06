const uuid = require('uuid');

class Column {
  constructor(columsArr) {
    this.columns = columsArr;
  }

  get() {
    return this.columns.map(this.createColumn);
  }

  createColumn(columnObj) {
    const { title, order } = columnObj;

    return {
      id: uuid(),
      title,
      order
    };
  }
}

module.exports = Column;
