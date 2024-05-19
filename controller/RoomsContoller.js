const md5 = require("md5"); // Ensure you have the md5 package installed
const db = require("../models");

const Rooms = db.Rooms;

const AddnewRoom = async (RoomNumber, isOccupied, GuestId, MobileNumber) => {
  try {
    let EncodedRoomNo = md5(RoomNumber.toString());
    let result = await Rooms.create({
      EncodedRoomNo,
      RoomNumber,
      isOccupied,
      GuestId,
      MobileNumber,
    });
    // console.log(result);
    return result;
  } catch (e) {
    // console.error("Error adding new room:", e);
    return e;
  }
};

const UpdateRoom = async (RoomId, isOccupied) => {
  try {
    let Row = await Rooms.findOne({ where: { RoomId } });
    if (Row && !Row.GuestId) {
      let Result = await Rooms.update(
        {
          isOccupied,
        },
        {
          where: { RoomId },
        }
      );
      console.log("Update Success " + Result);
      return Result;
    }
    return null;
  } catch (err) {
    console.error("Error updating room:", err);
    return err;
  }
};

const FetchAllRooms = async () => {
  try {
    let AllRooms = await Rooms.findAll({});
    console.log(AllRooms);
    return AllRooms;
  } catch (err) {
    console.error("Error fetching all rooms:", err);
    return null;
  }
};

module.exports = { FetchAllRooms, UpdateRoom, AddnewRoom };
