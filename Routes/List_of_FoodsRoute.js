const express = require("express");
const {
  FetchAllFoods,
  AddNewFood,
  UpdateFood,
  FetchFood,
  RemoveFood,
} = require("../controller/List_of_FoodsController");
const List_of_FoodsRoute = express.Router();

List_of_FoodsRoute.get("/FetchAllFood", (req, res) => {
  FetchAllFoods()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

List_of_FoodsRoute.post("/AddNewFood", (req, res) => {
  const {
    FoodId,
    Description,
    isVeg,
    isAvailable,
    ImageUrl,
    FoodName,
    Price,
    Discount,
    Catagory,
  } = req.body;
  AddNewFood(
    FoodId,
    Description,
    isVeg,
    isAvailable,
    ImageUrl,
    FoodName,
    Price,
    Discount,
    Catagory
  )
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

List_of_FoodsRoute.post("/UpdateFood", (req, res) => {
  const {
    FoodId,
    Description,
    isVeg,
    isAvailable,
    ImageUrl,
    FoodName,
    Price,
    Discount,
  } = req.body;
  UpdateFood(
    FoodId,
    Description,
    isVeg,
    isAvailable,
    ImageUrl,
    FoodName,
    Price,
    Discount
  )
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

List_of_FoodsRoute.get("/GetFoodById/:FoodId", (req, res) => {
  console.log("Running");
  const FoodId = req.params.FoodId;
  FetchFood(FoodId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

List_of_FoodsRoute.get("/RemoveFood/:FoodId", (req, res) => {
  const FoodId = req.params.FoodId;
  RemoveFood(FoodId)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = List_of_FoodsRoute;
