"use strict";
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
				autoIncriment: false,
				defaultValue: DataTypes.UUIDV4,
			},
			first_name: {
				type: DataTypes.STRING,
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
				type: DataTypes.STRING,
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
				type: DataTypes.STRING(30),
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
				type: DataTypes.STRING,
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
				type: DataTypes.STRING(300),
				allowNull: false,
			},
			dob: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			country: {
				type: DataTypes.STRING(50),
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
	User.associate = function (models) {
		// associations can be defined here
	};
	return User;
};
