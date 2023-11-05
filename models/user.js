const { Schema, SchemaTypes, model } = require("mongoose");
const { nanoid } = require("nanoid");
const roleSchema = new Schema({ value: String }, { timestamps: true });
const userschema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name must be greater than 3 characters!"],
      maxLength: 150,
      required: [true, "Why no name?"],
    },
    email: {
      type: String,
      required: [true, "Why no email?"],
      lowercase: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: [true, "Why no password?"],
    },
    roles: [roleSchema],
    id: {
      type: SchemaTypes.ObjectId,
    },
    verificationCode: {
      type: String,
      required: true,
      default: () => nanoid(),
    },
    passwordResetCode: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("user", userschema);
