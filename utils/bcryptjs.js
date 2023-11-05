const { genSalt, hash } = require("bcryptjs");
const errorhandler = require("../middlewares/errorhandler");
const { SALT_FACTOR } = process.env;

const doEncrypt = async function (password) {
  try {
    const salt = await genSalt(parseInt(SALT_FACTOR));
    const encrypted = await hash(password, salt);
    return encrypted;
  } catch (error) {
    throw error;
  }
};

const doCompare = async function (password, storedPassword) {
  try {
    return await compare(password, storedPassword);
  } catch (error) {
    return error;
  }
};

module.exports = { doEncrypt, doCompare };
