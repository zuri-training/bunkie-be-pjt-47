const express = require('express');
const connectDB = require("./src/db");
const cookieParser = require('cookie-parser')


require("dotenv").config();


//Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
// app.use(validationResult());

//Routes
app.use('/user', require('./src/routes/user_auth'));
app.use('/auth', require('./src/routes/auths'));


const PORT = process.env.PORT || 5000;
 



app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))