const mysql = require("mysql2");

const insertOccupation = async (
  OccupationId,
  RoomId,
  GuestId,
  Checked_In_Date,
  Checked_Out_Date,
  Customer_Name,
  IdentityType,
  IdentityNumber_Hashed,
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
      INSERT INTO Occupations (OccupationId, RoomId, GuestId, Checked_In_Date, Checked_Out_Date, Customer_Name, IdentityType, IdentityNumber_Hashed, MobileNumber)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [results] = await connection.execute(insertQuery, [
      OccupationId,
      RoomId,
      GuestId,
      Checked_In_Date,
      Checked_Out_Date,
      Customer_Name,
      IdentityType,
      IdentityNumber_Hashed,
      MobileNumber,
    ]);
    console.log("Occupation inserted successfully:", results);
  } catch (err) {
    console.error("Error inserting occupation:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = insertOccupation;
