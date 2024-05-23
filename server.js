const express = require("express");
require("./models/index");

const Guests = require("./Routes/GuestsRoute");
const cors = require("cors");
const Admin_PanelRoute = require("./Routes/Admin_PanelRoute");
const GuestsRoute = require("./Routes/GuestsRoute");
const app = express();
const List_of_FoodsRoute = require("./Routes/List_of_FoodsRoute");
const OrderRoute = require("./Routes/OrderRoute");
const Room_OccupationRoute = require("./Routes/RoomOccupationRoute");
const AllPaymentRoute = require("./Routes/AllPaymentsRoute");
const RoomRoute = require("./Routes/AddRoomRoute");
const OrderPaymentRoute = require("./Routes/OrderPaymentRoute");
const auth = require("./auth");
const OrderedItemsRoute = require("./Routes/OrderedItemsRoute");
const md5 = require("md5");
const cookieParser = require("cookie-parser");
const { admin } = require("./firebase");
require("dotenv").config();
app.use(express.json());

const allowedOrigins = [process.env.GUEST_URL, process.env.ADMIN_URL];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
    },
    credentials: true,
  })
);

// app.use(
//   cors({
//     origin: "http://localhost:5174",
//     credentials: true,
//   })
// )

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  console.log(req.cookies);
  res.send("Server Started, This is Homepage");
});

app.use("/Admin_Panel", Admin_PanelRoute);
app.use("/All_Payments", AllPaymentRoute);
app.use("/Guests", GuestsRoute);
app.use("/List_of_Foods", List_of_FoodsRoute);
app.use("/Order_Payments", OrderPaymentRoute);
app.use("/Orders", OrderRoute);
app.use("/Room_Occupation_Transaction", Room_OccupationRoute);
app.use("/Rooms", RoomRoute);
app.use("/OrderItems", OrderedItemsRoute);

// testing for notification
app.post("/send-notification", async (req, res) => {
  console.log("/send-notification");
  const { token, title, body } = req.body;

  const message = {
    notification: {
      title: title,
      body: body,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(message);
    res.status(200).send(`Notification sent successfully: ${response}`);
  } catch (error) {
    res.status(500).send(`Error sending notification: ${error}`);
  }
});

app.listen(PORT, () => {
  console.log(`Backend Server is started on port ${PORT}`);
});
