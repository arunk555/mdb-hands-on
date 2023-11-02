const express = require("express");
userRouter = express.Router();

userRouter
  .route("/")
  .get((req, res, next) => {
    console.log("Hiaass " + req.method);
    res.status(200).json({
      headip: req.headers["x-forwarded-for"],
      sockip: req.socket.remoteAddress,
    });
  })
  .post((req, res, next) => {
    console.log("Hi " + req.method);
    res.status(200).json({
      headip: req.headers["x-forwarded-for"],
      sockip: req.socket.remoteAddress,
    });
  });

module.exports = userRouter;
