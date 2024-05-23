const { where } = require("sequelize");
let db = require("../models");
const { FetchAllGuests } = require("./GuestsController");

const All_Payments = db.All_Payments;

const AddAllPayment = async (
  PaymentId,
  TransactionId,
  OrderId,
  RoomId,
  Status,
  PaymentMode,
  OrderDetails
) => {
  try {
    let data = await All_Payments.create({
      PaymentId,
      TransactionId,
      OrderId,
      RoomId,
      Status,
      PaymentMode,
    });
    console.log(data);
    console.log("Payment Inserted Succesfully");
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
  return;
};

const FetchAllPayments = async () => {
  try {
    const data = await All_Payments.findAll({
      order: [["createdAt", "DESC"]],
    });
    return data;
  } catch (error) {
    console.error("Error fetching payments:", error);
    return [];
  }
};

module.exports = { AddAllPayment, FetchAllPayments };
