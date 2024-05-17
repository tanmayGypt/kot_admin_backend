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
    CREATE TABLE IF NOT EXISTS Guests (
        RoomNumber INT,
        RoomId VARCHAR(255) PRIMARY KEY,
        Customer_Name VARCHAR(255),
        Checked_In_Date VARCHAR(255),
        Checked_Out_Date VARCHAR(255),
        IdentityType VARCHAR(255),
        IdentityNumber_Hashed VARCHAR(255),
        MobileNumber VARCHAR(20)
    )
`;

// Execute the create table query
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table Guests:");
    return;
  }
  console.log("Table Guests created successfully");
});

// Don't forget to release the connection when you're done with it
connection.end();
