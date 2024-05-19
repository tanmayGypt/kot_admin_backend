// middleware/jwtMiddleware.js
const jwt = require("jsonwebtoken");
const TokenGenerator = require("./TokenGenerator");
require("dotenv").config();

const auth = (req, res, next) => {
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("request", req.user);
    return res.send(error(401, "Authorization header is required"));
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    res.locals.token = token;

    next();
  } catch (error) {
    res.status(404).json("Invalid Token");
  }
};

module.exports = auth;
