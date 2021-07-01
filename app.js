const express = require('express');
const connectDB = require("./src/db");
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')


require("dotenv").config();


//Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());

//Routes
app.use('/user', require('./src/routes/user_auth'));
app.use('/auth', require('./src/routes/auths'));
app.use('/api', require('./src/routes/user'));


const PORT = process.env.PORT || 5000;
 



app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))