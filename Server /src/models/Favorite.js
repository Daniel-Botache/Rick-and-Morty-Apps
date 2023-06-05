const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Favorite",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      species: { type: DataTypes.STRING, allowNull: false },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "genderless", "unknown"),
        allowNull: false,
      },
      image: { type: DataTypes.STRING, allowNull: false },
    },
    { timestamps: false }
  );
};

/* //{
	"id": "1500",
	"name": "Daniel54-",
	"status":"Alive",
	"origin": "earth",
	"image": "fres",
	"species": "human",
	"gender": "Male"
} */
