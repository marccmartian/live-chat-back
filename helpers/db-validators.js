const Role = require("../models/role");
const User = require("../models/user");

const validateNewUsername = async (username) => {
  const existsUser = await User.findOne({ username });
  if (existsUser) throw new Error(`${username} user already exists`);
};

const validateRole = async (role) => {
  if (role) {
    const existsRole = await Role.findOne({ role });
    if (!existsRole) throw new Error(`${role} role no exists in database`);
  }
};

const validateID = async (id) => {
  const existsId = await User.findById(id);
  if (!existsId) throw new Error(`El id: ${id} no existe`);
};

module.exports = {
  validateNewUsername,
  validateRole,
  validateID,
};
