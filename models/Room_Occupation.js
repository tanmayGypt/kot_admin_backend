// models/RoomOccupationTransaction.js
const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const RoomOccupationTransaction = sequelize.define(
    "RoomOccupationTransaction",
    {
      OccupationId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        defaultValue: uuidv4, // Set default value as UUID
      },
      RoomId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      GuestId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Checked_In_Date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Checked_Out_Date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Customer_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      IdentityType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      IdentityNumber_Hashed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      MobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Options
      tableName: "Room_Occupation_Transaction", // Explicit table name
      timestamps: true, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return RoomOccupationTransaction;
};
