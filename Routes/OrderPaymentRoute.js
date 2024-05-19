const express = require("express");
const {
  AddNewOrderPayment,
  FetchAllPaymentsOfOrder,
} = require("../controller/Order_PaymentController");

const OrderPaymentRoute = express.Router();

OrderPaymentRoute.post("/AddNewOrderPayment", (req, res) => {
  const { Order_PaymentId, PaymentId, OrderId } = req.body;
  AddNewOrderPayment(Order_PaymentId, PaymentId, OrderId)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

OrderPaymentRoute.get("FetchAllPaymentsOfOrder", (req, res) => {
  FetchAllPaymentsOfOrder()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = OrderPaymentRoute;
