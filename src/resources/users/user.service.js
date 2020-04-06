const User = require('./user.model');

const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll().map(User.toResponse);

const getById = id => User.toResponse(usersRepo.getById(id));

const createUser = user => {
  const userObj = new User(user);

  return usersRepo.createUser(userObj);
};

const updateUser = (userId, user) => usersRepo.updateUser(userId, user);

const deleteUser = userId => usersRepo.deleteUser(userId);

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
