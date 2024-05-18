// models/Order.js
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      OrderId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      CustomerId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isPaid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      TotalAmount: {
        type: DataTypes.NUMERIC,
        allowNull: true,
      },
      OrderedItems: {
        type: DataTypes.STRING, // Changed to VARCHAR(255) to store JSON array
        allowNull: true,
      },
      RoomId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      CreatedAt: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Payment_Mode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      OrderStatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // Options
      tableName: "Orders", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return Order;
};
