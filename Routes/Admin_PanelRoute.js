const TokenGenerator = require("../TokenGenerator");
const auth = require("../auth");
const {
  AddUserAdmin,
  VerifyAdmin,
  UpdateAdmin,
} = require("../controller/Admin_PanelController");
const express = require("express");

const route = express.Router();

route.post("/AddAdmin", async (req, res) => {
  const { Username, MasterKey, Token } = req.body;
  if (Username && MasterKey) {
    try {
      const result = await AddUserAdmin(Username, MasterKey, Token);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    res.status(404).json("Error while parsing");
  }
});

route.post("/UpdateAdmin/:Username", auth, async (req, res) => {
  const Username = req.params.Username;
  const { MasterKey, Token } = req.body;
  if (Username && MasterKey) {
    try {
      const result = await UpdateAdmin(Token, Username, MasterKey);
      res.status(200).json({ Message: "Successfully Updated the Admin" });
    } catch (error) {
      res.status(400).json({ Message: "User Already Exists" });
    }
  } else {
    res.status(404).json({ Message: "Invalid credentials" });
  }
});

route.post("/VerifyAdmin", async (req, res) => {
  const { Username, MasterKey } = req.body;

  if (Username && MasterKey) {
    try {
      VerifyAdmin(Username, MasterKey).then((result) => {
        if (result) {
          const token = TokenGenerator.adminTokenGenerator(Username);
          res.cookie("jwt", token, {
            maxAge: 24 * 60 * 60 * 1000, // for 1 day
          });
          // console.log(token);
          console.log(result);
          res.status(200).json(result);
        } else {
          res.status(404).json(result);
        }
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ Message: "User Not Found" });
    }
  } else {
    res.status(404).json({ Message: "Invalid credentials" });
  }
});

module.exports = route;
