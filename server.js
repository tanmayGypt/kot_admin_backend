const express = require("express");
const {
  FetchAllOrders,
  AddNewOrder,
  UpdateOrder,
} = require("./controller/OrdersController");
const {
  AddGuest,
  FetchAllGuests,
  VerifyGuest,
} = require("./controller/GuestsController");
const {
  FetchAllRooms,
  AddnewRoom,
  UpdateRoom,
} = require("./controller/RoomsContoller");
const {
  UpdateFood,
  AddNewFood,
  FetchAllFoods,
  FetchFood,
  RemoveFood,
} = require("./controller/List_of_FoodsController");

require("./models/index");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("Server Started, This is Homepage");
});

RemoveFood("3367").then((item) => {
  console.log(item);
});

app.listen(PORT, () => {
  console.log(`Backend Server is started on port ${PORT}`);
});
