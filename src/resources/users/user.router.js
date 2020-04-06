const router = require('express').Router();

const usersService = require('./user.service');
const { validateUser } = require('./user.validator');

router.param('id', async (req, res, next, value) => {
  req.userId = value;
  next();
});

router.route('/').get(async (req, res) => {
  try {
    const users = await usersService.getAll();

    res.json(users);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.getById(req.userId);

    res.json(user);
  } catch (e) {
    console.error(e);
    res.sendStatus(400);
  }
});

router.route('/').post(async (req, res) => {
  if (!validateUser(req.body)) {
    res.sendStatus(400);
    return;
  }

  try {
    const user = await usersService.createUser(req.body);

    res.json(user);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

router.route('/:id').put(async (req, res) => {
  if (!validateUser(req.body)) {
    res.sendStatus(400);
    return;
  }

  try {
    const user = await usersService.updateUser(req.userId, req.body);

    res.json(user);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await usersService.deleteUser(req.userId);

    res.sendStatus(204);
  } catch (e) {
    console.log(e);
    res.sendStatus(404);
  }
});

module.exports = router;
