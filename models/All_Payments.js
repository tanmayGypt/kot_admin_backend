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
      OrderDetails: {
        type: DataTypes.STRING, // Use TEXT if the details can be lengthy
        allowNull: true,
      },
    },
    {
      tableName: "All_Payments", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return AllPayments;
};
