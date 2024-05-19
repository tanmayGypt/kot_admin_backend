const express = require("express");
const {
  AddAllPayment,
  FetchAllPayments,
} = require("../controller/All_PaymentsController");
const AllPaymentRoute = express.Router();

AllPaymentRoute.post("/AddAllPayment", (req, res) => {
  const {
    PaymentId,
    TransactionId,
    OrderId,
    RoomId,
    Status,
    PaymentMode,
    OrderDetails,
  } = req.body;
  AddAllPayment(
    PaymentId,
    TransactionId,
    OrderId,
    RoomId,
    Status,
    PaymentMode,
    OrderDetails
  )
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

AllPaymentRoute.get("/FetchAllPayments", (req, res) => {
  FetchAllPayments.then((item) => {
    res.status(200).json(item);
  }).catch((err) => {
    res.status.json(err);
  });
});

module.exports = AllPaymentRoute;
