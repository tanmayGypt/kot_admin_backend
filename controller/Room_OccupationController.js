const { where } = require("sequelize");
let db = require("../models");

const Room_Occupation = db.Room_Occupation;

let AddNewOccupation = async (
  RoomId,
  GuestId,
  Checked_In_Date,
  Checked_Out_Date,
  Customer_Name,
  IdentityType,
  IdentityNumber_Hashed,
  MobileNumber
) => {
  try {
    let result = await Room_Occupation.create({
      RoomId,
      GuestId,
      Checked_In_Date,
      Checked_Out_Date,
      Customer_Name,
      IdentityType,
      IdentityNumber_Hashed,
      MobileNumber,
    });
    return result;
  } catch (e) {
    return;
  }
};

let FetchAllRoomOccupations = async () => {
  try {
    let result = await Room_Occupation.findAll({
      order: [
        ["createdAt", "DESC"], // Primary sorting by createdAt in descending order
        ["updatedAt", "ASC"], // Secondary sorting by updatedAt in ascending order
      ],
    });
    return result;
  } catch (e) {
    return;
  }
};

module.exports = { FetchAllRoomOccupations, AddNewOccupation };
