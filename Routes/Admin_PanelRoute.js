const TokenGenerator = require("../TokenGenerator")
const auth = require("../auth")
const {
  AddUserAdmin,
  VerifyAdmin,
  UpdateAdmin,
} = require("../controller/Admin_PanelController")
const express = require("express")
const {
  subscribeToTopic,
} = require("../controller/SendNotificationControllers")

const route = express.Router()

route.post("/AddAdmin", async (req, res) => {
  const { Username, MasterKey } = req.body
  if (Username && MasterKey) {
    try {
      const result = await AddUserAdmin(Username, MasterKey)
      res.status(200).json(result)
    } catch (error) {
      res.status(400).json(error)
    }
  } else {
    res.status(404).json("Error while parsing")
  }
})

route.post("/VerifyAdmin", async (req, res) => {
  const { Username, MasterKey } = req.body

  if (Username && MasterKey) {
    try {
      VerifyAdmin(Username, MasterKey).then((result) => {
        if (result) {
          const token = TokenGenerator.adminTokenGenerator(Username)
          res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000, // for 1 day
          })
          // console.log(token);
          // console.log(result)
          res.status(200).json(result)
        } else {
          res.status(404).json(result)
        }
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({ Message: "User Not Found" })
    }
  } else {
    res.status(404).json({ Message: "Invalid credentials" })
  }
})

route.post("/subscribeToTopic", async (req, res) => {
  const { token } = req.body
  if (token) {
    try {
      await subscribeToTopic(token)
      res.status(200).json({ Message: "subscribed to topic" })
    } catch (error) {
      res.status(400).json({ Message: "Error subscribing" })
    }
  } else {
    res.status(404).json({ Message: "token not found" })
  }
})

module.exports = route
