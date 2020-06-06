const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./config/database");
const User = require("./models/User");
const Tweet = require("./models/Tweet");

const app = express();

sequelize
	.authenticate()
	.then(() => console.log("Database is connected..."))
	.catch((err) => console.log("Error: " + err));

app.get("/users", (req, res) => {
	User.findAll().then((users, err) => {
		if (err) {
			return res
				.status(500)
				.json({ success: false, message: "Server dide error" });
		} else {
			return res.status(200).json({ success: true, users });
		}
	});
});

app.post("/users", (req, res) => {
	const { user } = req.body;
	User.create(user).then((user, err) => {
		if (err) {
			return res
				.status(500)
				.json({ success: false, message: "Server dide error" });
		} else {
			return res.status(200).json({ success: true, user });
		}
	});
});

app.put("/users", (req, res) => {
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
});

app.delete("/users", (req, res) => {
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
});

const PORT = process.env.port || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
