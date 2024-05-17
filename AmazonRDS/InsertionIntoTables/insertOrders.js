const mysql = require("mysql2/promise");

const insertOrder = async (
  OrderId,
  CustomerId,
  isPaid,
  TotalAmount,
  OrderedItems,
  RoomId,
  CreatedAt,
  Payment_Mode,
  OrderStatus
) => {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.AmazonRDSendpoint,
      user: process.env.AmazonRDSuser,
      password: process.env.AmazonRDSpassword,
      port: process.env.AmazonRDSport,
      database: "Project_KOT",
    });

    const insertQuery = `
      INSERT INTO Orders (OrderId, CustomerId, isPaid, TotalAmount, OrderedItems, RoomId, CreatedAt, Payment_Mode, OrderStatus)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [results] = await connection.execute(insertQuery, [
      OrderId,
      CustomerId,
      isPaid,
      TotalAmount,
      OrderedItems,
      RoomId,
      CreatedAt,
      Payment_Mode,
      OrderStatus,
    ]);
    console.log("Order inserted successfully:", results);
  } catch (err) {
    console.error("Error inserting order:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = insertOrder;
