const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config();

const guestTokenGenerator = (EncodedRoomNo, MobileNumber) => {
  try {
    const Guest = { EncodedRoomNo, MobileNumber };
    const token = jwt.sign(Guest, `${process.env.SECRET_KEY}`, {
      expiresIn: "30m",
    });

    return token;
  } catch (e) {
    console.log(e);
  }
};
const adminTokenGenerator = (Username) => {
  try {
    const User = { Username };
    const token = jwt.sign(User, `${process.env.SECRET_KEY}`, {
      expiresIn: "1d",
    });

    return token;
  } catch (e) {
    console.log(e);
  }
};

function generateHash(value) {
  const stringValue = JSON.stringify(value);
  const fullHash = crypto
    .createHash("sha256")
    .update(stringValue)
    .digest("hex");
  return fullHash;
}
module.exports = { guestTokenGenerator, adminTokenGenerator, generateHash };
