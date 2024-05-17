require("dotenv").config();
const mysql = require("mysql2");
connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});

// Define the SQL query to create the table
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Order_Payments (
        Order_PaymentId VARCHAR(255) PRIMARY KEY UNIQUE,
        PaymentId VARCHAR(255),
        OrderId VARCHAR(255)
    )
`;

// Execute the SQL query to create the table
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table Order_Payments:");
    return;
  }
  console.log("Order payments Table created successfully");
});

// Don't forget to release the connection when you're done with it
connection.end();
