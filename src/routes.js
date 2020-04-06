const express = require('express');

const router = express.Router();

const usersRouter = require('./resources/users/user.router');
const boardsRouter = require('./resources/boards/board.router');

router.use('/users', usersRouter);

router.use('/boards', boardsRouter);

module.exports = router;
