require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});
const createTableQuery = `
    CREATE TABLE All_Payments (
        PaymentId INT AUTO_INCREMENT PRIMARY KEY,
        TransactionId VARCHAR(255),
        OrderId VARCHAR(255),
        RoomId VARCHAR(255),
        Status BOOLEAN,
        PaymentMode VARCHAR(255),
        OrderDetails VARCHAR(255)
    )
`;

// Execute the SQL query to create the table
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table All Payments:");
    return;
  } else console.log("Table All_Payments created successfully");

  connection.end();
});

// Don't forget to release the connection when you're done with it
