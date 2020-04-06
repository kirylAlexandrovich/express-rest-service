const uuid = require('uuid');

class Task {
  constructor({
    title = 'BoardTask',
    order = 0,
    description = 'Task description',
    userId = 'string-123',
    boardId = 'string',
    columnId = 'string'
  } = {}) {
    this.id = uuid();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
