// const Sequelize = require("sequelize");
// const db = require("../config/database");
const User = require("../models/User");
const Tweet = require("../models/Tweet");

module.exports = {
	getAllUsers: (req, res) => {
		User.findAll().then((users, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res.status(200).json({ success: true, users });
			}
		});
	},

	loginUser: (req, res) => {
		User.findOne().then((user, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res.status(200).json({ success: true, user });
			}
		});
	},

	registerUser: (req, res) => {
		const { user } = req.body;
		console.log(req.body);

		User.create(user).then((user, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res.status(200).json({ success: true, user });
			}
		});
	},

	updateUser: (req, res) => {
		const { id } = req.params;
		const { user } = req.body;

		User.update(user, {
			where: {
				id,
			},
		}).then((user, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res
					.status(200)
					.json({ success: true, user, message: "user updated" });
			}
		});
	},

	deleteUser: (req, res) => {
		const { id } = req.params;
		User.destroy({
			where: {
				id,
			},
		}).then((user, err) => {
			if (err) {
				return res
					.status(500)
					.json({ success: false, message: "Server dide error" });
			} else {
				return res
					.status(200)
					.json({ success: true, user, message: "user deleted" });
			}
		});
	},
};
