require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const morgan = require("morgan");
const routes = require("./src/routes/index");

app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

app.listen(port, () => {
  console.log("Server is listening on port " + port);
});
