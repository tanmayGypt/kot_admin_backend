module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define(
    "Room",
    {
      RoomId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        default: 1,
        autoIncrement: true, // If you want auto-increment
      },
      EncodedRoomNo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      RoomNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      isOccupied: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      GuestId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Customer_Name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      MobileNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // Options
      tableName: "Rooms", // Explicit table name
      timestamps: true, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    }
  );

  return Room;
};
