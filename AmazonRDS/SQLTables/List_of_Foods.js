require("dotenv").config();
const mysql = require("mysql2");
connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});
// SQL query to create the Guests table
const createTableQuery = `
    CREATE TABLE List_of_Foods (
        FoodId VARCHAR(255) PRIMARY KEY,
        Description VARCHAR(255),
        isVeg BOOLEAN,
        isAvailable BOOLEAN,
        ImageUrl VARCHAR(255),
        FoodName VARCHAR(255),
        Price INT,
        Discount INT
    )
`;

// Execute the create table query
connection.query(createTableQuery, (error, results, fields) => {
  if (error) {
    console.error("Error creating table List_of_Foods:");
    return;
  }
  console.log("Table List of foods created successfully:");
});

// Don't forget to release the connection when you're done with it
connection.end();
