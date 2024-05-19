const express = require("express");
const Guests = require("./Routes/GuestsRoute");
const cors = require("cors");
const Admin_PanelRoute = require("./Routes/Admin_PanelRoute");
const GuestsRoute = require("./Routes/GuestsRoute");
require("./models/index");
const app = express();
const List_of_FoodsRoute = require("./Routes/List_of_FoodsRoute");
const OrderRoute = require("./Routes/OrderRoute");
require("dotenv").config();
app.use(express.json());

app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("Server Started, This is Homepage");
});

app.use("/Admin_Panel", Admin_PanelRoute);
// app.use("/All_Payments");
app.use("/Guests", GuestsRoute);
app.use("/List_of_Foods", List_of_FoodsRoute);
// app.use("/Order_Payments");
app.use("/Orders", OrderRoute);
// app.use("/Room_Occupation_Transaction");
// app.use("/Rooms");

app.listen(PORT, () => {
  console.log(`Backend Server is started on port ${PORT}`);
});
