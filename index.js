const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");
const User = require("./models/User");
const Tweet = require("./models/Tweet");

const usersRouter = require("./routes/user");
const tweetsRouter = require("./routes/tweet");

// const Sequelize = require("sequelize");
// console.log(Sequelize.UUIDV4, "Sequelize...");
// console.log(sequelize.sync, "sequelize...");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// working when adding schema manually
db.sync({
	logging: console.log,
	force: true,
})
	.then(() => console.log("Connection to database is established successfully"))
	.catch((err) => console.log("Unable to connect to the database" + err));

// OR
// working when adding schema using sequalize-cli

// db
// 	.authenticate()
// 	.then(() => console.log("Database is connected..."))
// 	.catch((err) => console.log("Database connection error: " + err));

app.use("/api/v1/users", usersRouter);
app.use("/api/v1/tweets", tweetsRouter);
// app.use("/*", (req, res) => res.send("welcome to node sequalize app"));

const PORT = process.env.port || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
