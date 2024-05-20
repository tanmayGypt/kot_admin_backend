const express = require("express")
const Guests = require("./Routes/GuestsRoute")
const cors = require("cors")
const Admin_PanelRoute = require("./Routes/Admin_PanelRoute")
const GuestsRoute = require("./Routes/GuestsRoute")
require("./models/index")
const app = express()
const List_of_FoodsRoute = require("./Routes/List_of_FoodsRoute")
const OrderRoute = require("./Routes/OrderRoute")
const Room_OccupationRoute = require("./Routes/RoomOccupationRoute")
const AllPaymentRoute = require("./Routes/AllPaymentsRoute")
const RoomRoute = require("./Routes/AddRoomRoute")
const OrderPaymentRoute = require("./Routes/OrderPaymentRoute")
const auth = require("./auth")
const OrderedItemsRoute = require("./Routes/OrderedItemsRoute")
const md5 = require("md5")
const cookieParser = require("cookie-parser")
require("dotenv").config()
app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000

app.get("/", async (req, res) => {
  res.send("Server Started, This is Homepage")
})

<<<<<<< HEAD
app.use("/Admin_Panel", Admin_PanelRoute)
app.use("/All_Payments", auth, AllPaymentRoute)
app.use("/Guests", GuestsRoute)
app.use("/List_of_Foods", auth, List_of_FoodsRoute)
app.use("/Order_Payments", auth, OrderPaymentRoute)
app.use("/Orders", auth, OrderRoute)
app.use("/Room_Occupation_Transaction", auth, Room_OccupationRoute)
app.use("/Rooms", auth, RoomRoute)
app.use("OrderItems", auth, OrderedItemsRoute)

=======
app.use("/Admin_Panel", Admin_PanelRoute);
app.use("/All_Payments", auth, AllPaymentRoute);
app.use("/Guests", GuestsRoute);
app.use("/List_of_Foods", auth, List_of_FoodsRoute);
app.use("/Order_Payments", auth, OrderPaymentRoute);
app.use("/Orders", auth, OrderRoute);
app.use("/Room_Occupation_Transaction", auth, Room_OccupationRoute);
app.use("/Rooms", auth, RoomRoute);
app.use("OrderItems", auth, OrderedItemsRoute);
console.log(md5(100));
>>>>>>> 60ecd853347a991f7158f9db2fb0e60d4a073e81
app.listen(PORT, () => {
  console.log(`Backend Server is started on port ${PORT}`)
})
