const express = require("express");
const { v4: uuidv4 } = require("uuid");
const {
  FetchAllOrders,
  UpdateOrder,
  AddNewOrder,
  FetchOrderById,
  FetchOrderByCustomerId,
} = require("../controller/OrdersController");
const { addOrderItem } = require("../controller/OrderedItemsController");
const { UUIDV4 } = require("sequelize");
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
route.get("/FetchOrderById/:OrderId", (req, res) => {
  const OrderId = req.params.OrderId;
  FetchOrderById(OrderId)
    .then((Items) => {
      res.status(200).send(Items);
    })
    .catch((err) => {
      res.status(404).json(err);
    });
});
route.get("/FetchOrderByCustomerId/:CustomerId", (req, res) => {
  const CustomerId = req.params.CustomerId;
  FetchOrderByCustomerId(CustomerId)
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

route.post("/AddNewOrder", async (req, res) => {
  const {
    CustomerId,
    isPaid,
    TotalAmount,
    OrderedItems,
    RoomId,
    CreatedAt,
    Payment_Mode,
    OrderStatus,
  } = req.body;

  const OrderId = uuidv4();
  try {
    await AddNewOrder(
      OrderId,
      CustomerId,
      isPaid,
      TotalAmount,
      RoomId,
      CreatedAt,
      Payment_Mode,
      OrderStatus
    );
    await OrderedItems.forEach((element) => {
      addOrderItem(
        OrderId,
        element.item_id,
        element.Item_Name,
        element.price,
        element.quantity
      );
    });
    res.status(200).json("Order Placed Succesfully");
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

module.exports = route;
