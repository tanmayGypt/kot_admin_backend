const jwt = require("jsonwebtoken");
require("dotenv").config();
const guestTokenGenerator = (EncodedRoomNo, MobileNumber) => {
  try {
    const Guest = { EncodedRoomNo, MobileNumber };
    const token = jwt.sign(Guest, `${process.env.SECRET_KEY}`, {
      expiresIn: "30m",
    });

    console.log(token);
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

    console.log("Token Generated " + token);
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = { adminTokenGenerator, guestTokenGenerator };
