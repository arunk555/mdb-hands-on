const express = require("express");
const { usersList, addUsers } = require("../controllers/user");
const { body } = require("express-validator");
userRouter = express.Router();

const validate = [
  body("name").notEmpty().withMessage("Name is mandatory field!"),
  body("email").isEmail().withMessage("Not a valid e-mail address"),
  body("password").isStrongPassword(),
];
userRouter.route("/").get(usersList).post(validate, addUsers);

module.exports = userRouter;
