const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
	"User",
	{
		id: {
			type: Sequelize.UUIDV4,
			primaryKey: true,
			allowNull: false,
			autoIncriment: false,
			defaultValue: Sequelize.UUIDV4,
		},
		first_name: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "name is required",
				},
				len: {
					args: [4, 30],
					msg: "name must be between 4 and 30 letters",
				},
				isAlpha: {
					args: true,
					msg: "name must only contain letters",
				},
			},
		},
		last_name: {
			type: Sequelize.STRING,
			allowNull: true,
			validate: {
				len: {
					args: [4, 30],
					msg: "last_name must be between 4 and 30 letters",
				},
				isAlpha: {
					args: true,
					msg: "name must only contain letters",
				},
			},
		},
		username: {
			type: Sequelize.STRING(30),
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "username is required",
				},
				len: {
					args: [4, 30],
					msg: "name must be between 4 and 30 letters",
				},
			},
		},
		email: {
			type: Sequelize.STRING,
			unique: true,
			validate: {
				notEmpty: {
					args: true,
					msg: "email is required",
				},
				isEmail: {
					args: true,
					msg: "should be a prper email address",
				},
			},
		},
		bio: {
			type: Sequelize.STRING(300),
			allowNull: false,
		},
		dob: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		country: {
			type: Sequelize.STRING(50),
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "country feild is must",
				},
			},
		},
	},
	{}
);

module.exports = User;
