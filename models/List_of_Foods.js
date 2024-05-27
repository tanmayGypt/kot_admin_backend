// models/Food.js
module.exports = (sequelize, DataTypes) => {
  const Food = sequelize.define(
    "Food",
    {
      FoodId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isVeg: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      ImageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      FoodName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Discount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Category: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // Options
      tableName: "List_of_Foods", // Explicit table name
      timestamps: true, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return Food;
};
