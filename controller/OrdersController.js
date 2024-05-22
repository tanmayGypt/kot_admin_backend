const { where } = require("sequelize")
const db = require("../models")
const { FetchRoomById } = require("./RoomsContoller")

const Order = db.Orders

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
    let Room = FetchRoomById(RoomId)
    if (Room) {
      let result = await Order.create({
        OrderId,
        CustomerId,
        isPaid,
        TotalAmount,
        RoomId: Room.RoomNumber,
        CreatedAt,
        Payment_Mode,
        OrderStatus,
      })
      console.log("Order created successfully:", result)
      return result
    } else {
      return null
    }
  } catch (error) {
    console.error("Error creating order:", error)
    throw error // Ensure the error is propagated
  }
}

const UpdateOrder = async (OrderId, Status, Payment_Mode, OrderStatus) => {
  try {
    let result = await Order.update(
      {
        isPaid: Status,
        Payment_Mode,
        OrderStatus,
      },
      {
        where: { OrderId },
      }
    )

    if (result[0] === 0) {
      console.log(`No order found with OrderId: ${OrderId}`)
      return null
    }

    console.log("Order updated successfully:", result)
    return result
  } catch (error) {
    console.error("Error updating order:", error)
    throw error // Ensure the error is propagated
  }
}

const FetchAllOrders = async () => {
  try {
    let response = await Order.findAll({})
    console.log("Orders fetched successfully:", response)
    return response
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error // Ensure the error is propagated
  }
}
const FetchOrderById = async (OrderId) => {
  try {
    let response = await Order.findOne({
      where: {
        OrderId,
      },
    })
    console.log("Order fetched successfully:", response)
    return response
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error // Ensure the error is propagated
  }
}

const FetchUnbilledOrder = async (CustomerId) => {
  try {
    let response = await Order.findAll({
      where: {
        CustomerId,
        isPaid: false,
      },
    })

    console.log("Order fetched successfully:", response)
    return response
  } catch (error) {
    console.error("Error fetching orders:", error)
    throw error // Ensure the error is propagated
  }
}
module.exports = {
  AddNewOrder,
  UpdateOrder,
  FetchAllOrders,
  FetchOrderById,
  FetchUnbilledOrder,
}
