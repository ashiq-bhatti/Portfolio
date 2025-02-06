const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const DbConnection = require("./Utils/Db.js");
const ContactRoutes = require("./Routes/ContactRoutes.js");
 
dotenv.config();
DbConnection();
 
const app = express();
app.use(cors());
app.use(express.json());

const Port = process.env.PORT || 3000;

app.use('/api/contact', ContactRoutes); 
app.use('/api/contact',ContactRoutes);  

app.get("/", (req, res) => {
  res.send("Welcome to your Portfolio server");
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
