//Requerir una estrategia local
//Registrarnos de multiples formas

const localStrategy = require('passport-local').Strategy;

const User = require('../app/models/user');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    //metodo para registro
    passport.use('local-signup', new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, 
    function(req, email, password, done) {
        User.findOne({'local.email': email}, function (err, user) {
            if (err) { 
                return done(err);
            }
            if (user) { 
                return done(null, false, req.flash('signupMessage', 'The email is already taken.'));
            } else {
                var newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if (err) {throw err; }
                    return done(null, newUser);
                });
            }
        });
    }));

    //metodo para logearse
    passport.use('local-login', new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            User.findOne({ 'local.email': email }, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, req.flash('loginMessage', 'Usuario no encontrado'))
                }
                if (!user.validPassword(password)) {
                    return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta'));
                }
                return done(null, user);
            });
        }));

}