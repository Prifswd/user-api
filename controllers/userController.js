import users from "../data/user.js";

// Get all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

// Get user by ID
const getUserById = (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json(user);
};

// Add new user
const addUser = (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  const newUser = {
    id: (users.length + 1).toString(),
    firstName,
    lastName,
    hobby
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
const updateUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users[userIndex] = { id: req.params.id, ...req.body };
  res.status(200).json(users[userIndex]);
};

// Delete user
const deleteUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.params.id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(userIndex, 1);
  res.status(200).json({ message: "User deleted successfully" });
};

export {getAllUsers, getUserById, addUser, updateUser, deleteUser}



