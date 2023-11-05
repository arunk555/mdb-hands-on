const app = require("./app");
const { mdbconnet } = require("./utils/mdbconnect");
const { PORT } = process.env;

app.listen(PORT, function () {
  mdbconnet();
  console.log("listening on port" + PORT);
});
