const express = require("express")
const {
  FetchAllFoods,
  AddNewFood,
  UpdateFood,
  FetchFood,
  RemoveFood,
} = require("../controller/List_of_FoodsController")
const route = express.Router()

route.get("/FetchAllFood", (req, res) => {
  FetchAllFoods()
    .then((items) => {
      res.status(200).json(items)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

route.post("/AddNewFood", (req, res) => {
  const {
    FoodId,
    Description,
    isVeg,
    isAvailable,
    ImageUrl,
    FoodName,
    Price,
    Discount,
  } = req.body
  AddNewFood(
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
      res.status(200).json(item)
    })
    .catch((err) => {
      res.status.json(err)
    })
})

route.post("/UpdateFood", (req, res) => {
  const {
    FoodId,
    Description,
    isVeg,
    isAvailable,
    ImageUrl,
    FoodName,
    Price,
    Discount,
  } = req.body
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
      res.status(200).json(item)
    })
    .catch((err) => {
      res.status.json(err)
    })
})

route.get("GetFoodById/:FoodId", (req, res) => {
  const FoodId = req.params.FoodId
  FetchFood(FoodId)
    .then((item) => {
      res.status(200).json(item)
    })
    .catch((err) => {
      res.status.json(err)
    })
})

route.get("/RemoveFood/:FoodId", (req, res) => {
  const FoodId = req.params.FoodId
  RemoveFood(FoodId)
    .then((item) => {
      res.status(200).json(item)
    })
    .catch((err) => {
      res.status.json(err)
    })
})

module.exports = route
