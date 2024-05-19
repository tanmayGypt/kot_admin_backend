const db = require("../models");

const Order = db.Orders;

const AddNewOrder = async (
  OrderId,
  CustomerId,
  isPaid,
  TotalAmount,
  RoomId,
  CreatedAt,
  Payment_Mode,
  OrderStatus
) => {
  try {
    // Convert OrderedItems to a JSON string
    let OrderedItemsStr = JSON.stringify(OrderedItems);

    let result = await Order.create({
      OrderId,
      CustomerId,
      isPaid,
      TotalAmount,
      RoomId,
      CreatedAt,
      Payment_Mode,
      OrderStatus,
    });
    console.log("Order created successfully:", result);
    return result;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error; // Ensure the error is propagated
  }
};

const UpdateOrder = async (OrderId, isPaid, Payment_Mode, OrderStatus) => {
  try {
    let result = await Order.update(
      {
        isPaid,
        Payment_Mode,
        OrderStatus,
      },
      {
        where: { OrderId },
      }
    );

    if (result[0] === 0) {
      console.log(`No order found with OrderId: ${OrderId}`);
      return null;
    }

    console.log("Order updated successfully:", result);
    return result;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error; // Ensure the error is propagated
  }
};

const FetchAllOrders = async () => {
  try {
    let response = await Order.findAll({});
    console.log("Orders fetched successfully:", response);
    return response;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error; // Ensure the error is propagated
  }
};

module.exports = { AddNewOrder, UpdateOrder, FetchAllOrders };
