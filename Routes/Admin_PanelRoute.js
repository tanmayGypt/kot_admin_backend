const { adminTokenGenerator } = require("../TokenGenerator")
const auth = require("../auth")
const {
  AddUserAdmin,
  VerifyAdmin,
} = require("../controller/Admin_PanelController")
const express = require("express")

const route = express.Router()

route.post("/AddAdmin", auth, async (req, res) => {
  const { Username, MasterKey } = req.body
  if (Username && MasterKey) {
    try {
      const result = await AddUserAdmin(Username, MasterKey)
      res.status(200).json({ Message: "Successfully Created the Admin" })
    } catch (error) {
      res.status(400).json({ Message: "User Already Exists" })
    }
  } else {
    res.status(404).json({ Message: "Invalid credentials" })
  }
})

route.post("/VerifyAdmin", async (req, res) => {
  const { Username, MasterKey } = req.body
  if (Username && MasterKey) {
    try {
      const result = await VerifyAdmin(Username, MasterKey)
      if (result) {
        const token = adminTokenGenerator(Username)
        res.cookie("jwt", token, {
          maxAge: 30 * 60 * 1000,
        })
        res.status(200).json(result)
      } else {
        res.status(404).json({ Message: "Invalid credentials" })
      }
    } catch (error) {
      res.status(400).json({ Message: "User Not Found" })
    }
  } else {
    res.status(404).json({ Message: "Invalid credentials" })
  }
})

module.exports = route
