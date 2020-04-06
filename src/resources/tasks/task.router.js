const router = require('express').Router();

const tasksService = require('./task.service');

router.param('id', async (req, res, next, value) => {
  req.taskId = value;
  next();
});

router.route('/').get(async (req, res) => {
  try {
    const tasks = await tasksService.getAll();

    res.json(tasks);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(400);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.getById(req.taskId);

    res.json(task);
  } catch (e) {
    if (e.message === '404') {
      res.sendStatus(e.message);
      return;
    }
    console.error(e);

    res.sendStatus(400);
  }
});

router.route('/').post(async (req, res) => {
  try {
    const task = await tasksService.createTask({
      ...req.body,
      boardId: req.boardId
    });

    res.json(task);
  } catch (e) {
    console.error(e.message);
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  try {
    const task = await tasksService.updateTask(req.taskId, req.body);

    res.json(task);
  } catch (e) {
    console.error('Task put', e.message);
    res.sendStatus(404);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await tasksService.deleteTask(req.taskId);

    res.sendStatus(204);
  } catch (e) {
    console.error('task delete', e.message);
    res.sendStatus(404);
  }
});

module.exports = router;
