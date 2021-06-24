const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy




const keys = require('../config/keys');

//Google Passport Middleware
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    accessToken => {
        console.log(accessToken);
    }
));

//Facebook Passport Middleware
passport.use(new FacebookStrategy(
    {
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    accessToken => {
        console.log(accessToken);
    }
));


router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));

router.get('/facebook', passport.authenticate('facebook',{
    scope: ['profile', 'email']
}));

module.exports = router;