const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


// const route = require('./routes/user_route');
const { config } = require('process');
const app = express();

//Bodyparser Middleware
app.use(express.json());



//DB config
const db = require('./config/keys').mongoURI;
const keys = require('./config/keys');



// Connect to Mongo

mongoose.connect(db,{ 
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true
 }) //Adding new mongo url parser
.then(()=> console.log("Mongo Connected..."))
.catch(err => console.log(err));

//Use Routes
app.use('/user', require('./routes/user_route'));
app.use('/auth', require('./routes/auths'));


const PORT = process.env.PORT || 5000;
 



app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))