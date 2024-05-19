const jwt = require("jsonwebtoken");
require("dotenv").config();
function TokenGenerator(req, res, next) {
  const { isAdmin } = req.body;
  if (isAdmin) {
    const { Username, MasterKey } = req.body;
    const user = { Username };
    if (Username && MasterKey) {
      const token = jwt.sign(user, `${process.env.SECRET_KEY}`, {
        expiresIn: "1d",
      });
      res.locals.token = token;
      next();
    } else {
      res.status(400).json("Access Denied, Admin not Verified");
    }
  } else {
    const EncodedRoomNo = req.params.id;
    const { MobileNumber } = req.body;
    if (EncodedRoomNo && MobileNumber) {
      const Guest = { EncodedRoomNo, MobileNumber };
      const token = jwt.sign(Guest, `${process.env.SECRET_KEY}`, {
        expiresIn: "30m",
      });
      res.locals.token = token;
      next();
    } else {
      res.status(400).json("Unauthorized Access");
    }
  }
}

module.exports = TokenGenerator;
