const express = require("express");
const {
  AddNewOccupation,
  FetchAllRoomOccupations,
} = require("../controller/Room_OccupationController");
const RoomOcupationRoute = express.Router();

RoomOcupationRoute.post("/AddNewOccupation", (req, res) => {
  const {
    RoomId,
    GuestId,
    Checked_In_Date,
    Checked_Out_Date,
    Customer_Name,
    IdentityType,
    IdentityNumber_Hashed,
    MobileNumber,
  } = req.body;

  AddNewOccupation(
    RoomId,
    GuestId,
    Checked_In_Date,
    Checked_Out_Date,
    Customer_Name,
    IdentityType,
    IdentityNumber_Hashed,
    MobileNumber
  )
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

RoomOcupationRoute.get("/FetchAllRoomOccupations", (req, res) => {
  FetchAllRoomOccupations()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = RoomOcupationRoute;
