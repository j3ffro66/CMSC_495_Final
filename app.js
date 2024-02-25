const express = require('express');
const app = express();
//const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');
const bcrypt = require("bcryptjs")
const fs = require('fs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(cookieParser());


app.use(express.static((__dirname + '/public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let middleLogger = (req, res, next) => {
    let current_datetime = new Date();
    let formatted_date =
        current_datetime.getFullYear() +
        "-" +
        (current_datetime.getMonth() + 1) +
        "-" +
        current_datetime.getDate() +
        " " +
        current_datetime.getHours() +
        ":" +
        current_datetime.getMinutes() +
        ":" +
        current_datetime.getSeconds();
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    let log = `[${formatted_date}] ${method}:${url} ${status}`;
    console.log(log);
    fs.appendFile("request_logs.txt", log + "\n", err => {
        if (err) {
            console.log(err);
        }
    });
    next();
};

app.use(middleLogger);

const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const taskManagementRouter = require('./routes/taskmanagement');

app.use('/', indexRouter);
app.use('/signup', registerRouter);
app.use('/login', loginRouter);
app.use('/taskmanagementpage', taskManagementRouter);


module.exports = app;