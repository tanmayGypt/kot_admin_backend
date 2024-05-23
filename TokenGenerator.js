const jwt = require("jsonwebtoken")
const crypto = require("crypto")
require("dotenv").config()

const guestTokenGenerator = (EncodedRoomNo, MobileNumber) => {
  try {
    const Guest = { EncodedRoomNo, MobileNumber }
    const token = jwt.sign(Guest, `${process.env.SECRET_KEY}`, {
      expiresIn: "30m",
    })

    return token
  } catch (e) {
    console.log(e)
  }
}
const adminTokenGenerator = (Username) => {
  try {
    const User = { Username }
    const token = jwt.sign(User, `${process.env.SECRET_KEY}`, {
      expiresIn: "1d",
    })

    return token
  } catch (e) {
    console.log(e)
  }
}

function generateHash(value) {
  const fullHash = crypto.createHash("sha256").update(`value`).digest("hex")
  return fullHash.slice(0, 32)
}

module.exports = { guestTokenGenerator, adminTokenGenerator, generateHash }
