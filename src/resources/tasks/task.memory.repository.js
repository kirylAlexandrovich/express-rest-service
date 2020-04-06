let { tasks } = require('../../mocks.json');

const getAll = async () => tasks;

const getById = id => {
  const task = tasks.find(el => el.id === id);

  if (!task) {
    throw new Error('404');
  }

  return task;
};

const createTask = task => {
  try {
    tasks.push(task);

    return task;
  } catch (e) {
    throw new Error(e);
  }
};

const updateTask = (taskId, task) => {
  try {
    const dbTask = getById(taskId);
    const { title, columns } = task;

    dbTask.title = title;
    dbTask.columns = columns;

    return dbTask;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteTask = taskId => {
  try {
    const task = getById(taskId);

    tasks.splice(tasks.indexOf(task), 1);
  } catch (e) {
    throw new Error(e);
  }
};

const deleteBoardTasks = boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
};

const changeTaskUserId = (userId, value) => {
  tasks.map(task => {
    task.userId = task.userId === userId ? value : task.userId;

    return task;
  });
};

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
  deleteBoardTasks,
  changeTaskUserId
};
