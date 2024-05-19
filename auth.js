const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  if (
    !req.headers ||
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("request", req.user);
    return res.status(401).json({ error: "Authorization header is required" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    res.locals.token = token;
    res.locals.decoded = decoded; // Optionally store the decoded token in res.locals
    next();
  } catch (e) {
    res.status(404).json("Invalid Token");
  }
};

module.exports = auth;
