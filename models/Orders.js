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
      RoomId: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      Payment_Mode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      OrderStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      // Options
      tableName: "Orders", // Explicit table name
      timestamps: true,
      getterMethods: {
        createdAt() {
          const rawDate = this.getDataValue("createdAt");
          return formatDate(rawDate);
        },
        updatedAt() {
          const rawDate = this.getDataValue("updatedAt");
          return formatDate(rawDate);
        },
      }, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return Order;
};
function formatDate(date) {
  if (!date) return null;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}${month}${year}`;
}
