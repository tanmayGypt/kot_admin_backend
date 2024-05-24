// models/AdminPanel.js
module.exports = (sequelize, DataTypes) => {
  const AdminPanel = sequelize.define(
    "AdminPanel",
    {
      Username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      MasterKey: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Options
      tableName: "Admin_Panel", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  )

  return AdminPanel
}
