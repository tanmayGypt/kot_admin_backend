const { Op } = require("sequelize") // Import necessary operators from sequelize
const db = require("../models")
const { Where } = require("sequelize/lib/utils")
const { generateHash } = require("../TokenGenerator")
const Guests = db.Guests
const Rooms = db.Rooms
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
  IdentityNumber_HashedModified = generateHash(IdentityNumber_Hashed)
  const GuestId = generateHash(RoomNumber + MobileNumber)
  try {
    let data = await Guests.create({
      GuestId,
      RoomNumber,
      RoomId,
      Customer_Name,
      Checked_In_Date,
      Checked_Out_Date,
      IdentityType,
      IdentityNumber_Hashed: IdentityNumber_HashedModified,
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
    const GuestData = await Guests.findAll({
      order: [
        ["createdAt", "DESC"], // Primary sorting by createdAt in descending order
        ["updatedAt", "ASC"], // Secondary sorting by updatedAt in ascending order
      ],
    })
    return GuestData
  } catch (e) {
    console.error("Error fetching guests:", e)
    return null // Return null in case of error
  }
}

const FetchGuestById = async (RoomId) => {
  try {
    const GuestData = await Guests.findOne({
      where: {
        RoomId,
      },
    })
    return GuestData
  } catch (e) {
    console.error("Error fetching guest:", e)
    return null
  }
}

const DeleteGuestById = async (RoomId) => {
  try {
    if (!RoomId) {
      throw new Error("RoomId is required")
    }
    const GuestData = await Guests.destroy({
      where: {
        RoomId,
      },
    })

    if (GuestData === 0) {
      console.log(`No guest found with RoomId: ${RoomId}`)
      return { message: `No guest found with RoomId: ${RoomId}` }
    }

    return {
      message: `Guest with RoomId: ${RoomId} successfully deleted`,
      result: GuestData,
    }
  } catch (e) {
    console.error(`Error deleting guest with RoomId: ${RoomId}`, e)
    return { error: e.message }
  }
}

const VerifyGuest = async (MobileNumber, EncodedRoomNo) => {
  try {
    const response = await Guests.findOne({
      where: {
        MobileNumber,
      },
    })

    if (!response) {
      return false
    }
    const Row = await db.Rooms.findOne({ where: { EncodedRoomNo } })
    if (!Row) {
      return false
    }
    console.log(Row.MobileNumber)
    if (MobileNumber == Row.MobileNumber) {
      return Row
    }
    return false
  } catch (e) {
    return false
  }
}

module.exports = {
  AddGuest,
  FetchAllGuests,
  VerifyGuest,
  FetchGuestById,
  DeleteGuestById,
}
