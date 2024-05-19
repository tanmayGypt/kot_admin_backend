const express = require("express");
const {
  FetchAllOrders,
  UpdateOrder,
  AddNewOrder,
} = require("../controller/OrdersController");
const route = express.Router();

route.get("/FetchAllOrders", (req, res) => {
  FetchAllOrders()
    .then((Items) => {
      res.status(200).send(Items);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

route.post("/UpdateOrder/:OrderId", (req, res) => {
  const OrderId = req.params.OrderId;
  const { isPaid, Payment_Mode, OrderStatus } = req.body;
  UpdateOrder(OrderId, isPaid, Payment_Mode, OrderStatus)
    .then((Items) => {
      res.status(200).send(Items);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

route.post("/AddNewOrder", (req, res) => {
  const {
    OrderId,
    CustomerId,
    isPaid,
    TotalAmount,
    OrderedItems,
    RoomId,
    CreatedAt,
    Payment_Mode,
    OrderStatus,
  } = req.body;

  AddNewOrder(
    OrderId,
    CustomerId,
    isPaid,
    TotalAmount,
    OrderedItems,
    RoomId,
    CreatedAt,
    Payment_Mode,
    OrderStatus
  )
    .then((Items) => {
      res.status(200).send(Items);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});

module.exports = route;
