const mongoose = require("mongoose");
const { Schema } = mongoose;

//create schema
const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    university: {
        id: {type: String},
        name : {type: String},
        state: {type: String},
        level : {type: String},
        faculty: {type: String}
        
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    religion: {
        type: String
    },
    tribe: {
        type: String
    },
    dob: { 
        type: Date 
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    hasRoomate: {
        type: Boolean,
        default: false
    },
    hasApartment:{
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }

},{
    timestamps: true
  });

const User = mongoose.model('User', userSchema);

module.exports = User;

const userData = {
    firstname : "Ada",
    lastname : "Bewaji",
    university: {
        id: "edfbnb445556666666",
        name : "Unilag",
        state: "Lagos",
        level : 100,
        faculty: "computer science"
        
    },
    email: 'ade@yahoo.com',
    password: "password",
    religion: "Christian",
    tribe: "Yoruba",
    dob: new Date("Dec 26, 2013"),
    gender: "male",
    isVerified: false,
    hasRoomate: false,
    hasApartment:false,
    isActive: false

}
const seedUser = async () => {
    try {
      const user = User.find();
      if(!user)
      {
        const newUser = await User.insertMany(userData);
        console.log(userData);
      }

    } catch (error) {
      console.log(error);
    }
  };
  
  
  seedUser();

