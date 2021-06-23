const express = require('express');
const connectDB = require("./src/db");
require("dotenv").config();
const User = require("./src/models/user");


//Connect to the database
connectDB();

const app = express();


const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => res.send("Hello world"))


app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))