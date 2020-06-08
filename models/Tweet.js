const Sequelize = require("sequelize");
const db = require("../config/database");

const Tweet = db.define(
	"Tweet",
	{
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
		},
		content: {
			type: Sequelize.STRING(300),
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "tweet is required",
				},
			},
		},
	},
	{}
);

Tweet.belongsTo("User");

module.exports = db;
