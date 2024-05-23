const express = require("express");
const { v4: uuidv4 } = require("uuid");

const {
  AddAllPayment,
  FetchAllPayments,
} = require("../controller/All_PaymentsController");
const AllPaymentRoute = express.Router();

AllPaymentRoute.post("/AddAllPayment", (req, res) => {
  const { OrderId, RoomId, PaymentStatus, PaymentMode } = req.body;
  PaymentId = uuidv4();
  TransactionId = uuidv4();
  AddAllPayment(
    PaymentId,
    TransactionId,
    OrderId,
    RoomId,
    PaymentStatus,
    PaymentMode
  )
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

AllPaymentRoute.get("/FetchAllPayments", async (req, res) => {
  try {
    const items = await FetchAllPayments();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = AllPaymentRoute;

module.exports = AllPaymentRoute;
