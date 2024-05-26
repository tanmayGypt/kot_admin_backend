const moment = require("moment");

module.exports = (sequelize, DataTypes) => {
  const AllPayments = sequelize.define(
    "AllPayments",
    {
      PaymentId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      TransactionId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OrderId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      RoomId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      PaymentMode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "All_Payments", // Explicit table name
      timestamps: true, // Enable timestamps
      hooks: {
        afterFind: (result) => {
          if (Array.isArray(result)) {
            result.forEach((record) => {
              record.dataValues.createdAt = moment(
                record.dataValues.createdAt
              ).format("DD-MM-YYYY, hh:mm:ss A");
              record.dataValues.updatedAt = moment(
                record.dataValues.updatedAt
              ).format("DD-MM-YYYY, hh:mm:ss A");
            });
          } else if (result) {
            result.dataValues.createdAt = moment(
              result.dataValues.createdAt
            ).format("DD-MM-YYYY, hh:mm:ss A");
            result.dataValues.updatedAt = moment(
              result.dataValues.updatedAt
            ).format("DD-MM-YYYY, hh:mm:ss A");
          }
        },
      },
    }
  );

  return AllPayments;
};
