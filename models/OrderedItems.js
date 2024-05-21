// Define the OrderItem model
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("OrderItem", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Item_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OrderId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return OrderItem;
};
