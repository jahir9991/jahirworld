var express = require('express');
var router = express.Router();

module.exports = function (app, passport) {

    app.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            {
                successRedirect: '/profile',
                failureRedirect: '/error'
            }
        )
    )


}
