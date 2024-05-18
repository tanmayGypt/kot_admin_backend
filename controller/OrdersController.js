const { where } = require("sequelize");
let db = require("../models");

const Orders = db.Orders;

let AddNewOrder = async (
  OrderId,
  CustomerId,
  isPaid,
  TotalAmount,
  OrderedItems,
  RoomId,
  CreatedAt,
  Payment_Mode,
  OrderStatus
) => {
  try {
    let result = await Orders.create({
      OrderId,
      CustomerId,
      isPaid,
      OrderedItems,
      TotalAmount,
      RoomId,
      CreatedAt,
      Payment_Mode,
      OrderStatus,
    });
    if (result) return result;
    return;
  } catch (e) {
    return;
  }
};

let UpdateOrder = async (OrderId, isPaid, Payment_Mode, OrderStatus) => {
  try {
    let result = await Orders.update(
      {
        OrderStatus,
        Payment_Mode,
        isPaid,
      },
      {
        where: {
          OrderId: OrderId,
        },
      }
    );

    return result;
  } catch (e) {
    return;
  }
};

let FetchAllOrders = async () => {
  try {
    let response = await Orders.findAll({});

    return response;
  } catch (e) {
    return;
  }
};

module.exports = { UpdateOrder, AddNewOrder, FetchAllOrders };
