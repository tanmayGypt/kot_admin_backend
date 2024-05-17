const mysql = require("mysql2");
require("dotenv").config();

let connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});

// const connection = require("./AmazonRDS/SQLTables/Admin_Panel");
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS Admin_Panel (
        Username VARCHAR(255) PRIMARY KEY,
        MasterKey VARCHAR(255)
    )
`;

// Execute the SQL query to create the table
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table:");
    return;
  } else console.log(results);
});

// Don't forget to release the connection when you're done with it
connection.end();

require("./Guests");
require("./List_of_Foods");
require("./Order_Payments");
require("./Orders");
require("./Room_Occupation_Transaction");
require("./Rooms");
