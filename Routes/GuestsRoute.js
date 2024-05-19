const {
  AddGuest,
  VerifyGuest,
  FetchAllGuests,
} = require("../controller/GuestsController");
const express = require("express");

const route = express.Router();

route.post("/AddGuest", (req, res) => {
  const {
    RoomNumber,
    RoomId,
    Customer_Name,
    Checked_In_Date,
    Checked_Out_Date,
    IdentityType,
    IdentityNumber_Hashed,
    MobileNumber,
  } = req.body;
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
      res.status(200).json(Result);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

route.post("/VerifyGuest/:id", (req, res) => {
  const EncodedRoomNo = req.params.id;
  const { MobileNumber } = req.body;
  VerifyGuest(MobileNumber, EncodedRoomNo)
    .then((item) => {
      res.status(200).json("User Verified");
    })
    .catch((Err) => {
      res.status(400).json({ "Error While Verifying": Err });
    });
});

route.get("/FetchAllGuests", (req, res) => {
  FetchAllGuests()
    .then((Items) => {
      res.status(200).send(Items);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = route;
