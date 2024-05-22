const { where } = require("sequelize");
let db = require("../models");

const Admin_Panel = db.Admin_Panel;

let AddUserAdmin = async (Username, MasterKey, token = null) => {
  try {
    let data = await Admin_Panel.create({ Username, MasterKey, Token: token });
    console.log("Data Inserted Succesfully ", data);
    return data;
  } catch (e) {
    return e;
  }
};

let VerifyAdmin = async (id, Password) => {
  try {
    let data = await Admin_Panel.findOne({
      where: {
        Username: id,
        MasterKey: Password,
      },
    });

    return data;
  } catch (e) {
    return e;
  }
};
let UpdateAdmin = async (Token, Username, MasterKey) => {
  try {
    let data = await Admin_Panel.update(
      { Token: Token },
      {
        where: {
          Username: Username,
          MasterKey,
        },
      }
    );

    return data;
  } catch (e) {
    return e;
  }
};

module.exports = { AddUserAdmin, VerifyAdmin, UpdateAdmin };
