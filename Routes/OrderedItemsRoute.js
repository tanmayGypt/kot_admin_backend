const express = require("express");
const {
  fetchAllOrderItems,
  fetchOrderItemsById,
} = require("../controller/OrderedItemsController");

const OrderedItemsRoute = express.Router();

OrderedItemsRoute.get("/addOrderItem", (req, res) => {
  fetchAllOrderItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

OrderedItemsRoute.get("/GetOrderItemsById/:order_id", (req, res) => {
  const order_id = req.params.order_id;
  fetchOrderItemsById(order_id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = OrderedItemsRoute;
