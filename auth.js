// middleware/jwtMiddleware.js
const jwt = require("jsonwebtoken");
const TokenGenerator = require("./TokenGenerator");
require("dotenv").config();
const secretKey = "your_secret_key"; // Replace with your actual secret key

const auth = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) {
    TokenGenerator(req, res, next);
  } else {
    try {
      // Verify the token
      const decoded = jwt.verify(token, secretKey);
      // Attach the decoded token to the request object
      res.locals.token = token;

      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      TokenGenerator(req, res, next);
    }
  }
};

module.exports = auth;
