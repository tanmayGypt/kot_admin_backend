require("dotenv").config();
const mysql = require("mysql2");
connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Orders (
        OrderId VARCHAR(255) PRIMARY KEY UNIQUE,
        CustomerId VARCHAR(255),
        isPaid BOOLEAN,
        TotalAmount NUMERIC,
        OrderedItems VARCHAR(255), /* Changed to VARCHAR(255) to store JSON array */
        RoomId BIGINT,
        CreatedAt VARCHAR(255) NULL,
        Payment_Mode VARCHAR(255) NULL,
        OrderStatus VARCHAR(255) NULL
    )
`;

// Execute the SQL query to create the table
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table Orders:");
    return;
  }
  console.log("Table Orders created successfully");
});

// Don't forget to release the connection when you're done with it
connection.end();
