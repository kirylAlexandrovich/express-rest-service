const validateUser = user => {
  if (user.name && user.login && user.password) {
    return true;
  }

  return false;
};

module.exports = { validateUser };
