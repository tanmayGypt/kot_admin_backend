const express = require("express");
const {
  AddnewRoom,
  UpdateRoom,
  FetchAllRooms,
} = require("../controller/RoomsContoller");
// const { route } = require("./GuestsRoute");
const RoomRoute = express.Router();

RoomRoute.post("/AddNewRoom", (req, res) => {
  const { RoomNumber, isOccupied, GuestId, MobileNumber } = req.body;

  AddnewRoom(RoomNumber, isOccupied, GuestId, MobileNumber)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//Route Not Working
RoomRoute.post("/UpdateRoom/:RoomId", (req, res) => {
  const RoomId = req.params.RoomId;
  const { isOccupied } = req.body;
  UpdateRoom(RoomId, isOccupied)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

RoomRoute.get("/FetchAllRooms", (req, res) => {
  FetchAllRooms()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = RoomRoute;
