const Task = require('./task.model');

const taskRepo = require('./task.memory.repository');

const getAll = () => taskRepo.getAll();

const getById = id => {
  return taskRepo.getById(id);
};

const createTask = task => {
  const taskModel = new Task(task);

  return taskRepo.createTask(taskModel);
};

const updateTask = (taskId, task) => taskRepo.updateTask(taskId, task);

const deleteTask = taskId => taskRepo.deleteTask(taskId);

const deleteBoardTasks = boardId => taskRepo.deleteBoardTasks(boardId);

const changeTaskUserId = (userId, value) =>
  taskRepo.changeTaskUserId(userId, value);

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
  deleteBoardTasks,
  changeTaskUserId
};
