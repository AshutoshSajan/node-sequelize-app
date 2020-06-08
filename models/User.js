const Sequelize = require("sequelize");
const db = require("../config/database");
const Tweet = require("./Tweet");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const User = db.define(
	"User",
	{
		id: {
			type: Sequelize.UUID,
			primaryKey: true,
			allowNull: false,
			autoIncriment: false,
			defaultValue: Sequelize.UUIDV4,
		},
		firstName: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "name is required",
				},
				len: {
					args: [3, 30],
					msg: "name must be between 4 and 30 letters",
				},
				isAlpha: {
					args: true,
					msg: "name must only contain letters",
				},
			},
		},
		lastName: {
			type: Sequelize.STRING,
		},
		userName: {
			type: Sequelize.STRING(30),
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: {
					args: true,
					msg: "username is required",
				},
				len: {
					args: [3, 30],
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
		password: {
			type: Sequelize.STRING,
			validate: {
				notEmpty: {
					args: true,
					msg: "password is required",
				},
				min: {
					args: 8,
					msg: "password must be atleast 8 charecters long",
				},
			},
		},
		isAdmin: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
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
	{
		hooks: {
			beforeCreate: (user) => {
				bcrypt.genSalt(saltRounds, function (err, salt) {
					if (err) return console.error("bcrypt salt genarate error");
					bcrypt.hash(user.password, salt, function (err, hash) {
						if (err) return console.error("bcrypt password hashing error");
						user.password = hash;
						console.log(user.password.length);

						user.save();
					});
				});
			},
		},

		instanceMethods: {
			validPassword(password) {
				bcrypt.compare(password, this.password, function (err, result) {
					console.log(result, "...............");
					return result;
				});
			},
		},
	}
);

User.hasMany(Tweet);

module.exports = User;
