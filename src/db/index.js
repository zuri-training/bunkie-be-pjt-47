//Create coonection function
const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;

//Start a local mongodb server connection 
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log("Database Connected");

    }
    catch(err){
       console.error(err.message);

       process.exit(1);
    }
}

module.exports = connectDB;