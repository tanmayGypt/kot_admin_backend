const fcmNode = require("fcm-node")

async function sendNotification() {
  const serverKey =
    "SKxsIRtaRI6bfXVl:APA91bGdR_sOw5wumZS2T1OAD6qcjpnXoFGvStExM2pSyMQWRSqA0RGpYYZIOpDDeSlOzYmKFtuILykgU3YV0FK_xtdwGiSxwPjdsgGD8bRwzCbd61IpFX1Sro4mTBKUPkJtT5VhzfOD"

  const fcm = new fcmNode(serverKey)
  const registrationToken =
    "SKxsIRtaRI6bfXVl:APA91bGdR_sOw5wumZS2T1OAD6qcjpnXoFGvStExM2pSyMQWRSqA0RGpYYZIOpDDeSlOzYmKFtuILykgU3YV0FK_xtdwGiSxwPjdsgGD8bRwzCbd61IpFX1Sro4mTBKUPkJtT5VhzfOD"

  const message = {
    notification: {
      title: "OrderId",
      body: "RoomNumber",
    },
    to: registrationToken,
  }
  // Send a message to the device corresponding to the provided
  // registration token.
  //   getMessaging()
  //     .send(message)
  //     .then((response) => {
  //       // Response is a message ID string.
  //       console.log("Successfully sent message:", response)
  //     })
  //     .catch((error) => {
  //       console.log("Error sending message:", error)
  //     })

  fcm.send(message, function (err, res) {
    if (err) {
      console.error("error sending message: ", err)
    } else {
      console.log("successfully sent message: ", res)
    }
  })
}

module.exports = { sendNotification }
