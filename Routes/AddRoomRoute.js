const express = require("express");
const {
  AddnewRoom,
  UpdateRoom,
  FetchAllRooms,
  FetchRoomById,
} = require("../controller/RoomsContoller");
const { Rooms } = require("../models");
const auth = require("../auth");
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
  console.log("Route Is Working");
  const RoomId = req.params.RoomId;
  const { isOccupied, MobileNumber, Customer_Name, GuestId } = req.body;
  console.log(isOccupied, RoomId);
  UpdateRoom(RoomId, isOccupied, MobileNumber, Customer_Name, GuestId)
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

RoomRoute.get("/FetchRoomById/:RoomId", (req, res) => {
  const RoomId = req.params.RoomId;
  FetchRoomById(RoomId)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
RoomRoute.get("/FetchRoomByEncoded/:EncodedRoomNo", auth, async (req, res) => {
  const EncodedRoomNo = req.params.EncodedRoomNo;
  console.log("enco", EncodedRoomNo);

  try {
    const Row = await Rooms.findOne({ where: { EncodedRoomNo } });
    if (!Row) {
      res.status(404).json(Row);
      return;
    }
    res.status(200).json(Row);
  } catch (e) {
    res.status(400).json(e);
  }
});

module.exports = RoomRoute;
