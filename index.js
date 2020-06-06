const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./config/database");

sequelize
	.authenticate()
	.then(() => console.log("Database is connected..."))
	.catch((err) => console.log("Error: " + err));

const app = express();

app.get("/", (req, res) => res.send("index"));

const PORT = process.env.port || 3000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
