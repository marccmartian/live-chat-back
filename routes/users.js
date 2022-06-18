const { Router } = require("express");
const { check } = require("express-validator");
const { getUsers, createUser, updateUser } = require("../controller/users");
const {
  validateNewUsername,
  validateRole,
  validateID,
} = require("../helpers/db-validators");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post(
  "/",
  [
    check("username", "user is required").notEmpty(),
    check("username").custom(validateNewUsername),
    check("fullname", "full name is required").notEmpty(),
    check("password", "password should have 5 characters").isLength({ min: 5 }),
    check("role").custom(validateRole),
    validateFields,
  ],
  createUser
);

router.get("/:id", getUsers);

router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom(validateID),
    check("role").custom(validateRole),
    validateFields,
  ],
  updateUser
);

module.exports = router;
