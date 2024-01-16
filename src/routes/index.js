const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ["index"].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(path.join(pathRouter, file)));
    console.log(`Route /${fileWithOutExt} loaded`);
  }
});

module.exports = router;
