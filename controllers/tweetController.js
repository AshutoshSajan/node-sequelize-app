// const Sequelize = require("sequelize");
// const db = require("../config/database");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

module.exports = {
	getAllTweets: (req, res) => {
		Tweet.findAll().then((users, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res.status(200).json({ success: true, users });
			}
		});
	},

	getOneTweet: (req, res) => {
		Tweet.findOne().then((tweet, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res.status(200).json({ success: true, tweet });
			}
		});
	},

	createTweet: (req, res) => {
		const { tweet } = req.body;
		Tweet.create(tweet).then((tweet, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res.status(200).json({ success: true, tweet });
			}
		});
	},

	updateTweet: (req, res) => {
		const { id } = req.params;
		const { tweet } = req.body;

		Tweet.update(tweet, {
			where: {
				id,
			},
		}).then((tweet, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res
					.status(200)
					.json({ success: true, tweet, message: "Tweet updated" });
			}
		});
	},

	deleteTweet: (req, res) => {
		const { id } = req.params;
		Tweet.destroy({
			where: {
				id,
			},
		}).then((tweet, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res
					.status(200)
					.json({ success: true, tweet, message: "Tweet deleted" });
			}
		});
	},
};
