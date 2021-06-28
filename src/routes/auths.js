const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy




const keys = require('../../config/keys');

//Google Passport Middleware
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({
            gooogleId: profile.id
        }, (err, user) => {
            return cb(err, user)
        })
    }
));

//Facebook Passport Middleware
passport.use(new FacebookStrategy(
    {
        clientID: keys.facebookClientID,
        clientSecret: keys.facebookClientSecret,
        callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({
            facebookId: profile.id
        }, (err, user) => {
            return cb(err, user)
        })

    }
));


router.get('/google', passport.authenticate('google',{
    scope: ['profile', 'email']
}));
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });




router.get('/facebook', passport.authenticate('facebook',{
    scope: ['profile', 'email']
}));

router.get('/auth/facebook/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports = router;