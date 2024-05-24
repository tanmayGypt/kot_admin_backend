const { admin } = require("../firebase")
const { Admin_Panel } = require("../models")

async function sendNotification(orderId, roomNumber) {
  const topic = "KOT_Orders"
  console.log("/send-notification")

  const message = {
    notification: {
      title: orderId,
      body: `${roomNumber}`,
    },
    topic: topic,
  }

  const response = admin
    .messaging()
    .send(message)
    .then((response) => {
      console.log("Successfully sent message:", response)
    })
    .catch((error) => {
      console.log("Error sending message:", error)
    })
}

async function subscribeToTopic(token) {
  const response = admin
    .messaging()
    .send(message)
    .subscribeToTopic(token, "KOT_Orders")
    .then((response) => {
      console.log("Successfully subscribed to topic:", response)
      return
    })
    .catch((error) => {
      console.log("Error subscribing to topic:", error)
    })
}

module.exports = { sendNotification, subscribeToTopic }
