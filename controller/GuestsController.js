const { where } = require("sequelize");
let db = require("../models");
// const Guests = require("../models/Guests");
let md5 = require("md5");
const Guests = db.Guests;

let AddGuest = async (
  RoomNumber,
  RoomId,
  Customer_Name,
  Checked_In_Date,
  Checked_Out_Date,
  IdentityType,
  IdentityNumber_Hashed,
  MobileNumber
) => {
  try {
    let data = await Guests.create({
      RoomNumber,
      RoomId,
      Customer_Name,
      Checked_In_Date,
      Checked_Out_Date,
      IdentityType,
      IdentityNumber_Hashed,
      MobileNumber,
    });
    console.log("Data Iserted Succesfully");
    return data;
  } catch (e) {
    console.log(e);
    return;
  }
};

let FetchAllGuests = async () => {
  try {
    const GuestData = await db.Guests.findAll({});
    // console.log(GuestData);
    return GuestData;
  } catch (e) {
    // console.log(e);
    return;
  }
};

let VerifyGuest = async (MobileNumber, EncodedRoomNo) => {
  try {
    let respose = await findOne({
      where: {
        MobileNumber,
      },
    });
    if (md5(data.RoomNumber) == EncodedRoomNo) {
      return true;
    }
    return false;
  } catch (e) {
    console.log("AllGuest Fetch  Error " + e);
    return false;
  }
};

module.exports = { AddGuest, FetchAllGuests, VerifyGuest };
