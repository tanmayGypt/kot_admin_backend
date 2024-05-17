const mysql = require("mysql2");

const insertFood = async (
  FoodId,
  Description,
  isVeg,
  isAvailable,
  ImageUrl,
  FoodName,
  Price,
  Discount
) => {
  let connection;
  try {
    connection = mysql.createConnection({
      host: `${process.env.AmazonRDSendpoit}`, // e.g., your-instance.cwutfdpr6vdh.us-west-2.rds.amazonaws.com
      user: `${process.env.AmazonRDSuser}`,
      password: `${process.env.AmazonRDSpassword}`,
      port: `${process.env.AmazonRDSport}`, // Default MySQL port
      database: "Project_KOT",
    });
    const insertQuery = `
      INSERT INTO List_of_Foods (FoodId, Description, isVeg, isAvailable, ImageUrl, FoodName, Price, Discount)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [results] = await connection.execute(insertQuery, [
      FoodId,
      Description,
      isVeg,
      isAvailable,
      ImageUrl,
      FoodName,
      Price,
      Discount,
    ]);
    console.log("Food item inserted successfully:", results);
  } catch (err) {
    console.error("Error inserting food item:", err);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = insertFood;
