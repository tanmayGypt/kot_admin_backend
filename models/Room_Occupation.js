const moment = require("moment");
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
    },
    {
      // Options
      tableName: "Room_Occupation_Transaction", // Explicit table name
      timestamps: true, // Enable timestamps
      hooks: {
        beforeCreate: (transaction) => {
          transaction.Checked_In_Date = moment(
            transaction.Checked_In_Date,
            "YYYY-MM-DD"
          ).format("DD-MM-YYYY");
          transaction.Checked_Out_Date = moment(
            transaction.Checked_Out_Date,
            "YYYY-MM-DD"
          ).format("DD-MM-YYYY");
        },
        beforeUpdate: (transaction) => {
          transaction.Checked_In_Date = moment(
            transaction.Checked_In_Date,
            "YYYY-MM-DD"
          ).format("DD-MM-YYYY");
          transaction.Checked_Out_Date = moment(
            transaction.Checked_Out_Date,
            "YYYY-MM-DD"
          ).format("DD-MM-YYYY");
        },
        afterFind: (result) => {
          if (Array.isArray(result)) {
            result.forEach((record) => {
              record.Checked_In_Date = moment(
                record.Checked_In_Date,
                "YYYY-MM-DD"
              ).format("DD-MM-YYYY");
              record.Checked_Out_Date = moment(
                record.Checked_Out_Date,
                "YYYY-MM-DD"
              ).format("DD-MM-YYYY");
            });
          } else if (result) {
            result.Checked_In_Date = moment(
              result.Checked_In_Date,
              "YYYY-MM-DD"
            ).format("DD-MM-YYYY");
            result.Checked_Out_Date = moment(
              result.Checked_Out_Date,
              "YYYY-MM-DD"
            ).format("DD-MM-YYYY");
          }
        },
      },
    }
  );

  return RoomOccupationTransaction;
};
