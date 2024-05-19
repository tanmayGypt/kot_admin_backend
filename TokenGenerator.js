const jwt = require("jsonwebtoken")
require("dotenv").config()

function TokenGenerator(req, res, next) {
  const { isAdmin, MobileNumber } = req.body
  if (isAdmin) {
    const { Username, MasterKey } = req.body
    const user = { Username }
    if (Username && MasterKey) {
      const token = jwt.sign(user, `${process.env.SECRET_KEY}`, {
        expiresIn: "1d",
      })
      res.cookie("MyToken", token, {
        maxAge: 30 * 60 * 1000, // Cookie expires in 30 minutes
      })
      res.locals.token = token
      next()
    } else {
      res.status(400).json("Access Denied, Admin not Verified")
    }
  } else {
    const EncodedRoomNo = req.params.id
    if (EncodedRoomNo && MobileNumber) {
      const Guest = { EncodedRoomNo, MobileNumber }
      const token = jwt.sign(Guest, `${process.env.SECRET_KEY}`, {
        expiresIn: "30m",
      })
      res.cookie("Your Token", token, {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      })
      res.locals.token = token
      next()
    } else {
      res.status(400).json("Unauthorized Access")
    }
  }
}

module.exports = TokenGenerator
