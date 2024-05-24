// models/OrderPayment.js
module.exports = (sequelize, DataTypes) => {
  const OrderPayment = sequelize.define(
    "OrderPayment",
    {
      Order_PaymentId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      PaymentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      OrderId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Options
      tableName: "Order_Payments", // Explicit table name
      timestamps: true, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return OrderPayment;
};
