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
  Discount
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
  Discount
) => {
  try {
    let data = await List_of_Foods.Update(
      { Description, isVeg, isAvailable, ImageUrl, FoodName, Price, Discount },
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
    let data = await List_of_Foods.findAll({});
    return data;
  } catch (e) {
    return;
  }
};

let FetchFood = async (FoodId) => {
  try {
    let Food = await List_of_Foods.findOne({
      where: {
        FoodId: FoodId,
      },
    });

    return Food;
  } catch (e) {
    return e;
  }
};

let RemoveFood = async (FoodId) => {
  try {
    if (FoodId) {
      let result = await destroy({ FoodId });
      return result;
    }
  } catch (e) {
    return e;
  }
};

module.exports = { AddNewFood, UpdateFood, RemoveFood, FetchAllFoods };
