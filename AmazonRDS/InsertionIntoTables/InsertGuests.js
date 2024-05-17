require("dotenv").config();
const mysql = require("mysql2");

const insertPayment = async (
  TransactionId,
  OrderId,
  RoomId,
  Status,
  PaymentMode,
  OrderDetails
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
        INSERT INTO All_Payments (TransactionId, OrderId, RoomId, Status, PaymentMode, OrderDetails)
        VALUES (?,?, ?, ?, ?, ?)
      `;

    const [results] = await connection.execute(insertQuery, [
      TransactionId,
      OrderId,
      RoomId,
      Status,
      PaymentMode,
      OrderDetails,
    ]);
    console.log("Payment inserted successfully:", results);
  } catch (err) {
    console.error("Error inserting payment:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = insertPayment;
