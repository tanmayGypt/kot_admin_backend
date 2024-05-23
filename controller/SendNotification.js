const { admin } = require("../firebase")
const { Admin_Panel } = require("../models")

async function sendNotification(orderId, roomNumber) {
  let token
  const data = await Admin_Panel.findOne({})
  // const Token = data.AdminPanel
  // console.log("token", data.Token)
  if (data) {
    token = data.Token
  } else {
    console.log(`No admin found with username: ${username}`)
    return null
  }
  console.log("/send-notification")

  const message = {
    notification: {
      title: orderId,
      body: `${roomNumber}`,
    },
    token,
  }

  try {
    const response = await admin.messaging().send(message)
    // res.status(200).send(`Notification sent successfully: ${response}`)
    console.log(`Notification sent successfully: ${response}`)
    return
  } catch (error) {
    // res.status(500).send(`Error sending notification: ${error}`)
    console.log(`Error sending notification: ${error}`)
  }
}

module.exports = { sendNotification }
