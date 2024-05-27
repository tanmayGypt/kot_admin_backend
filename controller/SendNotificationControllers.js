const { admin } = require("../firebase")
const { Admin_Panel } = require("../models")

const topic = "KOT_Orders"

async function sendNotification(orderId, roomNumber) {
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
    .subscribeToTopic(token, topic)
    .then((response) => {
      console.log("Successfully subscribed to topic:", response)
      return
    })
    .catch((error) => {
      console.log("Error subscribing to topic:", error)
    })
}
async function unsubscribeToTopic(token) {
  admin
    .messaging()
    .unsubscribeFromTopic(token, topic)
    .then((response) => {
      console.log("Successfully unsubscribed from topic:", response)
    })
    .catch((error) => {
      console.log("Error unsubscribing from topic:", error)
    })
}

module.exports = { sendNotification, subscribeToTopic, unsubscribeToTopic }
