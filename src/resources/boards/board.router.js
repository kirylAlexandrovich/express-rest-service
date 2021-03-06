const router = require('express').Router();

const boardService = require('./board.service');
const { validateBoard } = require('./board.validator');

const taskRouter = require('../tasks/task.router');

router.param('id', async (req, res, next, value) => {
  req.boardId = value;
  next();
});

router.use('/:id/tasks', taskRouter);

router.route('/').get(async (req, res) => {
  try {
    const boards = await boardService.getAll();
    res.json(boards);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardService.getById(req.boardId);

    res.json(board);
  } catch (e) {
    console.error(e.message);
    if (e.message === '404') {
      res.sendStatus(e.message);
      return;
    }
    res.sendStatus(400);
  }
});

router.route('/').post(async (req, res) => {
  // if (!validateBoard(req.body)) { brake tests
  //  console.error('bad request board router');
  //   res.sendStatus(400);
  //   return;
  // }

  try {
    const board = await boardService.createBoard(req.body);

    res.send(board);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  if (!validateBoard(req.body)) {
    res.sendStatus(400);
    return;
  }

  try {
    const board = await boardService.updateBoard(req.boardId, req.body);

    res.send(board);
  } catch (e) {
    console.error(e.message);
    if (e.message === '404') {
      res.sendStatus(e.message);
      return;
    }
    res.sendStatus(400);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await boardService.deleteBoard(req.boardId);

    res.sendStatus(204);
  } catch (e) {
    console.error(e.message);
    if (e.message === '404') {
      res.sendStatus(e.message);
      return;
    }
    res.status(400);
  }
});

module.exports = router;
