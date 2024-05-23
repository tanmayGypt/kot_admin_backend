const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "Project_KOT",
  process.env.AmazonRDSuser,
  process.env.AmazonRDSpassword,
  {
    host: process.env.AmazonRDSendpoint,
    port: process.env.AmazonRDSport,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Sequelize");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.User = require("./User")(sequelize, DataTypes);
db.Admin_Panel = require("./Admin_Panel")(sequelize, DataTypes);
db.All_Payments = require("./All_Payments")(sequelize, DataTypes);
db.Guests = require("./Guests")(sequelize, DataTypes);
db.List_of_Foods = require("./List_of_Foods")(sequelize, DataTypes);
db.Order_Payment = require("./Order_Payment")(sequelize, DataTypes);
db.Orders = require("./Orders")(sequelize, DataTypes);
db.Room_Occupation = require("./Room_Occupation")(sequelize, DataTypes);
db.Rooms = require("./Rooms")(sequelize, DataTypes);
db.OrderItem = require("./OrderedItems")(sequelize, DataTypes);

db.sequelize
  .sync()
  .then(() => {
    console.log("Sync Success");
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });

module.exports = db;
