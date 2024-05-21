const TokenGenerator = require("../TokenGenerator");
const auth = require("../auth");
const {
  AddUserAdmin,
  VerifyAdmin,
} = require("../controller/Admin_PanelController");
const express = require("express");

const route = express.Router();

route.post("/AddAdmin", async (req, res) => {
  const { Username, MasterKey } = req.body;
  if (Username && MasterKey) {
    try {
      const result = await AddUserAdmin(Username, MasterKey);
      res.status(200).json({ Message: "Successfully Created the Admin" });
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
      const result = await VerifyAdmin(Username, MasterKey);
      if (result) {
        const token = TokenGenerator.adminTokenGenerator(Username);
        res.cookie("jwt", token, {
<<<<<<< HEAD
          maxAge: 24 * 60 * 60 * 1000, // 1 day
        })
        res.status(200).json(result)
=======
          maxAge: 30 * 60 * 1000,
        });
        res.status(200).json(result);
>>>>>>> 9cae4b13ff2dcca8e30463e440b121b691b14680
      } else {
        res.status(404).json({ Message: "Invalid credentials" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ Message: "User Not Found" });
    }
  } else {
    res.status(404).json({ Message: "Invalid credentials" });
  }
});

module.exports = route;
