const express = require("express");
const errorhandler = require("./middlewares/errorhandler");
const dotenv = require("dotenv");
const routers = require("./routes");
const app = express();
dotenv.config({
  path: "./.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routers);

app.get("/", (req, res) => {
  res.status(200).send("Hi, Welcome to Express!");
});

/* Error Handling Middleware */
app.use(errorhandler);
module.exports = app;
