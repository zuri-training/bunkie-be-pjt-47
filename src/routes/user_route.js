const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


// User Model
const User = require('../models/user');


const { signup, signin } = require('../controller/user');
const { userSignupValidator } = require('../validator/index')

router.post('/signup',  signup);
router.post('/signin',  signin);
//@route GET /user
//@desc  Register new user 



router.post('/', (req, res, next) =>{
   const { firstname, lastname, email, password } = req.body;

//Simple validation 
if(!firstname || !lastname || !email || !password){
    return res.status(400).json({msg: "Please enter all fielsd"})
}

// Checking for existing user
User.findOne({ email })
.then(user => {
    if(user){
        return res.status(400).json({msg:"User already exists"})
    }

    const newUser = new User({
        firstname, 
        lastname,
        email,
        password
    });


    // Create salt & hash

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save()
                .then(user =>{
                    res.json({
                        user: {
                            id: user.id,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            email: user.email
                        }
                    })
                });
        })
    } )


})

});


module.exports = router;