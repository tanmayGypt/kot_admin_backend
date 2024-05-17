const mysql = require("mysql2");
require("dotenv").config();

connection = mysql.createConnection({
  host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
  user: `${process.env.AmazonRDSuser}`,
  password: `${process.env.AmazonRDSpassword}`,
  port: `${process.env.AmazonRDSport}`, // Default MySQL port
  database: "Project_KOT",
});
module.exports = connection;
