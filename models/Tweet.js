const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Tweet = sequelize.define("Tweet", {
	id: {
		type: Sequelize.UUIDV4,
		allowNull: false,
		autoIncrement: false,
		primarykey: true,
	},
	content: {
		type: Sequelize.STRING(300),
		allowNull: false,
		validate: {
			notEmpty: {
				args: true,
				msg: "tweet body can't be empty",
			},
		},
	},
});

module.exports = Tweet;
