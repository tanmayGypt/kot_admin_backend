const mysql = require("mysql2");

const insertRoom = async (
  RoomId,
  EncodedRoomNo,
  RoomNumber,
  isOccupied,
  GuestId,
  MobileNumber
) => {
  let connection;
  try {
    connection = mysql.createConnection({
      host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
      user: `${process.env.AmazonRDSuser}`,
      password: `${process.env.AmazonRDSpassword}`,
      port: `${process.env.AmazonRDSport}`, // Default MySQL port
      database: "Project_KOT",
    });

    const insertQuery = `
      INSERT INTO Rooms (RoomId ,EncodedRoomNo, RoomNumber, isOccupied, GuestId, MobileNumber)
      VALUES (?,?, ?, ?, ?, ?)
    `;

    const [results] = await connection.execute(insertQuery, [
      RoomId,
      EncodedRoomNo,
      RoomNumber,
      isOccupied,
      GuestId,
      MobileNumber,
    ]);
    console.log("Room inserted successfully:", results);
  } catch (err) {
    console.error("Error inserting room:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = insertRoom;
