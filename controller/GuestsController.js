<<<<<<< HEAD
const { Op } = require("sequelize") // Import necessary operators from sequelize
const db = require("../models")
const md5 = require("md5")
const Guests = db.Guests
=======
const { Op } = require("sequelize"); // Import necessary operators from sequelize
const db = require("../models");
const md5 = require("md5");
const { guestTokenGenerator } = require("../TokenGenerator");
const Guests = db.Guests;
>>>>>>> 60ecd853347a991f7158f9db2fb0e60d4a073e81

const AddGuest = async (
  RoomNumber,
  RoomId,
  Customer_Name,
  Checked_In_Date,
  Checked_Out_Date,
  IdentityType,
  IdentityNumber_Hashed,
  MobileNumber
) => {
  const GuestId = md5(RoomNumber + MobileNumber)
  try {
    let data = await Guests.create({
      GuestId,
      RoomNumber,
      RoomId,
      Customer_Name,
      Checked_In_Date,
      Checked_Out_Date,
      IdentityType,
      IdentityNumber_Hashed,
      MobileNumber,
    })
    console.log("Data Inserted Successfully")
    return data
  } catch (e) {
    console.log(e)
    return null // Return null in case of error
  }
}

const FetchAllGuests = async () => {
  try {
    const GuestData = await Guests.findAll({})
    return GuestData
  } catch (e) {
    console.error("Error fetching guests:", e)
    return null // Return null in case of error
  }
}

const VerifyGuest = async (MobileNumber, EncodedRoomNo) => {
  try {
    const response = await Guests.findOne({
      where: {
        MobileNumber,
      },
<<<<<<< HEAD
    })
    let Hash = md5(response.RoomNumber)
=======
    });
    console.log(response);
    let Hash = md5(response.RoomNumber);
>>>>>>> 60ecd853347a991f7158f9db2fb0e60d4a073e81
    if (response && Hash == EncodedRoomNo) {
      const { GuestId, RoomId, RoomNumber } = response
      const result = { GuestId, RoomId, RoomNumber }
      return result
    }
    return false
  } catch (e) {
    console.error("Error verifying guest:", e)
    return false // Return false in case of error
  }
}

module.exports = { AddGuest, FetchAllGuests, VerifyGuest }
