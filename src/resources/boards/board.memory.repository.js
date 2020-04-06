const { boards } = require('../../mocks.json');

const getAll = async () => boards;

const getById = id => {
  const board = boards.find(el => el.id === id);

  if (!board) {
    throw new Error('404');
  }

  return board;
};

const createBoard = board => {
  try {
    boards.push(board);

    return board;
  } catch (e) {
    throw new Error(e);
  }
};

const updateBoard = (boardId, board) => {
  try {
    const dbBoard = getById(boardId);
    const { title, columns } = board;

    dbBoard.title = title;
    dbBoard.columns = columns;

    return dbBoard;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteBoard = boardId => {
  try {
    const board = getById(boardId);

    boards.splice(boards.indexOf(board), 1);
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = { getAll, getById, createBoard, updateBoard, deleteBoard };
