const validateBoard = board => {
  if (board.title && board.columns) {
    return true;
  }
  return false;
};

module.exports = { validateBoard };
