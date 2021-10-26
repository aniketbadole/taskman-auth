const express = require("express");
const router = new express.Router();
const path = require("path");

router.get("/", (req, res) => {
  // res.sendFile("../documentation.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "../documentation.html"));
});

module.exports = router;
