const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Hola mundo desde post");
});

module.exports = router;
