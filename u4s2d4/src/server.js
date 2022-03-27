const app = require("./index");

const connect = require("../configs/db");

app.listen(5400, async (req, res) => {
  await connect();
  console.log("listing on the port 5400");
});
