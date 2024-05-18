const { where } = require("sequelize");
let db = require("../models");

const Order_Payments = db.Order_Payment;

let AddNewOrderPayment = async (Order_PaymentId, PaymentId, OrderId) => {
  try {
    let OrderItem = await Order_Payments.create({
      Order_PaymentId,
      PaymentId,
      OrderId,
    });
    if (OrderItem) {
      return OrderItem;
    }
    return;
  } catch (e) {
    return;
  }
};

let FetchAllPaymentsOfOrder = async () => {
  try {
    let response = await Order_Payments.findAll({});
    return response;
  } catch (e) {
    return;
  }
};

module.exports = { FetchAllPaymentsOfOrder, AddNewOrderPayment };
