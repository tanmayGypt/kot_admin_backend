<<<<<<< HEAD
const jwt = require("jsonwebtoken")
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
    const token = jwt.sign({ Username }, `${process.env.SECRET_KEY}`, {
      expiresIn: "1d",
    })

    return token
  } catch (e) {
    console.log(e)
=======
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
>>>>>>> 60ecd853347a991f7158f9db2fb0e60d4a073e81
  }
};
const adminTokenGenerator = (Username) => {
  try {
    const User = { Username };
    const token = jwt.sign(User, `${process.env.SECRET_KEY}`, {
      expiresIn: "1d",
    });

<<<<<<< HEAD
module.exports = { guestTokenGenerator, adminTokenGenerator }
=======
    console.log("Token Generated " + token);
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = { adminTokenGenerator, guestTokenGenerator };
>>>>>>> 60ecd853347a991f7158f9db2fb0e60d4a073e81
