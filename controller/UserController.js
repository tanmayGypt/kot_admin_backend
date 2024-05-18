const { where } = require("sequelize");
let db = require("../models"); // Assuming this imports your database models
const User = require("../models/User");

const Users = db.User; // Assuming this retrieves the User model from your database

let addUser = async () => {
  try {
    let data = await Users.findAll({
      where: {},
    });

    console.log("User created successfully:", data[1].dataValues);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

module.exports = { addUser };
