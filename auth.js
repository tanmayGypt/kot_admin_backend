const jwt = require("jsonwebtoken")
require("dotenv").config()

const auth = (req, res, next) => {
  const cookies = req.cookies
  console.log("cookie", cookies)
  if (!cookies.jwt) {
    console.log("token expired")
    return res.status(401).json({ error: "token in cookie is required" })
  }

  const token = cookies.jwt

  try {
    const decoded = jwt.verify(token, `${process.env.SECRET_KEY}`)
    res.locals.token = token
    res.locals.decoded = decoded // Optionally store the decoded token in res.locals
    next()
  } catch (e) {
    res.status(404).json("Invalid Token")
  }
}

module.exports = auth
