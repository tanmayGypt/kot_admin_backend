require("dotenv").config();
const mysql = require("mysql2");
connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});
// SQL query to create the table
const createTableQuery = `
    CREATE TABLE Room_Occupation_Transaction (
        OccupationId VARCHAR(255) PRIMARY KEY UNIQUE DEFAULT (UUID()),
        RoomId VARCHAR(255),
        GuestId VARCHAR(255),
        Checked_In_Date VARCHAR(255),
        Checked_Out_Date VARCHAR(255),
        Customer_Name VARCHAR(255),
        IdentityType VARCHAR(255),
        IdentityNumber_Hashed VARCHAR(255),
        MobileNumber VARCHAR(255)
    )
`;

// Execute the create table query
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table Room_Occupation_Transaction:");
    return;
  }
  console.log("Table room transaction created successfully:");
});

// Don't forget to release the connection when you're done with it
connection.end();
