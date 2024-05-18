const { where } = require("sequelize");
let db = require("../models");

const Rooms = db.Rooms;

let AddnewRoom = async (RoomNumber, isOccupied, GuestId, MobileNumber) => {
  try {
    let EncodedRoomNo = md5(RoomNumber);
    let result = await Rooms.create({
      EncodedRoomNo,
      RoomNumber,
      isOccupied,
      GuestId,
      MobileNumber,
    });
    return result;
  } catch (e) {
    return;
  }
};

let UpdateRoom = async (RoomId, isOccupied) => {
  try {
    let Row = await Rooms.findOne({ RoomId });
    if (!Row.GuestId) {
      let Result = await Rooms.update(
        {
          isOccupied,
        },
        {
          where: { RoomId },
        }
      );
    }

    return null;
  } catch (err) {
    return null;
  }
};

let FetchAllRooms = async () => {
  try {
    let AllRooms = await Rooms.fineAll({});
    return AllRooms;
  } catch (err) {
    return null;
  }
};

module.exports = { FetchAllRooms, UpdateRoom, AddnewRoom };
