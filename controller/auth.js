const { request, response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");
const { generateJWT } = require("../helpers/generate-jwt");

const login = async (req = request, res = response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User or password wrong" });
    }

    const validatedPass = bcryptjs.compareSync(password, user.password);
    if (!validatedPass) {
      return res.status(400).json({ message: "User or password wrong" });
    }

    const token = await generateJWT(user.id);

    res.json({ message: "Login Success", user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  login,
};
