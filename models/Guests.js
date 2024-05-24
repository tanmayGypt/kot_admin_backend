// models/Guest.js
module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define(
    "Guests",
    {
      RoomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RoomId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      GuestId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Customer_Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Checked_In_Date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Checked_Out_Date: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: "Guests", // Explicit table name
      timestamps: true, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return Guest;
};
