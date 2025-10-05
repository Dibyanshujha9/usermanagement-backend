// in-memory store
let users = [];
let nextId = 1;

function getAllUsers() {
  return users;
}

function addUser(firstName, lastName) {
  const user = { id: nextId++, firstName, lastName };
  users.push(user);
  return user;
}

module.exports = { getAllUsers, addUser };
