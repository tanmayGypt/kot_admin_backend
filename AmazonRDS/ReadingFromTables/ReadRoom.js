const mysql = require("mysql2/promise");
require("dotenv").config();

const readRooms = async () => {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.AmazonRDSendpoint,
      user: process.env.AmazonRDSuser,
      password: process.env.AmazonRDSpassword,
      port: process.env.AmazonRDSport,
      database: "Project_KOT",
    });

    const [rows] = await connection.execute("SELECT * FROM Rooms");
    return rows;
  } catch (err) {
    console.error("Error retrieving rooms:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = readRooms;
