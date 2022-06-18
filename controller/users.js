const { request, response, json } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

const createUser = async (req = request, res = response) => {
  const { username, fullname, password, role } = req.body;

  const newUser = new User({ username, fullname, password, role });

  const salt = bcryptjs.genSaltSync();
  newUser.password = bcryptjs.hashSync(password, salt);

  await newUser.save();

  res.json({ newUser });
};

const getUsers = async (req = request, res = response) => {
  const { id } = req.params;

  const users = await User.find({ _id: { $ne: id } }).select([
    "username",
    "avatarImage",
    "_id",
  ]);

  res.json(users);
};

const updateUser = async (req = request, res = response) => {
  const { id } = req.params;
  const { avatarImage } = req.body;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { isAvatarImageSet: true, avatarImage },
    { new: true }
  );

  res.json({
    isSet: updatedUser.isAvatarImageSet,
    image: updatedUser.avatarImage,
  });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
};
