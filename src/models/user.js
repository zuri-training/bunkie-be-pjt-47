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
        type: String,
        required: true
    },
    tribe: {
        type: String,
        required: true
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