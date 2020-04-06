const Board = require('./board.model');

const taskService = require('../tasks/task.service');
const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getById = id => {
  return boardRepo.getById(id);
};

const createBoard = board => {
  const boardModel = new Board(board);

  return boardRepo.createBoard(boardModel);
};

const updateBoard = (boardId, board) => boardRepo.updateBoard(boardId, board);

const deleteBoard = boardId => {
  taskService.deleteBoardTasks(boardId);
  return boardRepo.deleteBoard(boardId);
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
