const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const DbConnection = require("./Utils/Db.js");
const ContactRoutes = require("./Routes/ContactRoutes.js");
const cookieParser = require("cookie-parser");
 
dotenv.config();
const app = express();

 
app.use(cors());
app.use(cookieParser());
app.use(express.json());

DbConnection();

const Port = process.env.PORT || 3000;

app.use("/api/contact", ContactRoutes); 
app.get("/", (req, res) => {
  res.send("Welcome to your Portfolio server");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
    