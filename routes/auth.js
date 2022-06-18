const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controller/auth");
const { validateUsername } = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/login",
  [
    check("username", "user is required").notEmpty(),
    // check("username").custom(validateUsername),
    check("password", "password is required").notEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
