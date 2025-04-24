const express = require("express");
const cors = require("cors");

const app = express();

//to allow cors origin , allowing difference instance fromdifffefent resources
app.use(cors());

const PORT = 9000;

//checking to see if port is running
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})