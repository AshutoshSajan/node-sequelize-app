"use strict";
module.exports = (sequelize, DataTypes) => {
	const Tweet = sequelize.define(
		"Tweet",
		{
			id: {
				type: DataTypes.UUIDV4,
				allowNull: false,
				autoIncrement: false,
				primarykey: true,
			},
			content: {
				type: DataTypes.STRING(300),
				allowNull: false,
				validate: {
					notEmpty: {
						args: true,
						msg: "tweet body can't be empty",
					},
				},
			},
		},
		{}
	);
	Tweet.associate = function (models) {
		// associations can be defined here
	};
	return Tweet;
};
