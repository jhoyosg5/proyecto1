const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

const config = require('./config/database.js');

mongoose.connect(config.db, {});

require('./config/passport')(passport);

//settings
app.set('port', process.env.PORT || 3000 );
app.set('views', path.join(__dirname , 'views') );
app.set('view engine', 'ejs');

//midlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    secret: 'proyecto1',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//routes 
//routes 
require('./app/routes')(app, passport);

//static files
app.use(express.static(path.join(__dirname , 'public')));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});