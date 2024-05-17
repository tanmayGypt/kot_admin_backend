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
    CREATE TABLE IF NOT EXISTS Rooms (
        RoomId BIGINT PRIMARY KEY,
        EncodedRoomNo VARCHAR(255) UNIQUE,
        RoomNumber INT,
        isOccupied BOOLEAN,
        GuestId VARCHAR(255) NULL,
        MobileNumber BIGINT NULL
    )
`;

// Execute the SQL query to create the table
connection.query(createTableQuery, (err, results, fields) => {
  if (err) {
    console.error("Error creating table Rooms:");
    return;
  } else console.log('Table "Rooms" created successfully');

  // Close the connection
  connection.end();
});
