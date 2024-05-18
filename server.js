const express = require("express");
const { FetchAllOrders } = require("./controller/OrdersController");
const { AddGuest, FetchAllGuests } = require("./controller/GuestsController");
const { FetchAllRooms } = require("./controller/RoomsContoller");
const { VerifyAdmin } = require("./controller/Admin_PanelController");

// const UpdateOrder = require("./AmazonRDS/UpdatingIntoTables/UpdateOrders");
require("./models/index");
const app = express();

const PORT = process.env.PORT || 3000;
// UpdateOrder();
app.get("/", async (req, res) => {
  res.send("Server Started, This is Homepage");
});

// FetchAllOrders().then((result) => {
//   console.log(result);
// });
// AddGuest(
//   1,
//   2,
//   "Tanmay",
//   "09-06-2002",
//   "09-06-2002",
//   "Passport",
//   "123XYZ",
//   8076676966
// ).then((result) => {
//   console.log(result);
// });

// console.log(FetchAllRooms());
// FetchAllRooms().then((item) => console.log(item));
// FetchAllGuests().then((item) => {
//   console.log(item);
// });
app.listen(PORT, () => {
  console.log(`Backend Server is started on port ${PORT}`);
});
