const express = require("express");
const insertRoom = require("./AmazonRDS/InsertionIntoTables/insertRooms");
const readRooms = require("./AmazonRDS/ReadingFromTables/ReadRoom");
require("./AmazonRDS/SQLTables/Admin_Panel");
// insertRoom(4843, "ED123", 101, false, "GUEST001", 1234567890);
const app = express();
const PORT = process.env.PORT || 3000;
// insertRoom("03", 123, false, "5064", 908372783);
readRooms();
app.get("/", (req, res) => {
  res.send("Server Started, This is Homepage");
});

app.listen(PORT, () => {
  console.log(`Backend Server is started on port ${PORT}`);
});
