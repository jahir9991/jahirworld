// var LocalStrategy = require('passport-local').Strategy;
// FacebookStrategy = require('passport-facebook').Strategy;
// var User = require('../models/user').User;
// var UserSave = require('../models/user').findOrCreate;
// var configAuth = require('./../config/auth');
// var mongoose = require('mongoose');
module.exports = function (passport) {
    // passport.serializeUser(function (user, done) {
    //     done(null, user.id());
    // })
    // passport.deserializeUser(function (id, done) {
    //     User.findById(id, function (err, user) {
    //         done(err, user);
    //     });
    // });
    // passport.use('local-signup', new LocalStrategy({
    //         usernameField: 'email',
    //         passwordField: 'password',
    //         passReqToCallback: true
    //     },
    //     function (req, email, password, done) {
    //         process.nextTick(function () {
    //             User.findOne({'local.username': email}, function (err, user) {
    //                 if (err) {
    //                     return done(err);
    //                 }
    //                 if (user) {
    //                     return done(null, false, req.flash('signopMessage', 'logged..'));
    //                 }
    //                 else {
    //                     var newUser = new User();
    //                     newUser.local.username = email;
    //                     newUser.local.password = newuser.generateHash(password);
    //                     newUser.save(function (err) {
    //                         if (err) {
    //                             throw  err;
    //                             return done(null, newUser);
    //                         }
    //
    //                     })
    //
    //                 }
    //
    //             });
    //
    //
    //         });
    //
    //     }))
    //
    // passport.use('local-login', new LocalStrategy({
    //     usernameField: 'email',
    //     passwordField: 'password',
    //     passReqToCallback: true
    // }, function (req, email, password, done) {
    //     process.nextTick(function () {
    //         User.findOne({'local.username': email}, function (err, user) {
    //             if (err) return done(err);
    //             if (!user)
    //                 return done(null, false, req.flash('loginMessage', 'mo user'));
    //             if (!user.validPassword(password)) {
    //                 return done(null, false, req.flash('loginMessage', 'invalid user'));
    //             }
    //             return done(null, user);
    //
    //         })
    //
    //     })
    //
    // }));

    passport.use(new FacebookStrategy({
            clientID: configAuth.facebookAuth.clientID,
            clientSecret: configAuth.facebookAuth.clientSecret,
            callbackURL: configAuth.facebookAuth.callbackURL
        },
        function (accessToken, refreshToken, profile, done) {
            //check user table for anyone with a facebook ID of profile.id
            User.findOne({
                id: profile.id
            }, function (err, user) {
                if (err) {
                    return done(err);
                }
                //No user was found... so create a new user with values from Facebook (all the profile. stuff)
                if (!user) {

                    console.log(profile);
                    var user = new User({
                        id: profile.id,
                        username: profile.displayName

                    });
                    user.save(function (err) {
                        if (err)
                            console.log(err);

                        return done(err, user);
                    });
                } else {
                    //found user. Return
                    console.log(user);

                    return done(err, user);
                }
            });
        }
    ));


}

