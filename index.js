const app = require("./app");
const { PORT } = process.env;

app.listen(PORT, function () {
  console.log("listening on port" + PORT);
});
