const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

const app = express();
app.use(express.json());

//to allow cors origin , allowing difference instance fromdifffefent resources
app.use(cors());
dotenv.config();
console.log(process.env.PORT, "PORT");

//define in env file port if not then use 3000 port
const PORT = process.env.PORT || 3000;

connectDB();

//sending response to get response in index
app.get("/", (req, res) => {
  res.send("Welcome to Ecom website API");
});

//checking to see if port is running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
