const { users } = require('../../mocks.json');

const getAll = () => {
  return users;
};

const getById = id => {
  const user = users.find(el => el.id === id);

  if (!user) {
    throw new Error(`User ${id} is not exist`);
  }

  return user;
};

const createUser = async user => {
  const { id, name, login, password } = user;
  try {
    await users.push({ id, name, login, password });

    return { id, name, login };
  } catch (e) {
    throw new Error(e);
  }
};

const updateUser = (userId, user) => {
  try {
    const dbUser = getById(userId);

    const { name, login, password } = user;

    dbUser.name = name;
    dbUser.login = login;
    dbUser.password = password;

    return { name, login, password };
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUser = userId => {
  const dbUser = getById(userId);

  users.splice(users.indexOf(dbUser), 1);
};

module.exports = { getAll, getById, createUser, updateUser, deleteUser };
