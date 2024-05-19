const { Op } = require("sequelize") // Import necessary operators from sequelize
const db = require("../models")
const md5 = require("md5")
const Guests = db.Guests

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
  const GuestId = md5(RoomNumber + MobileNumber);
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
    const calculatedHash = md5(response.RoomNumber)
    // console.log("hash", calculatedHash)
    // console.log(response.RoomNumber, md5(response.RoomNumber));
    if (response && calculatedHash == EncodedRoomNo) {
      return response
=======
    });
    let Hash = md5(response.RoomNumber);
    if (response && Hash == EncodedRoomNo) {
      return true;
>>>>>>> 939e8085d6bc077df8d56a793c5c69ed62c47d31
    }
    return false
  } catch (e) {
    console.error("Error verifying guest:", e)
    return false // Return false in case of error
  }
}

module.exports = { AddGuest, FetchAllGuests, VerifyGuest }
