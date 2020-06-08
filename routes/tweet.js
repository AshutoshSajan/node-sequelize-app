const express = require("express");
const router = express.Router();
const tweetController = require("../controllers/tweetController");

router.get("/", tweetController.getAllTweets);
router.get("/:id", tweetController.getOneTweet);
router.post("/new", tweetController.createTweet);
router.put("/", tweetController.updateTweet);
router.delete("/", tweetController.deleteTweet);

module.exports = router;
