const mysql = require("mysql2/promise");

const insertOrderPayment = async (Order_PaymentId, PaymentId, OrderId) => {
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
      INSERT INTO Order_Payments (Order_PaymentId, PaymentId, OrderId)
      VALUES (?, ?, ?)
    `;

    const [results] = await connection.execute(insertQuery, [
      Order_PaymentId,
      PaymentId,
      OrderId,
    ]);
    console.log("Order payment inserted successfully:", results);
  } catch (err) {
    console.error("Error inserting order payment:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = insertOrderPayment;
