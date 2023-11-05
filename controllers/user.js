const { validationResult } = require("express-validator");
const User = require("../models/user");
const { doEncrypt } = require("../utils/bcryptjs");
const customErr = require("../utils/createError");

const usersList = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

const addUsers = async (req, res, next) => {
  const result = validationResult(req);
  console.log(result);
  console.log(req.body);
  try {
    if (result.isEmpty()) {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        customErr(409, "Exists", "This user already exists!");
      } else {
        const password = await doEncrypt(password);
        const user = await User.create({
          name,
          email,
          password,
          roles: [{ role: "Admin" }],
        });
        return res.status(201).jsone({ data: user });
      }
    } else {
      customErr(
        400,
        "MissingData",
        `${result.errors[0]["path"]} - ${result.errors[0]["msg"]}`
      );
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { usersList, addUsers };
