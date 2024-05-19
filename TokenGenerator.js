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
    return null;
  }
};
const adminTokenGenerator = (Username) => {
  try {
    const Guest = { EncodedRoomNo, MobileNumber };
    const token = jwt.sign(Username, `${process.env.SECRET_KEY}`, {
      expiresIn: "1d",
    });

    console.log(token);
    return token;
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = { adminTokenGenerator, guestTokenGenerator };
