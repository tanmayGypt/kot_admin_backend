const express = require("express");
const {
  fetchAllOrderItems,
  fetchOrderItemsById,
  fetchOrderItemsByOrderId,
} = require("../controller/OrderedItemsController");
const { OrderItem } = require("../models");

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

OrderedItemsRoute.get("/GetOrderItemsById/:OrderId", (req, res) => {
  const order_id = req.params.OrderId;
  fetchOrderItemsByOrderId(order_id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = OrderedItemsRoute;
