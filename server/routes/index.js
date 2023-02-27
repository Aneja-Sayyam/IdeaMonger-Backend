const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the server." });
});

router.use("/api", require("./api"));
module.exports = router;
