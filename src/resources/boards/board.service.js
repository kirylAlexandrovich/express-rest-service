const Board = require('./board.model');

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

const deleteBoard = boardId => boardRepo.deleteBoard(boardId);

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
