const { where } = require("sequelize");
let db = require("../models");

const List_of_Foods = db.List_of_Foods;

let AddNewFood = async (
  FoodId,
  Description,
  isVeg,
  isAvailable,
  ImageUrl,
  FoodName,
  Price,
  Discount,
  Category
) => {
  try {
    let data = await List_of_Foods.create({
      FoodId,
      Description,
      isVeg,
      isAvailable,
      ImageUrl,
      FoodName,
      Price,
      Discount,
      Category,
    });
    return data;
  } catch (e) {
    return e;
  }
};

let UpdateFood = async (
  FoodId,
  Description,
  isVeg,
  isAvailable,
  ImageUrl,
  FoodName,
  Price,
  Discount,
  Category
) => {
  try {
    let data = await List_of_Foods.update(
      {
        Description,
        isVeg,
        isAvailable,
        ImageUrl,
        FoodName,
        Price,
        Discount,
        Category,
      },
      {
        where: {
          FoodId: FoodId,
        },
      }
    );
    return data;
  } catch (e) {
    return e;
  }
};

let FetchAllFoods = async () => {
  try {
    let data = await List_of_Foods.findAll({
      order: [
        ["createdAt", "DESC"], // Primary sorting by createdAt in descending order
        ["updatedAt", "ASC"], // Secondary sorting by updatedAt in ascending order
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};

let FetchFood = async (FoodId) => {
  if (!FoodId) {
    throw new Error("FoodId is required");
  }
  try {
    let Food = await List_of_Foods.findOne({
      where: {
        FoodId,
      },
    });
    console.log(Food);
    return Food;
  } catch (e) {
    return e;
  }
};

let RemoveFood = async (FoodId) => {
  try {
    // Check if FoodId is provided
    if (!FoodId) {
      throw new Error("FoodId is required");
    }

    // Attempt to delete the food item
    let result = await List_of_Foods.destroy({
      where: {
        FoodId: FoodId,
      },
    });

    // Check if the food item was deleted
    if (result === 0) {
      throw new Error(`Food with FoodId ${FoodId} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Food with FoodId ${FoodId} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing food with FoodId ${FoodId}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewFood,
  UpdateFood,
  RemoveFood,
  FetchAllFoods,
  FetchFood,
};
