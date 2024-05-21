const { guestTokenGenerator } = require("../TokenGenerator")
const auth = require("../auth")
const {
  AddGuest,
  VerifyGuest,
  FetchAllGuests,
} = require("../controller/GuestsController")
const express = require("express")

const route = express.Router()

route.post("/AddGuest", auth, (req, res) => {
  const {
    RoomNumber,
    RoomId,
    Customer_Name,
    Checked_In_Date,
    Checked_Out_Date,
    IdentityType,
    IdentityNumber_Hashed,
    MobileNumber,
  } = req.body
  AddGuest(
    RoomNumber,
    RoomId,
    Customer_Name,
    Checked_In_Date,
    Checked_Out_Date,
    IdentityType,
    IdentityNumber_Hashed,
    MobileNumber
  )
    .then((Result) => {
      res.status(200).json(Result)
    })
    .catch((err) => {
      res.status(404).json(err)
    })
})

route.post("/VerifyGuest", (req, res) => {
  const EncodedRoomNo = req.query.roomId
  const { MobileNumber } = req.body
  VerifyGuest(MobileNumber, EncodedRoomNo)
    .then((item) => {
      if (item) {
        const token = guestTokenGenerator(EncodedRoomNo, MobileNumber)
        res.cookie("jwt", token, {
          httpOnly: false,
          maxAge: 30 * 60 * 1000,
          // maxAge: 60 * 1000, // 1 minute
        })
        res.send(item)
      } else {
        res.status(400).json("Invalid Credentials")
      }
    })
    .catch((Err) => {
      res.status(400).json("Error While Verifying")
    })
})

route.get("/FetchAllGuests", auth, (req, res) => {
  FetchAllGuests()
    .then((Items) => {
      res.status(200).send(Items)
    })
    .catch((err) => {
      res.status(404).json(err)
    })
})

module.exports = route
