const express = require("express");
const router = express.Router();
const usersRouter = require("./user");
const tweetsRouter = require("./tweet");

console.log("here 1");

router.use("/users", usersRouter);
router.use("/tweet", tweetsRouter);

module.exports = router;
